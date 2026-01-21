import Header from './Header';
import Footer from './Footer';

function Careers() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Header />
      <main className="flex-1 mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Careers at Incrosys</h1>
        <p className="text-lg mb-6">Discover the latest job openings and growth opportunities at Incrosys. Join our mission-driven, collaborative team and build a rewarding career!</p>
        <ul className="list-disc list-inside text-base space-y-2">
          <li>Competitive salary & growth environment</li>
          <li>Opportunities for upskilling and leadership roles</li>
          <li>Supportive, diverse workplace culture</li>
          <li>Flexible and hybrid work options</li>
        </ul>
        <div className="mt-8 text-blue-600">
          <strong>To apply, send your resume to:</strong> careers@incrosys.com
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Careers;

