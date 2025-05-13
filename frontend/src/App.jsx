import { Routes, Route } from 'react-router-dom';
import LandingPage from './portal/LandingPage';
import Login from './portal/Login';
import SignUp from './portal/SignUp';
import Dashboard from './portal/Dashboard';
import MaintenanceDashboard from './maintenance/MaintenanceDashboard';
import ResidentDashboard from './resident/ResidentDashboard';


function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/admin' element={<Dashboard />} />
      <Route path='/maintenance' element={<MaintenanceDashboard />} />
      <Route path='/resident' element={<ResidentDashboard />} />
    </Routes>
  );
};

export default App;