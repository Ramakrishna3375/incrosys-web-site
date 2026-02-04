import Header from '../website/Header';
import Footer from '../website/Footer';

function ItAssessmentServices() {
  const assessments = [
    {
      title: 'Infrastructure Assessment',
      desc: 'Evaluate your current server, storage, and network infrastructure to identify bottlenecks and optimization opportunities.',
    },
    {
      title: 'Security Audit',
      desc: 'Comprehensive vulnerability assessment and penetration testing to secure your digital assets against threats.',
    },
    {
      title: 'Cloud Readiness',
      desc: 'Analyze your applications and data to determine the best strategy for migration to the cloud (AWS, Azure, GCP).',
    },
    {
      title: 'Code Quality Review',
      desc: 'Deep dive into your codebase to improve maintainability, performance, and adherence to best practices.',
    },
    {
      title: 'Compliance Check',
      desc: 'Ensure your IT systems meet industry regulations and standards (GDPR, HIPAA, ISO 27001, etc.).',
    },
    {
      title: 'Performance Tuning',
      desc: 'Identify performance issues in your applications and databases to enhance user experience and speed.',
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16 sm:py-24 px-4">
          <div className="max-w-6xl mx-auto text-center space-y-6">
            <h1 className="text-3xl sm:text-5xl font-bold">IT Assessment Services</h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              Gain deep visibility into your IT landscape. We identify risks, optimize performance, and pave the way for innovation.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 sm:py-16 px-4 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Why Assess Your IT?</h2>
          <p className="text-slate-600 text-lg">
            Technology evolves rapidly. Regular assessments ensure your systems are secure, efficient, and aligned with your business goals. 
            Our expert team provides actionable insights to drive your digital transformation.
          </p>
        </section>

        {/* Assessment Types Grid */}
        <section className="bg-white py-12 sm:py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-12">Our Assessment Capabilities</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {assessments.map((item, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Start Your Assessment Today</h2>
            <p className="text-slate-600 mb-8">
              Don't guess—know. Contact us for a comprehensive evaluation of your IT environment.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
            >
              Request an Assessment
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ItAssessmentServices;
