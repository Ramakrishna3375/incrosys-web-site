import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const navLinks = ['Home', 'IT Services', 'HR Services', 'Careers', 'Clients','Gallery', 'Contact'];

const itServiceOptions = [
  'IT Consulting',
  'IT Recruitment',
  'IT Project Staffing',
  'IT Assessment Services',
  'Cloud Computing Services',
  'IT Strategy and Planning',
];

const hrServiceOptions = [
  'HR Consulting',
  'Employee Training & Development',
  'Recruitment & Talent Acquisition',
];

function Header() {
  const navigate = useNavigate();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [hrOpen, setHrOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const servicesRef = useRef(null);
  const hrRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const outsideIt = servicesRef.current && !servicesRef.current.contains(event.target);
      const outsideHr = hrRef.current && !hrRef.current.contains(event.target);
      if (outsideIt) setServicesOpen(false);
      if (outsideHr) setHrOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-blue-500 shadow-sm sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-blue-600 text-white grid place-items-center font-semibold text-sm sm:text-base">
            I
          </div>
          <div>
            <p className="text-base sm:text-lg font-semibold text-white">Incrosys</p>
            <p className="text-[10px] sm:text-xs text-white hidden sm:block">Technology that ships</p>
          </div>
        </div>
        <nav className="relative hidden items-center gap-4 lg:gap-6 text-sm font-medium text-white lg:flex">
          {navLinks.map((link) => {
            if (link === 'IT Services') {
              return (
                <div key={link} ref={servicesRef} className="relative">
                  <button
                    type="button"
                    onClick={() => {
                      setServicesOpen((prev) => !prev);
                      setHrOpen(false);
                    }}
                    className="flex items-center gap-1 hover:text-blue-200 transition-colors"
                  >
                    {link}
                    <span className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}>▾</span>
                  </button>
                  {servicesOpen && (
                    <div className="absolute left-0 mt-3 w-64 rounded-xl border border-slate-200 bg-white p-3 text-slate-800 shadow-lg z-50">
                      <ul className="space-y-2">
                        {itServiceOptions.map((item) => {
                          let path = '';
                          if (item === 'IT Consulting') path = '/it-consulting';
                          else if (item === 'IT Recruitment') path = '/it-recruitment';
                          else if (item === 'IT Project Staffing') path = '/it-project-staffing';
                          else if (item === 'IT Assessment Services') path = '/it-assessment-services';
                          else if (item === 'Cloud Computing Services') path = '/cloud-computing-services';
                          else if (item === 'IT Strategy and Planning') path = '/it-strategy-planning';

                          return (
                            <li key={item}>
                              {path ? (
                                <Link
                                  to={path}
                                  className="block rounded-lg px-3 py-2 text-sm font-semibold hover:bg-slate-50"
                                  onClick={() => setServicesOpen(false)}
                                >
                                  {item}
                                </Link>
                              ) : (
                                <span className="block rounded-lg px-3 py-2 text-sm font-semibold">{item}</span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              );
            }

            if (link === 'HR Services') {
              return (
                <div key={link} ref={hrRef} className="relative">
                  <button
                    type="button"
                    onClick={() => {
                      setHrOpen((prev) => !prev);
                      setServicesOpen(false);
                    }}
                    className="flex items-center gap-1 hover:text-blue-200 transition-colors"
                  >
                    {link}
                    <span className={`transition-transform ${hrOpen ? 'rotate-180' : ''}`}>▾</span>
                  </button>
                  {hrOpen && (
                    <div className="absolute left-0 mt-3 w-64 rounded-xl border border-slate-200 bg-white p-3 text-slate-800 shadow-lg z-50">
                      <ul className="space-y-2">
                        {hrServiceOptions.map((item) => {
                          let path = '';
                          if (item === 'HR Consulting') path = '/hr-consulting';
                          else if (item === 'Employee Training & Development') path = '/employee-training-development';
                          else if (item === 'Recruitment & Talent Acquisition') path = '/recruitment-talent-acquisition';

                          return (
                            <li key={item}>
                              {path ? (
                                <Link
                                  to={path}
                                  className="block rounded-lg px-3 py-2 text-sm font-semibold hover:bg-slate-50"
                                  onClick={() => setHrOpen(false)}
                                >
                                  {item}
                                </Link>
                              ) : (
                                <span className="block rounded-lg px-3 py-2 text-sm font-semibold">{item}</span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              );
            }

            if (link === 'Home') {
              return (
                <Link key={link} to="/" className="hover:text-blue-200 transition-colors">
                  {link}
                </Link>
              );
            }

            // Define likely routes for the remaining nav items
            let path = '/';
            if (link === 'Careers') path = '/careers';
            else if (link === 'Clients') path = '/clients';
            else if (link === 'Gallery') path = '/gallery';
            else if (link === 'Contact') path = '/contact';
            return (
              <Link key={link} to={path} className="hover:text-blue-200 transition-colors">
                {link}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden rounded-full bg-blue-600 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-blue-700 lg:block">
            Get in touch
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-blue-600 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-blue-400/30 bg-blue-600">
          <nav className="mx-auto max-w-6xl px-4 py-4 space-y-3">
            {navLinks.map((link) => {
              if (link === 'IT Services') {
                return (
                  <div key={link} className="space-y-2">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex w-full items-center justify-between text-sm font-medium text-white hover:text-blue-200"
                    >
                      {link}
                      <span className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}>▾</span>
                    </button>
                    {servicesOpen && (
                      <div className="pl-4 space-y-2">
                        {itServiceOptions.map((item) => {
                          let path = '';
                          if (item === 'IT Consulting') path = '/it-consulting';
                          else if (item === 'IT Recruitment') path = '/it-recruitment';
                          else if (item === 'IT Project Staffing') path = '/it-project-staffing';
                          else if (item === 'IT Assessment Services') path = '/it-assessment-services';
                          else if (item === 'Cloud Computing Services') path = '/cloud-computing-services';
                          else if (item === 'IT Strategy and Planning') path = '/it-strategy-planning';

                          return (
<button
  key={item}
  className="block text-left w-full text-sm text-blue-100 hover:text-white bg-transparent border-none px-0 py-0"
  style={{ background: 'none' }}
  onMouseDown={(e) => {
    e.preventDefault();
    if (path) {
      navigate(path);
      setServicesOpen(false);
      setMobileMenuOpen(false);
    }
  }}
  onTouchStart={(e) => {
    e.preventDefault();
    if (path) {
      navigate(path);
      setServicesOpen(false);
      setMobileMenuOpen(false);
    }
  }}
>
  {item}
</button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }
              if (link === 'HR Services') {
                return (
                  <div key={link} className="space-y-2">
                    <button
                      onClick={() => setHrOpen(!hrOpen)}
                      className="flex w-full items-center justify-between text-sm font-medium text-white hover:text-blue-200"
                    >
                      {link}
                      <span className={`transition-transform ${hrOpen ? 'rotate-180' : ''}`}>▾</span>
                    </button>
                    {hrOpen && (
                      <div className="pl-4 space-y-2">
                        {hrServiceOptions.map((item) => {
                          let path = '';
                          if (item === 'HR Consulting') path = '/hr-consulting';
                          else if (item === 'Employee Training & Development') path = '/employee-training-development';
                          else if (item === 'Recruitment & Talent Acquisition') path = '/recruitment-talent-acquisition';

                          return (
<button
  key={item}
  className="block text-left w-full text-sm text-blue-100 hover:text-white bg-transparent border-none px-0 py-0"
  style={{ background: 'none' }}
  onMouseDown={(e) => {
    e.preventDefault();
    if (path) {
      navigate(path);
      setHrOpen(false);
      setMobileMenuOpen(false);
    }
  }}
  onTouchStart={(e) => {
    e.preventDefault();
    if (path) {
      navigate(path);
      setHrOpen(false);
      setMobileMenuOpen(false);
    }
  }}
>
  {item}
</button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }
              if (link === 'Home') {
                return (
                  <Link
                    key={link}
                    to="/"
                    className="block text-sm font-medium text-white hover:text-blue-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link}
                  </Link>
                );
              }
              // Define likely routes for the remaining nav items
              let path = '/';
              if (link === 'Careers') path = '/careers';
              else if (link === 'Clients') path = '/clients';
              else if (link === 'Gallery') path = '/gallery';
              else if (link === 'Contact') path = '/contact';
              return (
                <Link
                  key={link}
                  to={path}
                  className="block text-sm font-medium text-white hover:text-blue-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </Link>
              );
            })}
            <button className="w-full mt-4 rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800">
              Get in touch
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;


