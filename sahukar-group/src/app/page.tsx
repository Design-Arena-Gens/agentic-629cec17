const services = [
  {
    title: "Home & Lifestyle",
    description:
      "One-window solutions for property setup, renovations, domestic staffing, and premium concierge assistance.",
    items: ["Home maintenance squads", "Interior & civil upgrades", "Smart home setups", "Family concierge support"],
  },
  {
    title: "Business Enablement",
    description:
      "Corporate formation, compliance, and operational excellence programs tailored for fast-growing organisations.",
    items: ["Company incorporation", "Licensing & compliance", "Process optimisation", "Growth partnerships"],
  },
  {
    title: "Finance & Legal",
    description:
      "Structured finance, lending assistance, legal advisory, and risk management under strict confidentiality.",
    items: ["Loan & capital advisory", "Legal drafting & vetting", "Risk & asset protection", "Taxation guidance"],
  },
  {
    title: "Technology & Brand",
    description:
      "Digital transformation, product development, and image-building assets that move your brand forward.",
    items: ["Digital product builds", "Brand identity systems", "Marketing command centres", "IT infrastructure"],
  },
];

const highlights = [
  { stat: "17+", label: "Service Verticals" },
  { stat: "9,500+", label: "Trusted Clients & Families" },
  { stat: "24/7", label: "Rapid Response Command" },
  { stat: "15 yrs", label: "Legacy in Indore & MP" },
];

const verticals = [
  "Sahukar HomeCare",
  "Sahukar Corporate Desk",
  "Sahukar Finance & Legal",
  "Sahukar Realty Alliance",
  "Sahukar Digital Works",
  "Sahukar Hospitality Network",
];

const process = [
  {
    title: "Discover",
    detail: "Private consultation to map every need across personal, family, and business verticals.",
  },
  {
    title: "Design",
    detail: "Bespoke action board curated by Sahukar specialists with clear milestones and owners.",
  },
  {
    title: "Deliver",
    detail: "On-ground execution, continuous reporting, and escalations handled by our command desk.",
  },
  {
    title: "Delight",
    detail: "We stay with you post-delivery for optimisation, upgrades, and long-term stewardship.",
  },
];

const contactChannels = [
  { label: "Direct Line", value: "+91 98930 99909" },
  { label: "Executive Desk", value: "connect@sahukargroup.com" },
  { label: "Headquarters", value: "Scheme No. 78, Indore, MP - 452010" },
];

function SilverShield() {
  return (
    <span className="relative mr-3 inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-slate-500/60 bg-gradient-to-br from-slate-100/20 via-slate-200/10 to-slate-50/5 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
      <span className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
      <span className="relative text-2xl font-extrabold tracking-tight text-slate-100">S</span>
    </span>
  );
}

export default function Home() {
  return (
    <div className="relative z-10 text-sm md:text-base">
      <header className="sticky top-0 z-30 border-b border-white/5 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center">
            <SilverShield />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-300/80">Sahukar Group</p>
              <p className="text-lg font-semibold text-white">All Problem, One Solution</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#verticals" className="transition hover:text-white">
              Verticals
            </a>
            <a href="#founder" className="transition hover:text-white">
              Leadership
            </a>
            <a href="#connect" className="transition hover:text-white">
              Connect
            </a>
          </nav>
          <a
            href="#connect"
            className="hidden rounded-full border border-slate-200/40 bg-gradient-to-r from-slate-50/20 to-slate-200/10 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-slate-100 shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:border-slate-100/70 hover:from-slate-50/30 hover:to-slate-200/20 md:block"
          >
            Connect Me
          </a>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-12 md:gap-28 md:pb-32 md:pt-16">
        <section className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-300/20 bg-white/5 px-4 py-1 text-xs tracking-[0.35em] text-slate-200/80">
              <span className="h-2 w-2 rounded-full bg-slate-200" />
              Est. Indore - Trusted since 2009
            </div>
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                &quot;All Problem, One Solution - Sahukar Group.&quot;
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-slate-200/90">
                From home to business, we solve everything under one trusted name. Sahukar Group is Indore&apos;s
                premier command centre for premium lifestyle, enterprise, and strategic support.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#connect"
                className="rounded-full bg-slate-50 px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-slate-200"
              >
                Connect Me
              </a>
              <a
                href="#services"
                className="rounded-full border border-slate-300/30 px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-200 transition hover:border-slate-100/60 hover:text-white"
              >
                Explore Services
              </a>
            </div>
            <div className="grid gap-4 rounded-3xl border border-white/5 bg-white/5 p-6 md:grid-cols-4 md:gap-6">
              {highlights.map((item) => (
                <div key={item.label} className="space-y-2">
                  <p className="text-3xl font-extrabold text-white">{item.stat}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-300/70">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel relative flex flex-col justify-between overflow-hidden p-8">
            <div className="absolute inset-x-16 -top-24 h-52 rounded-full bg-gradient-to-b from-white/25 to-transparent blur-3xl" />
            <div className="relative space-y-6">
              <h2 className="text-lg font-semibold uppercase tracking-[0.3em] text-slate-200/80">
                Why Sahukar Group
              </h2>
              <ul className="space-y-4 text-sm text-slate-200/90">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-8 rounded-full bg-slate-200/70" />
                  Boardroom-level confidentiality, desi warmth, and elite service design.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-8 rounded-full bg-slate-200/70" />
                  Dedicated relationship executives for families, brands, and institutions.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-8 rounded-full bg-slate-200/70" />
                  Verified partner ecosystem across finance, legal, realty, hospitality, and tech.
                </li>
              </ul>
            </div>
            <div className="relative mt-12 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-sm text-slate-200/90">
              <p className="uppercase tracking-[0.32em] text-slate-300/80">Founder&apos;s Message</p>
              <p className="mt-3 text-base font-medium text-white">
                &quot;We built Sahukar Group to be Indore&apos;s most dependable problem solver. Every request, every
                handshake, carries our personal assurance.&quot; - Krishna Sahukar
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="space-y-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-300/80">Service Spectrum</p>
              <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Built for Every Sphere You Operate In</h2>
            </div>
            <p className="max-w-xl text-sm text-slate-300/90">
              Our multi-disciplinary teams sync lifestyle, enterprise, finance, and technology workflows to give you a
              single window of accountability. Strategic counsel meets precise execution.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="glass-panel flex flex-col gap-5 p-8">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm text-slate-300/90">{service.description}</p>
                </div>
                <ul className="grid gap-3 text-sm text-slate-200/80">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-slate-200/80" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="verticals" className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel p-8">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-300/80">Signature Verticals</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              A powerhouse collective for modern families, founders, and institutions.
            </h2>
            <p className="mt-4 text-sm text-slate-300/90">
              Each Sahukar vertical is led by specialists, backed by verified vendor networks, and unified through a
              single command desk. We call it the Sahukar Assurance Framework.
            </p>
            <div className="mt-8 grid gap-3 text-sm text-slate-100">
              {verticals.map((vertical) => (
                <div key={vertical} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <span>{vertical}</span>
                  <span className="text-xs uppercase tracking-[0.3em] text-slate-300/70">Indore - Pan-India</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel flex flex-col justify-between p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-300/80">Trusted by Leaders</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                From policymakers to premium residential communities, the Sahukar name stands for precision and privacy.
              </h3>
              <p className="mt-4 text-sm text-slate-300/90">
                Private family offices, MSME promoters, hospitality brands, and civic initiatives rely on our team to
                anticipate needs, coordinate excellence, and protect reputations.
              </p>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {[
                { title: "Executive Stewards", detail: "Dedicated SPOCs and 24/7 war-room support." },
                { title: "Verified Network", detail: "Pre-vetted experts across legal, finance, realty, design, tech." },
                { title: "Confidential", detail: "NDA-backed operations & secure knowledge management." },
                { title: "Outcome Driven", detail: "Metrics-first delivery with post-project optimisation." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-300/80">{item.title}</p>
                  <p className="mt-2 text-slate-200/80">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-300/80">Engagement Blueprint</p>
              <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
                Precision-led delivery with a human, grounded touch.
              </h2>
            </div>
            <p className="mt-4 max-w-xl text-sm text-slate-300/90 md:mt-0">
              Every mandate flows through our command structure. You receive clarity on owners, timelines, and
              escalations-ensuring no request is left unattended.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {process.map((step, index) => (
              <div key={step.title} className="glass-panel flex flex-col gap-3 px-5 py-6">
                <span className="text-xs uppercase tracking-[0.4em] text-slate-300/70">
                  Step {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-sm text-slate-300/90">{step.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="founder" className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="glass-panel flex flex-col justify-between p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-300/80">Founder</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Krishna Sahukar</h2>
              <p className="mt-3 text-sm text-slate-300/90">
                Visionary entrepreneur, master connector, and trusted advisor for transformative initiatives across
                Madhya Pradesh. Krishna built Sahukar Group to elevate the service standards of the region while
                retaining a desi soul.
              </p>
            </div>
            <div className="mt-8 space-y-3 text-sm text-slate-200/80">
              <p>
                &quot;Our promise is simple: dignity, discretion, and delivery for every client who walks through our
                doors.&quot;
              </p>
              <p>Through community upliftment programs, strategic business alliances, and personal stewardship, Krishna
                champions Indore&apos;s rise as a modern powerhouse.</p>
            </div>
          </div>
          <div className="glass-panel grid gap-6 p-8">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/15 via-white/5 to-transparent p-6 shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-300/80">Legacy Snapshot</p>
              <ul className="mt-4 grid gap-3 text-sm text-slate-200/85">
                <li>- Advisor to premium residential townships and industrial clusters across Indore.</li>
                <li>- Mentor to emerging founders, angel investor in local ventures, and patron of cultural initiatives.</li>
                <li>- Leading voice in bridging grassroots needs with corporate-grade solutions.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-300/80">Leadership Tenets</p>
              <dl className="mt-4 grid gap-4 text-sm text-slate-200/85">
                <div>
                  <dt className="font-semibold text-white">Integrity First</dt>
                  <dd>Every mandate is backed by transparent reporting and sealed confidentiality.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">People Centricity</dt>
                  <dd>We invest in relationships, nurturing communities, and creating win-win collaborations.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">Future Ready</dt>
                  <dd>Adopting technology, analytics, and design thinking to keep clients ahead.</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section id="connect" className="glass-panel relative overflow-hidden px-8 py-10">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/15 via-transparent to-transparent" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-300/80">Let&apos;s Create Impact</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Partner with the Sahukar Command Desk</h2>
              <p className="mt-4 max-w-xl text-sm text-slate-300/90">
                Share your requirements, schedule a private consultation, or invite us to co-create your next big
                milestone. Our executive desk will respond within hours.
              </p>
            </div>
            <div className="grid gap-4 text-sm text-slate-200/90">
              {contactChannels.map((channel) => (
                <div key={channel.label} className="flex flex-col rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                  <span className="text-xs uppercase tracking-[0.35em] text-slate-300/80">{channel.label}</span>
                  <span className="mt-2 text-base font-semibold text-white">{channel.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-8 flex flex-wrap items-center gap-4 text-xs text-slate-300/70">
            <span className="uppercase tracking-[0.4em]">Follow Through</span>
            <span className="h-px flex-1 bg-gradient-to-r from-slate-200/40 to-transparent" />
            <span>WhatsApp concierge - In-person meetings - National travel on request</span>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-black/60 px-6 py-6 text-xs text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center">
            <SilverShield />
            <div>
              <p className="text-sm font-semibold text-white">Sahukar Group</p>
              <p className="text-[11px] uppercase tracking-[0.4em] text-slate-400">
                Indore - Madhya Pradesh - India
              </p>
            </div>
          </div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
            All Problem, One Solution - Sahukar Group. Connect Me.
          </p>
        </div>
      </footer>
    </div>
  );
}
