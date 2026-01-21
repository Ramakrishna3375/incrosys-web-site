import HomeImg from '../assets/Homeimg.avif';
import Header from './Header';
import Footer from './Footer';

const services = [
  { title: 'Cloud & Infrastructure', description: 'Scalable, secure cloud foundations with observability built in.' },
  { title: 'Product Engineering', description: 'Full-lifecycle delivery from discovery to resilient releases.' },
  { title: 'Automation & AI', description: 'Workflow automation, AI copilots, and data pipelines that ship.' },
  { title: 'Managed Services', description: '24/7 reliability, performance tuning, and customer-grade SLAs.' },
];

const highlights = [
  { label: '15+ years', detail: 'Enterprise delivery experience' },
  { label: '24/7', detail: 'Global support coverage' },
  { label: '99.9%', detail: 'Target uptime across managed stacks' },
];

const itOperations = [
  { title: 'SRE & Observability', detail: 'Full-fidelity logging, metrics, and tracing with actionable runbooks.' },
  { title: 'Incident Response', detail: 'On-call rotations, playbooks, and post-incident reviews that drive improvements.' },
  { title: 'Change Management', detail: 'Release governance with automated checks, blue/green and canary rollouts.' },
  { title: 'Security & Compliance', detail: 'CIS hardening, least-privilege access, and continuous compliance evidence.' },
];

const techStack = [
  'AWS / Azure cloud foundations',
  'Kubernetes, containers, and IaC (Terraform)',
  'CI/CD with GitHub Actions and Argo',
  'API platforms, microservices, event-driven patterns',
  'Data pipelines and AI-powered automation',
];

function IncrosysPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <section
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-900/80 text-white"
          style={{
            backgroundImage: `url(${HomeImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-slate-950/50" />
          <div className="relative z-10 grid gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-14">
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-blue-200">Incrosys</p>
              <h1 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Building reliable digital products and platforms.
              </h1>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-100 max-w-xl">
                We pair engineering rigor with product thinking to deliver experiences your customers trust. From cloud
                foundations to AI-enabled workflows, Incrosys keeps your roadmap shipping.
              </p>
              <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
                <button className="rounded-full bg-blue-600 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors">
                  Schedule a call
                </button>
                <button className="rounded-full border border-slate-200 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-slate-100 hover:border-slate-300 hover:text-white transition-colors">
                  View capabilities
                </button>
              </div>
              <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl sm:rounded-2xl border border-white/15 bg-slate-900/60 px-4 sm:px-5 py-3 sm:py-4 shadow-sm backdrop-blur"
                  >
                    <p className="text-xs sm:text-sm font-semibold text-blue-200">{item.label}</p>
                    <p className="text-xs sm:text-sm text-slate-100 mt-1">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative z-10 mt-6 sm:mt-8 lg:mt-0 border-t border-white/10 pt-6 sm:pt-8 lg:pt-0 lg:border-l lg:border-t-0 lg:pl-8 xl:pl-10">
              <div className="rounded-2xl sm:rounded-3xl bg-blue-600/85 p-6 sm:p-8 text-white shadow-xl backdrop-blur">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-blue-100">Delivery Framework</p>
                  <span className="rounded-full bg-white/15 px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold">Trusted</span>
                </div>
                <p className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl font-semibold leading-snug">
                  Strategy, engineering, and 24/7 reliability teams working as one.
                </p>
                <div className="mt-4 sm:mt-6 grid gap-2 sm:gap-3">
                  {['Discovery & Design', 'Cloud Foundations', 'Secure Delivery', 'AI & Automation', 'Run & Optimize'].map(
                    (phase) => (
                      <div key={phase} className="flex items-center justify-between rounded-xl sm:rounded-2xl bg-white/10 px-3 sm:px-4 py-2 sm:py-3">
                        <span className="text-xs sm:text-sm font-medium">{phase}</span>
                        <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-400 ml-2" />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 sm:mt-14">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900">What we do</h2>
            <a href="#" className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700">
              Explore all services
            </a>
          </div>
          <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {services.map((service) => (
              <div key={service.title} className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600">{service.description}</p>
                <button className="mt-3 sm:mt-4 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700">Learn more →</button>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 sm:mt-14 rounded-2xl sm:rounded-3xl bg-slate-900 px-4 sm:px-6 md:px-8 py-8 sm:py-10 text-white shadow-xl">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.15em] text-blue-200">Partnership</p>
              <h3 className="mt-2 sm:mt-3 text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">Scale with a team that delivers.</h3>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-slate-200">
                Incrosys embeds with your teams to accelerate launches, modernize platforms, and keep production stable. We bring pragmatic roadmaps, measurable outcomes, and a commitment to support.
              </p>
              <div className="mt-4 sm:mt-5 flex flex-wrap gap-2 sm:gap-3">
                <span className="rounded-full bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">Design Sprints</span>
                <span className="rounded-full bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">Platform Modernization</span>
                <span className="rounded-full bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">AI Enablement</span>
              </div>
            </div>
            <div className="mt-6 lg:mt-0 rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 shadow-inner">
              <p className="text-xs sm:text-sm font-semibold text-blue-100">Engagement Model</p>
              <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-400" />
                  <span>Pod-based delivery teams aligned to your priorities.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-400" />
                  <span>Milestone-driven plans with transparent progress.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-400" />
                  <span>Site reliability coverage with clear runbooks and SLAs.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-10 sm:mt-14">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900">IT Operations Excellence</h2>
            <a href="#" className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700">
              View operating model
            </a>
          </div>
          <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {itOperations.map((item) => (
              <div key={item.title} className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 sm:mt-14 rounded-2xl sm:rounded-3xl border border-slate-200 bg-white px-4 sm:px-6 py-6 sm:py-8 shadow-sm">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900">Technology Stack & Tooling</h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">Battle-tested platforms and tooling we deploy for resilient IT operations.</p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2 sm:gap-3">
            {techStack.map((item) => (
              <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-slate-700">
                {item}
              </span>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default IncrosysPage;

