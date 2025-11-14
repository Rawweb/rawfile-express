import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLayout from '@components/layout/UserLayout';
import About from '@components/pages/About';
import Home from '@components/pages/Home';
import ScrollToTop from '@components/common/ScrollToTop';
import Services from '@components/pages/Services';
import Contact from '@components/pages/Contact';
import Quote from '@components/pages/Quote';
import Blog from '@components/pages/Blog';
import Tracking from '@components/pages/Tracking';
import Team from '@components/pages/Team';
import ServiceDetails from '@components/pages/ServiceDetails';
import NotFounPage from '@components/pages/NotFounPage';
import BlogDetails from '@components/pages/BlogDetails';
import Legal from '@components/pages/Legal';
import TermsAndConditions from '@components/pages/TermsAndCondition';
import Policy from '@components/pages/Policy';


const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:serviceId" element={<ServiceDetails />} />
          <Route path="blog/" element={<Blog />} />
          <Route path="blog/:blogId" element={<BlogDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="quote" element={<Quote />} />
          <Route path="tracking" element={<Tracking />} />
          <Route path="team" element={<Team />} />
          <Route path="legal" element={<Legal />} />
          <Route path="terms" element={<TermsAndConditions />} />
          <Route path="policy" element={<Policy />} />
          {/* 404 Page */}
          <Route path="*" element={<NotFounPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
