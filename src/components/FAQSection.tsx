import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Why will companies buy GreenTensor? Won't they be resistant?",
      answer: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Pain → Buyer Motivation</h4>
            <p className="text-muted-foreground">
              Rising AI compute bills, visible CO₂ headlines, and incoming regulation make this a real cost and risk problem. Security incidents (model leaks, jailbreaks) create legal & reputational risk. ESG teams need auditable evidence for disclosures.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Buyer Benefits</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Measurable cost & CO₂ reduction per model/job</li>
              <li>Automated adversarial checks and runtime protections → fewer incidents</li>
              <li>One-click ESG & audit-ready reports</li>
              <li>Minimal code changes; quick pilot ROI</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Why Not Resistant</h4>
            <p className="text-muted-foreground">
              Position as risk & cost reduction (not extra work). Pilot-first approach with measurable savings overcomes inertia. Proof-of-value pilots convert skeptics: show energy saved / incidents prevented / audit time reduced.
            </p>
          </div>
        </div>
      )
    },
    {
      question: "Don't cloud providers already offer this? How is GreenTensor different?",
      answer: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Cloud providers provide infra-level telemetry (VM/instance usage, power metrics, some sustainability dashboards) and infra-level security controls (IAM, WAF).
          </p>
          <div>
            <h4 className="font-semibold mb-2">GreenTensor Difference</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li><strong>Model-level visibility:</strong> ties energy and emissions to specific experiments, epochs, or model versions — not just VM hours</li>
              <li><strong>Security at model & data level:</strong> adversarial testing, membership inference, poisoning detection — these are model logic checks cloud consoles don't provide</li>
              <li><strong>Unified correlation + optimization:</strong> correlate carbon, cost, and security signals and produce trade-off recommendations</li>
              <li><strong>ESG-ready AI reports:</strong> with traceability and provenance — built specifically for AI workflows and audits</li>
            </ul>
          </div>
          <p className="text-muted-foreground font-semibold">
            Bottom line: cloud = infra telemetry; GreenTensor = model + workflow + compliance layer.
          </p>
        </div>
      )
    },
    {
      question: "Why can't they just use siloed tools? Is GreenTensor a mere wrapper?",
      answer: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Problems with Siloed Approach</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Disconnected dashboards → no cross-correlation between carbon and security</li>
              <li>Multiple tools increase operational overhead & inconsistent reporting</li>
              <li>Siloed outputs don't feed audit-ready provenance</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">GreenTensor is Not Just a Wrapper</h4>
            <p className="text-muted-foreground mb-2">Integrates outputs but adds value layers:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li><strong>Correlation engine:</strong> links model runs → CO₂ → security score</li>
              <li><strong>Optimization engine:</strong> automated scheduling/parameter suggestions</li>
              <li><strong>Compliance/reporting engine:</strong> audit trails & templates</li>
            </ul>
            <p className="text-muted-foreground mt-2">
              Acts as an orchestration & reasoning layer on top of existing tools (MLflow, CodeCarbon, ART), turning them into a single product experience.
            </p>
          </div>
        </div>
      )
    },
    {
      question: "How does GreenTensor adapt to LLMs, GenAI, Agentic AI, etc.?",
      answer: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">LLMs / GenAI (training & inference)</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Model-level energy metrics per fine-tune and inference burst</li>
              <li>Prompt- and token-level observability (inference CO₂ attribution)</li>
              <li>Adversarial prompt testing (jailbreak/prompt-injection simulations)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Agentic AI / Autonomous Agents</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Track action chains and decision points for anomalous behavior</li>
              <li>Detect manipulative input sequences and unsafe action triggers</li>
              <li>Runtime guardrails: sandboxing, rule-based blocks, human-in-the-loop for risky actions</li>
            </ul>
          </div>
          <p className="text-muted-foreground font-semibold">
            Key point: same platform, different adapters — custom telemetry + adversarial test suites per model type.
          </p>
        </div>
      )
    },
    {
      question: "How does GreenTensor operate across Pre-deploy / Deploy / Post-deploy phases?",
      answer: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Pre-deployment</h4>
            <p className="text-muted-foreground">
              Monitor training energy per epoch; run adversarial robustness tests; validate dataset integrity; produce pre-deploy ESG snapshot. Optimization suggestions: pruning, mixed precision, schedule shift.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Deployment</h4>
            <p className="text-muted-foreground">
              Runtime telemetry for inference energy, latency, request patterns. Runtime security: input sanitization, anomaly detection, rate limiting, model sandboxing, canary traffic. Alerts & automated short-term mitigations (throttle, revert to safe model, raise human review).
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Post-deployment</h4>
            <p className="text-muted-foreground">
              Continuous red-teaming (periodic simulated adversarial attacks). Drift & distribution monitoring → detect when model behavior degrades or becomes vulnerable. For attacks: detection (anomaly signals), containment (block, throttle, rollback), forensics (audit trail, snapshots), remediation (retrain, patch).
            </p>
          </div>
          <p className="text-muted-foreground font-semibold">
            Why this works: combination of static prechecks + runtime behavioral detection + continuous adversarial testing yields strong end-to-end defense.
          </p>
        </div>
      )
    },
    {
      question: "What security certifications should GreenTensor pursue?",
      answer: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Recommended Certifications</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li><strong>ISO 27001</strong> — Information Security Management (baseline)</li>
              <li><strong>SOC 2 Type II</strong> — Service security posture for SaaS offerings</li>
              <li><strong>ISO 27701</strong> — Privacy information management (if PII involved)</li>
              <li>Optionally: CSA STAR for cloud security, ISO 14001 for environmental systems</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Security Pillar Implementation</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Threat modeling & secure SDLC</li>
              <li>RBAC, least privilege, multi-tenant isolation</li>
              <li>Encryption in transit & at rest, key management</li>
              <li>Agent hardening and secure attestation for telemetry</li>
              <li>Runtime protections: input sanitization, anomaly detection, WAF integration, rate-limiting</li>
              <li>Periodic red-team & third-party pentests</li>
              <li>Immutable audit logs & tamper-evident storage for compliance</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      question: "What does GreenTensor's ESG reporting cover?",
      answer: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Coverage (AI-specific Scope)</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Per-model CO₂ (training + inference), energy use (kWh), compute hours</li>
              <li>Resource type (GPU/CPU), region-adjusted carbon intensity</li>
              <li>Security KPIs: adversarial test pass/fail counts, incidents detected & mitigated, model integrity scores</li>
              <li>Operational traceability: experiment IDs, timestamps, hashes of datasets & model versions</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Formats & Templates</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Export to CSV/JSON for analytics; auto-generate PDF audit reports</li>
              <li>Map outputs to common frameworks: GRI, CSRD, ISO 14064 (energy reporting)</li>
              <li>Custom templates for EU AI Act requirements (model risk, safety)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Certifications for Trust</h4>
            <p className="text-muted-foreground">
              ISO 14001 (environmental management) helps validate environmental claims. Third-party validation (independent auditor) for carbon figures if selling to large enterprises.
            </p>
          </div>
        </div>
      )
    },
    {
      question: "How is the telemetry collection agent built to achieve CloudWatch-level accuracy?",
      answer: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Agent Components</h4>
            <p className="text-muted-foreground mb-2">Lightweight collector (Python/Go) with:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>System metrics (CPU, RAM)</li>
              <li>GPU metrics (PyNVML / NVIDIA DCGM)</li>
              <li>Container/K8s metrics (cAdvisor / kubelet)</li>
              <li>Process-level metrics (time per training loop, tokens per call)</li>
              <li>Power draw via host APIs or cloud provider metrics</li>
              <li>Time-synchronized, batched telemetry with secure transport (TLS) to processing pipeline</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Achieving CloudWatch Accuracy</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Integrate native cloud APIs (CloudWatch / Azure Monitor / Stackdriver) for provider-reported metrics</li>
              <li>Cross-validate with onboard telemetry (PyNVML/DCGM) and, when possible, rack PDUs / IPMI readings</li>
              <li>Ensure high-precision timestamps (NTP) and consistent sampling intervals</li>
              <li>Use calibration runs to correct telemetry drift and produce per-instance power-to-energy conversions</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Architecture</h4>
            <p className="text-muted-foreground">
              Agents → Kafka/Redis streams → processing (windowing & aggregation) → metrics DB (Prometheus/Influx) → BI/Grafana.
            </p>
          </div>
        </div>
      )
    },
    {
      question: "What is GreenTensor's go-to-market strategy?",
      answer: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Phase A — Validation & Credibility</h4>
            <p className="text-muted-foreground">
              Seed pilots with university labs, DERBI incubatee partners, and small AI startups. Publish pilot case studies: energy saved, incidents prevented, audit time reduced.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Phase B — Targeted Verticals</h4>
            <p className="text-muted-foreground">
              Start with AI-heavy verticals: FinTech, HealthTech, AdTech, Research labs. Offer compliance/ESG value prop to sustainability & legal teams.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Phase C — Partnerships</h4>
            <p className="text-muted-foreground">
              Integrate with ML platforms (MLflow, Weights & Biases) & cloud marketplaces. Partner with cloud reseller partners and sustainability consultancies.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Phase D — Sales Motion</h4>
            <p className="text-muted-foreground">
              Pilot → Proof-of-Value (30–90 days) → Enterprise licensing + onboarding. Pricing: usage-based + enterprise package + professional services for integrations and compliance.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Channels</h4>
            <p className="text-muted-foreground">
              Developer evangelism (open-source agent), conferences, ESG conferences, targeted outbound to CTO/CISO/Head of Sustainability.
            </p>
          </div>
        </div>
      )
    },
    {
      question: "How does the whole GreenTensor mechanism work end-to-end?",
      answer: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Ingestion</h4>
            <p className="text-muted-foreground">
              Agent hooks into training scripts, inference servers, or API wrappers. Collects resource telemetry, job metadata, inputs/outputs (hashed), and logs.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Processing</h4>
            <p className="text-muted-foreground">
              Stream processing normalizes metrics, attributes energy to jobs, and computes CO₂ using region/time carbon intensity. Security engine runs scheduled adversarial tests, membership inference, and anomaly detectors on logs.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Correlation & Reasoning</h4>
            <p className="text-muted-foreground">
              Correlate job → model version → dataset → security test results → carbon footprint. Optimization engine evaluates trade-offs (run now vs. delay; full model vs. distill).
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Action & UI</h4>
            <p className="text-muted-foreground">
              Dashboard with per-job metrics, alerts, and automated recommendations. Exportable audit reports and APIs for integration.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Automated Responses</h4>
            <p className="text-muted-foreground">
              Runtime mitigations (throttling, canarying, temporary disable), scheduling policies, and ticket creation for incidents.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Persistence</h4>
            <p className="text-muted-foreground">
              Immutable logs (for audit) + model/version artifacts stored with hashes for provenance.
            </p>
          </div>
        </div>
      )
    },
    {
      question: "Is GreenTensor a model-level tool or a cloud-platform-level tool?",
      answer: (
        <div className="space-y-4">
          <p className="text-muted-foreground font-semibold">
            Answer: Both — but primarily a workflow/model-level governance layer that can be deployed at cloud level or per-model.
          </p>
          <div>
            <h4 className="font-semibold mb-2">Why Model/Workflow-First?</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>The value is in attributing carbon & security signals to specific models, experiments, and versions</li>
              <li>Model-level checks (adversarial tests, membership inference) must see model artifacts and training data metadata</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Why Cloud-Level Integration?</h4>
            <p className="text-muted-foreground">
              To get absolute power & region metrics, optimization scheduling across regions, and to integrate with infra-level controls.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Deployment Pattern</h4>
            <p className="text-muted-foreground">
              Recommended: a hybrid: agents per model / per cluster + a centralized control plane that aggregates across cloud accounts.
            </p>
          </div>
        </div>
      )
    },
    {
      question: "Don't companies already have teams that do this? Why a separate tool?",
      answer: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Reality</h4>
            <p className="text-muted-foreground">
              Larger firms have siloed teams (ML engineers, security, sustainability), but cross-team work is slow and manual. Manual workflows are error-prone, inconsistent, and not auditable.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Why a Tool</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Automates attribution, reduces time-to-audit, consolidates responsibilities</li>
              <li>Provides repeatable, provable controls</li>
              <li>Centralizes cross-functional needs in one product instead of costly custom integrations</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">ROI Argument</h4>
            <p className="text-muted-foreground">
              Time saved from audits, fewer incidents, and energy cost reductions justify the tool.
            </p>
          </div>
        </div>
      )
    },
    {
      question: "What about small companies who only use APIs (no MLOps)?",
      answer: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Approach</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Offer a lightweight mode: monitor API calls, estimate per-call energy & CO₂ (using provider energy disclosures)</li>
              <li>Run prompt-level security checks</li>
              <li>Provide token and prompt optimization suggestions (e.g., compress prompts, caching, rate-limits)</li>
              <li>Provide a simple dashboard and monthly ESG usage report</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Why Include Them</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Large market (most companies using AI are API-first)</li>
              <li>Lower entry barrier and quicker conversions (immediate cost-savings)</li>
            </ul>
          </div>
          <p className="text-muted-foreground font-semibold">
            Keep core pitch consistent: GreenTensor = GreenOps + SecOps + Observability — apply lighter-weight integrations for API-only customers.
          </p>
        </div>
      )
    }
  ];

  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-eco-green to-tech-blue bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about GreenTensor
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;