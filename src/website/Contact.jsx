import Header from './Header';
import Footer from './Footer';

function Contact() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Header />
      <main className="flex-1 mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Contact Us</h1>
        <p className="text-lg mb-6">Reach out for business or career opportunities, or with any questions. We look forward to helping you succeed!</p>
        <div className="border rounded-md py-5 px-7 mb-5 bg-white drop-shadow">
          <div>
            <strong>Email:</strong> <a href="mailto:info@incrosys.com" className="underline text-blue-700">info@incrosys.com</a><br />
            <strong>Phone:</strong> 08833570008
          </div>
          <div className="mt-6">
            <div className="mb-4">
              <span className="block font-bold text-lg text-blue-800">Andhra Pradesh</span>
              <span className="block text-pink-600 font-semibold">📞 08833570008</span>
              <span className="block text-sm leading-relaxed mt-1">D No: 6-7-7, 2nd Floor,<br />Rajamahendravaram, East Godavari, Andhra Pradesh,<br />533101.</span>
            </div>
            <div>
              <span className="block font-bold text-lg text-blue-800">Telangana</span>
              <span className="block text-sm leading-relaxed mt-1">The Executive Center, Sattva Building, Knowledge City,<br />Level 7, Unit 3B (Octave 3 Block), Parcel - 4, Gate 2 Entrance,<br />Inorbit Mall Road, Raidurg Village, Hi-tech City,<br />Hyderabad 500081.</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
