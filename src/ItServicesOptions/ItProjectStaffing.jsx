import Header from '../website/Header';
import Footer from '../website/Footer';

function ItProjectStaffing() {
  const staffingBenefits = [
    {
      title: 'Rapid Scalability',
      desc: 'Quickly ramp up your team with skilled professionals to meet project deadlines.',
    },
    {
      title: 'Niche Expertise',
      desc: 'Access specialized skills in AI, Cloud, Cybersecurity, and more without long-term hiring commitments.',
    },
    {
      title: 'Cost Efficiency',
      desc: 'Reduce overhead costs associated with permanent hiring while maintaining high-quality output.',
    },
    {
      title: 'Flexible Models',
      desc: 'Choose from staff augmentation, dedicated teams, or project-based staffing solutions.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16 sm:py-24 px-4">
          <div className="max-w-6xl mx-auto text-center space-y-6">
            <h1 className="text-3xl sm:text-5xl font-bold">IT Project Staffing</h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              Empower your projects with top-tier technical talent. We provide the right experts at the right time to ensure your success.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Why Choose Our Staffing Services?</h2>
            <p className="mt-4 text-slate-600">We bridge the gap between your project needs and world-class talent.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {staffingBenefits.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Roles We Staff Section */}
        <section className="bg-white py-12 sm:py-16 px-4">
          <div className="max-w-6xl mx-auto">
             <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-10">Roles We Fill</h2>
             <div className="flex flex-wrap justify-center gap-3">
               {[
                 'Full Stack Developers', 'DevOps Engineers', 'Data Scientists', 
                 'UI/UX Designers', 'Project Managers', 'QA Engineers', 
                 'Cloud Architects', 'Cybersecurity Analysts'
               ].map((role) => (
                 <span key={role} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200">
                   {role}
                 </span>
               ))}
             </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 max-w-4xl mx-auto text-center">
          <div className="bg-blue-50 rounded-3xl p-8 sm:p-12 border border-blue-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Need Talent for Your Next Project?</h2>
            <p className="text-slate-600 mb-8">
              Let's discuss your requirements and build a team that delivers results.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
            >
              Get Staffing Solutions
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ItProjectStaffing;
