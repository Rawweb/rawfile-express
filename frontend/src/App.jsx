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
import { Toaster } from 'sonner';

// Admin Imports
import Login from '@components/pages/Login';
import AdminDashboard from '@components/pages/admin/AdminDashboard';
import CreateShipment from '@components/pages/admin/CreateShipment';
import EditShipment from '@components/pages/admin/EditShipment';
import AllShipments from '@components/pages/admin/AllShipments';
import ProtectedRoute from '@components/common/ProtectedRoute';
import AdminLayout from '@components/pages/admin/AdminLayout';
import AllQuotes from '@components/pages/admin/AllQuotes';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Toaster
        position="top-right"
        expand
        richColors
        toastOptions={{
          style: {
            fontSize: '14px',
          },
        }}
      />
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
          <Route path="track" element={<Tracking />} />
          <Route path="team" element={<Team />} />
          <Route path="legal" element={<Legal />} />
          <Route path="terms" element={<TermsAndConditions />} />
          <Route path="policy" element={<Policy />} />{' '}
          <Route path="admin/login" element={<Login />} />
          {/* 404 Page */}
          <Route path="*" element={<NotFounPage />} />
        </Route>

        {/* Admin Route */}
        {/* protected */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="create-shipment" element={<CreateShipment />} />
          <Route path="all-shipments" element={<AllShipments />} />
          <Route path="quotes" element={<AllQuotes />} />
          <Route path="edit-shipment/:id" element={<EditShipment />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
