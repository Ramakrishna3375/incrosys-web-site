import { useNavigate } from 'react-router-dom';
import Header from '../website/Header';
import Footer from '../website/Footer';

function RecruitmentTalentAcquisitionPage() {
  const navigate = useNavigate();

  const handleApply = (roleName) => {
    navigate('/job-application', { state: { roleName } });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
        <section className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
            Recruitment & Talent Acquisition
          </p>
          <h1 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Build strong teams with structured, scalable hiring.
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl">
            We work with your HR and business leaders to design and run talent acquisition practices that consistently bring
            in the right people, faster and with a better candidate experience.
          </p>
        </section>

        <section className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-6">Open Positions</h2>
          <div className="space-y-4">
            {[
              { name: 'Associate Software Engineer', id: 'Software Engineer' },
              { name: 'NON-IT', id: 'NON-IT' },
              { name: 'Intern', id: 'Intern' },
            ].map((role) => (
              <div
                key={role.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900">{role.name}</h3>
                  <p className="text-sm sm:text-base text-slate-600 mt-1">Full-time • Remote/Hybrid</p>
                </div>
                <button
                  onClick={() => handleApply(role.name)}
                  className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base whitespace-nowrap"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 sm:mt-10 grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-slate-700">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900">Talent acquisition focus</h2>
            <ul className="space-y-2 sm:space-y-3">
              {[
                'Hiring funnels, interview stages, and scorecards for different roles.',
                'Employer branding inputs for job descriptions, careers pages, and outreach.',
                'Recruiter enablement and interviewer training for consistent evaluation.',
                'Analytics for pipeline health, time-to-hire, and quality-of-hire.',
              ].map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 shadow-sm text-sm sm:text-base text-slate-800">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900">Benefits</h3>
            <ul className="mt-3 space-y-2">
              <li>More predictable hiring timelines across teams.</li>
              <li>Better candidate experience and higher offer acceptance rates.</li>
              <li>Clear data to refine sourcing and selection decisions over time.</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default RecruitmentTalentAcquisitionPage;


