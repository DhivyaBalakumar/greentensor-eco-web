import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

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

    // Send email via SMTP
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

    const client = new SMTPClient({
      connection: {
        hostname: smtpHost,
        port: smtpPort,
        tls: true,
        auth: {
          username: smtpUser,
          password: smtpPassword,
        },
      },
    });

    await client.send({
      from: smtpUser,
      to: smtpUser, // Send to your own email
      subject: `New Contact Form Submission from ${name}`,
      html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <div style="background: linear-gradient(135deg, #22c55e 0%, #10b981 100%); padding: 30px; text-align: center;">
      <h2 style="color: #ffffff; margin: 0;">New Contact Form Submission</h2>
    </div>
    <div style="padding: 30px;">
      <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
        <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #22c55e;">${email}</a></p>
        ${company ? `<p style="margin: 10px 0;"><strong>Company:</strong> ${company}</p>` : ''}
      </div>
      <div style="background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h3 style="margin-top: 0; color: #22c55e;">Message:</h3>
        <p style="white-space: pre-wrap; line-height: 1.6; color: #374151;">${message}</p>
      </div>
      <p style="color: #6b7280; font-size: 12px; margin-top: 30px; text-align: center; border-top: 1px solid #e5e7eb; padding-top: 20px;">
        Sent from GreenTensor Contact Form
      </p>
    </div>
  </div>
</body>
</html>`,
    });

    await client.close();

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
