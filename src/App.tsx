import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastProvider } from './components/ui/Toast';
import { LoadingScreen } from './components/ui/LoadingScreen';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import NewsletterBand from './components/layout/NewsletterBand';

const Home = lazy(() => import('./pages/Home'));
const AllVehicles = lazy(() => import('./pages/AllVehicles'));
const VehicleDetailPage = lazy(() => import('./pages/VehicleDetailPage').then(m => ({ default: m.VehicleDetailPage })));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Blogs = lazy(() => import('./pages/Blogs'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage').then(m => ({ default: m.BlogPostPage })));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const Faq = lazy(() => import('./pages/Faq'));
const ServiceDetails = lazy(() => import('./pages/ServiceDetails'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

const PageLoader: React.FC = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center animate-fadeIn">
    <div className="w-10 h-10 border-2 border-accent-pink/20 border-t-accent-pink rounded-full animate-spin mb-4" />
    <span className="text-xs font-medium text-white/50 tracking-wider uppercase">Loading Page...</span>
  </div>
);

const LoadingDemoPage: React.FC = () => {
  const [show, setShow] = useState(true);
  return show ? (
    <LoadingScreen minDuration={2500} onFinish={() => setShow(false)} />
  ) : (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center space-y-4">
      <h2 className="text-2xl font-bold text-white">Loading Screen Demo Finished</h2>
      <button
        onClick={() => setShow(true)}
        className="px-6 py-2.5 rounded-full bg-gradient-to-r from-accent-pink to-accent-purple text-white text-xs font-bold uppercase tracking-wider shadow-brand-glow hover:opacity-90 transition-opacity"
      >
        Replay Loading Screen
      </button>
    </div>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const authRoutes = ['/login', '/register', '/reset-password', '/forgot-password', '/loading'];
  const isAuthPage = authRoutes.includes(location.pathname);

  if (isAuthPage) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] text-white font-sans antialiased selection:bg-accent-pink/30 selection:text-white">
        <ScrollToTop />
        <main>{children}</main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0D0D0D] text-white font-sans antialiased selection:bg-accent-pink/30 selection:text-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <NewsletterBand />
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <ToastProvider>
        {isLoading && (
          <LoadingScreen minDuration={1000} onFinish={() => setIsLoading(false)} />
        )}
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/vehicles" element={<AllVehicles />} />
              <Route path="/vehicles/:id" element={<VehicleDetailPage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:id" element={<BlogPostPage />} />
              <Route path="/plan" element={<PricingPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/service-details" element={<ServiceDetails />} />
              <Route path="/services" element={<ServiceDetails />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/forgot-password" element={<ResetPassword />} />
              <Route path="/loading" element={<LoadingDemoPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </ToastProvider>
    </Router>
  );
};

export default App;