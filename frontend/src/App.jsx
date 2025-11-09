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

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="quote" element={<Quote />} />
          <Route path="tracking" element={<Tracking />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
