import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function FadeInSection({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const benefits = [
  {
    title: 'Competitive Compensation',
    description: 'Attractive salary packages with performance-based bonuses',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Career Growth',
    description: 'Clear pathways for advancement and leadership opportunities',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Learning & Development',
    description: 'Regular training, certifications, and skill enhancement programs',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Work-Life Balance',
    description: 'Flexible hours and hybrid work options for better productivity',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Inclusive Culture',
    description: 'Diverse, supportive workplace where everyone can thrive',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance and wellness programs',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

function Careers() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Header />
      <main className="flex-1 mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
        <FadeInSection>
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-blue-600 mb-2">
              Join Our Team
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Careers at Incrosys
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Discover the latest job openings and growth opportunities at Incrosys. Join our mission-driven, collaborative team and build a rewarding career!
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-14">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection delay={200}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-14">
            <div className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Why Choose Incrosys?</h2>
              <ul className="space-y-4">
                {[
                  'Innovative projects with cutting-edge technology',
                  'Mentorship from industry experts',
                  'Collaborative and inclusive work environment',
                  'Recognition and rewards for outstanding performance',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                    <span className="text-sm sm:text-base text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl sm:rounded-3xl bg-blue-600 to-blue-700 p-6 sm:p-8 text-white shadow-xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Apply?</h2>
              <p className="text-blue-100 mb-6 text-base sm:text-lg">
                Send us your resume and cover letter. We're always looking for talented individuals to join our team.
              </p>
              <div className="space-y-4">
                <a
                  //href="mailto:careers@incrosys.com"
                  onClick={() => navigate('/job-application')}
                  className="block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-center cursor-pointer"
                >
                  Email Your Resume
                </a>
                <button
                  onClick={() => navigate('/recruitment-talent-acquisition')}
                  className="w-full px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                >
                  View Open Positions
                </button>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={300}>
          <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">Stay Connected</h3>
              <p className="text-slate-600 mb-6 text-sm sm:text-base">
                Follow us for the latest job openings and company updates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:careers@incrosys.com"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  careers@incrosys.com
                </a>
              </div>
            </div>
          </div>
        </FadeInSection>
      </main>
      <Footer />
    </div>
  );
}

export default Careers;

