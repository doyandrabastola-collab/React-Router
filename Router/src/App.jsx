import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import DashboardLayout from './assets/dashboard/DashboardLayout';
import Users from './assets/dashboard/Users';
import UserDetails from './assets/dashboard/UserDetails';
import DashBoardHome from './assets/dashboard/DashBoardHome';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashBoardHome />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:userId" element={<UserDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
