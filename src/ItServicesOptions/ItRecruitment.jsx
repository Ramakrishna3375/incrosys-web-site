import Header from '../website/Header';
import Footer from '../website/Footer';

function ItRecruitmentPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
        <section className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">IT Recruitment</p>
          <h1 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Talent-first IT recruitment for growing engineering and operations teams.
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl">
            Incrosys IT Recruitment connects you with engineers, DevOps, SRE, support, and leadership talent that match both
            your stack and your culture. We focus on long-term retention, not just placements.
          </p>
        </section>

        <section className="mt-8 sm:mt-10 grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-slate-700">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900">How we help</h2>
            <ul className="space-y-2 sm:space-y-3">
              {[
                'Role definition support: skills, levels, and interview rubric for each position.',
                'Curated pipeline of pre-screened candidates across development, QA, DevOps, SRE, and support.',
                'Structured interview process and scheduling support to keep hiring velocity high.',
                'Offer negotiation guidance and onboarding support to reduce early attrition.',
              ].map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 sm:p-6 shadow-sm text-sm sm:text-base text-slate-800">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900">Typical profiles</h3>
            <ul className="mt-3 space-y-2">
              <li>Full-stack and backend engineers (.NET, Java, Node, React, etc.).</li>
              <li>Cloud / DevOps / SRE engineers for AWS, Azure, and Kubernetes.</li>
              <li>IT support, helpdesk, and infrastructure operations teams.</li>
              <li>Engineering managers, project managers, and technical leads.</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ItRecruitmentPage;


