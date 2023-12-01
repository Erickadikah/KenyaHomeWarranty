import { Routes, Route, BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import LandingPage from './landingPage';
import ServicePage from './landingPage/servicePage';
/*import Dashboard from './dashboard';*/
import ServiceRequests from './customerUi/customerSubApps/service-requests';
import AccountSettings from './customerUi/customerSubApps/acccount-settings';
import PlansManager from './customerUi/customerSubApps/plans-manager';
import SupportPage from './customerUi/customerSubApps/support';
import SignUpForm from './authenticator/sign-Up-form';
import SignInForm from './authenticator/sign-In-form';
import AllServices from './landingPage/all-services';
import Testpaypal from './plansManager/testpaypal';
import UserDashboard from './customerUi/customer-dashboard';
import NewServiceRequestForm from './customerUi/request-form';
import Kifarubtn from './plansManager/kifaru';
import AboutUsPage from './landingPage/about-us-page';
import PlanCheckoutPage from './shared/planCheckoutPage';
import Planselector from './customerUi/plan-selector';

export default function KhwPages() {
  return (
    <BrowserRouter> {/* Wrap everything with BrowserRouter */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/services" element={<ServicePage />} />
        {/*<Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/requests" element={<ServiceRequests />} />
        <Route path="/profile/settings" element={<AccountSettings />} />
        <Route path="/plans" element={<PlansManager />} />
        <Route path="/contactsupport" element={<SupportPage />} />
        <Route path="/authuser/signup" element={<SignUpForm />} />
        <Route path="/authuser/signin" element={<SignInForm />} />
        <Route path="/choosePlan" element={<Planselector />} />
        <Route path="/allservices" element={<AllServices />} />
        <Route path="/testpaypal" element={<Testpaypal />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/paypalbtn" element={<Kifarubtn />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/requestservice" element={<NewServiceRequestForm showRequestForm={true}/>} />
        <Route path="/checkout/" element={<PlanCheckoutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
