const usefulLinks = ['Home', 'Services', 'Resources', 'Contact Us', 'About Us'];

const importantLinks = [
  'IT Outsourcing',
  'IT Consulting',
  'IT Staffing',
  'IT Recruitment',
  'IT Support and Helpdesk',
  'IT Infrastructure',
  'Management',
];

const contactLocations = [
  {
    region: 'Andhra Pradesh',
    phone: '08833570008',
    address: 'D No: 6-7-7, 2nd Floor,\nRajamahendravaram, East Godavari, Andhra Pradesh,\n533101.',
  },
  {
    region: 'Telangana',
    address:
      'The Executive Center, Sattva Building, Knowledge City,\nLevel 7, Unit 3B (Octave 3 Block), Parcel - 4, Gate 2 Entrance,\nInorbit Mall Road, Raidurg Village, Hi-tech City,\nHyderabad 500081.',
  },
];

function Footer() {
  return (
    <footer className="mt-12 sm:mt-16 bg-[#041a55] text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_repeat(3,1fr)]">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="h-10 w-10 sm:h-14 sm:w-14 rounded-lg border border-white/20 bg-white/10 grid place-items-center text-base sm:text-xl font-semibold">
                I
              </div>
              <div>
                <p className="text-base sm:text-lg font-semibold">INCROSYS IT Solutions</p>
                <p className="text-[10px] sm:text-xs text-blue-100">IT & HR Services</p>
              </div>
            </div>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-blue-100">
              INCROSYS IT Solutions is a trusted provider of comprehensive IT and HR services. With 8 years of industry
              experience, we deliver tailored solutions to drive business growth and efficiency. Our expertise in IT
              outsourcing, consulting, staffing, HR consulting, and IT recruitment enables us to meet your unique needs
              and exceed your expectations.
            </p>
            <div className="mt-4 sm:mt-5 flex flex-wrap gap-2 sm:gap-3">
              {['F', 'X', 'in', 'Dr', 'WA'].map((icon) => (
                <span
                  key={icon}
                  className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border border-white/20 bg-white/10 grid place-items-center text-xs sm:text-sm font-semibold hover:bg-white/20 transition-colors cursor-pointer"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold">Useful Links</h3>
            <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-blue-100">
              {usefulLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold">Important Links</h3>
            <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-blue-100">
              {importantLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold">Contact Us</h3>
            <div className="mt-3 sm:mt-4 space-y-4 sm:space-y-6 text-xs sm:text-sm text-blue-100">
              {contactLocations.map((loc) => (
                <div key={loc.region} className="space-y-1.5 sm:space-y-2">
                  <p className="text-sm sm:text-base font-semibold text-white">{loc.region}</p>
                  {loc.phone && <p className="text-xs sm:text-sm">📞 {loc.phone}</p>}
                  <p className="whitespace-pre-line leading-relaxed text-xs sm:text-sm">{loc.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-8 sm:mt-10 text-[10px] sm:text-xs text-blue-100 text-center sm:text-left">
          © {new Date().getFullYear()} Incrosys IT Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;


