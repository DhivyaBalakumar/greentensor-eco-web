import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactRequest {
  name: string;
  email: string;
  company?: string;
  message: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, message }: ContactRequest = await req.json();

    console.log('Received contact form submission:', { name, email, company });

    // Save to database
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { error: dbError } = await supabaseClient
      .from('contact_submissions')
      .insert([{ name, email, company: company || null, message }]);

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error('Failed to save submission');
    }

    // Send email via SMTP using basic socket connection
    const smtpUser = Deno.env.get('SMTP_USER');
    const smtpPassword = Deno.env.get('SMTP_PASSWORD');

    if (!smtpUser || !smtpPassword) {
      console.error('SMTP credentials not configured');
      throw new Error('Email service not configured');
    }

    // Determine SMTP host based on email provider
    let smtpHost = 'smtp.gmail.com';
    let smtpPort = 587;
    
    if (smtpUser.includes('@outlook.com') || smtpUser.includes('@hotmail.com')) {
      smtpHost = 'smtp-mail.outlook.com';
      smtpPort = 587;
    } else if (smtpUser.includes('@yahoo.com')) {
      smtpHost = 'smtp.mail.yahoo.com';
      smtpPort = 587;
    }

    // Create simple email body
    const emailBody = [
      `From: ${smtpUser}`,
      `To: ${smtpUser}`,
      `Subject: New Contact Form Submission from ${name}`,
      'MIME-Version: 1.0',
      'Content-Type: text/html; charset=utf-8',
      '',
      `<html><body>`,
      `<h2>New Contact Form Submission</h2>`,
      `<p><strong>Name:</strong> ${name}</p>`,
      `<p><strong>Email:</strong> ${email}</p>`,
      company ? `<p><strong>Company:</strong> ${company}</p>` : '',
      `<p><strong>Message:</strong></p>`,
      `<p>${message.replace(/\n/g, '<br>')}</p>`,
      `</body></html>`,
    ].filter(Boolean).join('\r\n');

    try {
      const conn = await Deno.connect({ hostname: smtpHost, port: smtpPort });
      const encoder = new TextEncoder();
      const decoder = new TextDecoder();

      async function readResponse() {
        const buffer = new Uint8Array(1024);
        const n = await conn.read(buffer);
        return decoder.decode(buffer.subarray(0, n || 0));
      }

      async function sendCommand(cmd: string) {
        await conn.write(encoder.encode(cmd + '\r\n'));
        return await readResponse();
      }

      // SMTP conversation
      await readResponse(); // Welcome message
      await sendCommand(`EHLO ${smtpHost}`);
      await sendCommand('STARTTLS');
      
      // Upgrade to TLS
      const tlsConn = await Deno.startTls(conn, { hostname: smtpHost });
      
      async function tlsSend(cmd: string) {
        await tlsConn.write(encoder.encode(cmd + '\r\n'));
        const buffer = new Uint8Array(1024);
        const n = await tlsConn.read(buffer);
        return decoder.decode(buffer.subarray(0, n || 0));
      }

      await tlsSend(`EHLO ${smtpHost}`);
      await tlsSend('AUTH LOGIN');
      await tlsSend(btoa(smtpUser));
      await tlsSend(btoa(smtpPassword));
      await tlsSend(`MAIL FROM:<${smtpUser}>`);
      await tlsSend(`RCPT TO:<${smtpUser}>`);
      await tlsSend('DATA');
      await tlsSend(emailBody + '\r\n.');
      await tlsSend('QUIT');

      tlsConn.close();
    } catch (smtpError: any) {
      console.error('SMTP error:', smtpError);
      throw new Error(`Failed to send email: ${smtpError.message || 'Unknown error'}`);
    }

    console.log('Email sent successfully');

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('Error in send-contact-email function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
