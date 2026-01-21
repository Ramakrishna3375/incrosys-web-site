import {Route ,Routes, Navigate} from 'react-router-dom';
import IncrosysPage from './website/HomePage';
import CareersPage from './website/Careers';
import GalleryPage from './website/Gallery';
import ContactPage from './website/Contact';


function App(){
return(
    <>
      <Routes>
        <Route path="/" element={<IncrosysPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}
export default App;
