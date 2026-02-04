import { Link } from 'react-router-dom';
import HomeImg from '../assets/ITConsulting.webp';
import Header from '../website/Header';
import Footer from '../website/Footer';

const consultingPoints = [
  'Technology roadmaps aligned to business goals and budgets.',
  'Cloud and infrastructure modernization with security baked in.',
  'Delivery governance: SDLC, DevSecOps, QA, and release management.',
  'Observability, SRE, and incident response playbooks.',
  'Cost optimization with FinOps guardrails and reporting.',
];

const serviceHighlights = [
  { title: 'Strategy & Advisory', desc: 'Current-state assessment, target architecture, and phased transformation plans.' },
  { title: 'Cloud & Platform', desc: 'Landing zones, Kubernetes, and automation for resilient deployments.' },
  { title: 'Delivery Acceleration', desc: 'Product pods, DevSecOps pipelines, and quality engineering.' },
  { title: 'Operations Excellence', desc: 'Runbooks, SLOs/SLIs, and proactive monitoring tuned to your stack.' },
];

function ItConsultingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
        <section
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-900/85 text-white"
          style={{
            backgroundImage: `url(${HomeImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-slate-950/60" />
          <div className="relative z-10 px-5 sm:px-8 md:px-10 py-10 sm:py-12 md:py-16 space-y-4 sm:space-y-6">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-blue-200">IT Consulting</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight max-w-3xl">
              Advisory, architecture, and delivery guidance to keep your roadmap shipping.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-100 max-w-3xl">
              We help you align technology strategy to business outcomes, modernize platforms, and operate reliably. From
              assessments to execution support, we work as partners with your teams.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <button className="rounded-full bg-blue-600 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors">
                Talk to an advisor
              </button>
              <Link
                to="/"
                className="rounded-full border border-white/30 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Back to home
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-10 sm:mt-14 grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4 sm:space-y-5">
            <p className="text-xs sm:text-sm uppercase tracking-[0.12em] text-blue-600 font-semibold">What we deliver</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900">
              Clarity on priorities, pragmatic roadmaps, and delivery governance.
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              We start with outcomes, then design the architecture, teams, and processes to reach them. Our playbooks balance
              velocity and reliability so you can ship confidently.
            </p>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-slate-700">
              {consultingPoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-900">Engagement focus</h3>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Tailored consulting sprints or embedded leads to guide execution.
            </p>
            <div className="mt-5 grid gap-4 sm:gap-5">
              {serviceHighlights.map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-100 bg-slate-50 p-4 shadow-sm">
                  <p className="text-sm sm:text-base font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 sm:mt-14 rounded-2xl sm:rounded-3xl bg-blue-50 border border-blue-100 p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.12em] text-blue-700 font-semibold">Operating model</p>
              <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl md:text-2xl font-semibold text-slate-900">
                We embed with your teams to de-risk delivery.
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-700">
                Pods combine architecture, SRE, security, and product capability to guide and upskill your teams while delivering
                milestones.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
                <span className="rounded-full bg-white border border-blue-100 px-3 py-1.5 text-xs sm:text-sm text-blue-800">
                  Discovery & assessments
                </span>
                <span className="rounded-full bg-white border border-blue-100 px-3 py-1.5 text-xs sm:text-sm text-blue-800">
                  Architecture & roadmaps
                </span>
                <span className="rounded-full bg-white border border-blue-100 px-3 py-1.5 text-xs sm:text-sm text-blue-800">
                  Delivery & SRE coaching
                </span>
                <span className="rounded-full bg-white border border-blue-100 px-3 py-1.5 text-xs sm:text-sm text-blue-800">
                  Governance & metrics
                </span>
              </div>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-white p-5 sm:p-6 shadow-sm">
              <h4 className="text-sm sm:text-base font-semibold text-slate-900">Sample outcomes</h4>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                  <span>Roadmap with 90/180 day modernization milestones.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                  <span>Reference architectures for cloud, data, and platform services.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                  <span>Operational guardrails: SLOs/SLIs, incident playbooks, and change policies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                  <span>Team capability uplift: DevSecOps, IaC, and observability practices.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* New Section: Tech Stack & Tools */}
        <section className="mt-16 sm:mt-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Technologies we master</h2>
            <p className="mt-3 text-slate-600">
              We work with the modern cloud-native stack to build resilient, scalable platforms.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {['Cloud & Infrastructure', 'DevOps & Automation', 'Observability', 'Security'].map((category, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-900 mb-3">{category}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {idx === 0 && ['AWS', 'Azure', 'GCP', 'Terraform'].map(t => <span key={t} className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-700">{t}</span>)}
                  {idx === 1 && ['Kubernetes', 'Docker', 'Ansible', 'Jenkins'].map(t => <span key={t} className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-700">{t}</span>)}
                  {idx === 2 && ['Prometheus', 'Grafana', 'Datadog', 'ELK'].map(t => <span key={t} className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-700">{t}</span>)}
                  {idx === 3 && ['SonarQube', 'Vault', 'Snyk', 'Auth0'].map(t => <span key={t} className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-700">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* New Section: Call to Action */}
        <section className="mt-16 sm:mt-24 mb-10">
          <div className="relative rounded-3xl overflow-hidden bg-blue-600 text-white px-6 py-12 sm:px-12 sm:py-16 text-center">
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Ready to modernize your IT landscape?</h2>
              <p className="text-blue-100 text-lg">
                Let's discuss your current challenges and how we can help you achieve your business goals.
              </p>
              <div className="flex justify-center gap-4 pt-2">
                <button className="rounded-full bg-white text-blue-600 px-6 py-3 font-semibold hover:bg-blue-50 transition-colors">
                  Schedule a Consultation
                </button>
              </div>
            </div>
            {/* Decorative background circles */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full opacity-50 blur-3xl" />
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-64 h-64 bg-blue-400 rounded-full opacity-50 blur-3xl" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ItConsultingPage;

