import {Route ,Routes, Navigate} from 'react-router-dom';
import IncrosysPage from './website/HomePage';
import CareersPage from './website/Careers';

import GalleryPage from './website/Gallery';
import ContactPage from './website/Contact';
import ItConsultingPage from './ItServicesOptions/ItConsulting';
import ItRecruitmentPage from './ItServicesOptions/ItRecruitment';
import ItProjectStaffingPage from './ItServicesOptions/ItProjectStaffing';
import ItAssessmentServicesPage from './ItServicesOptions/ItAssessmentServices';


function App(){
return(
    <>
      <Routes>
        <Route path="/" element={<IncrosysPage />} />
        <Route path="/careers" element={<CareersPage />} />
        
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/It-consulting" element={<ItConsultingPage />} />
        <Route path="/It-recruitment" element={<ItRecruitmentPage />} />
        <Route path="/It-project-staffing" element={<ItProjectStaffingPage />} />
        <Route path="/It-assessment-services" element={<ItAssessmentServicesPage />} />
      
        
      </Routes>
    </>
  );
}
export default App;
