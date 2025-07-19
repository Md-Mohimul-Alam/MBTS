import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import Unauthorized from '../pages/Unauthorized';
import NotFound from '../pages/NotFound';


import AdminDashboard from '../pages/dashboards/AdminDashboard';
import ManagerDashboard from '../pages/dashboards/ManagerDashboard';
import EmployeeDashboard from '../pages/dashboards/EmployeesDashboard';

import BranchList from '../components/branches/BranchList';
import BranchForm from '../components/branches/BranchForm';
import EmployeeForm from '../components/employees/EmployeeForm';
import EmployeeList from '../components/employees/EmployeeList';
import ClientForm from '../components/clients/ClientForm';
import ClientList from '../components/clients/ClientList';
import CalculatorPage from '../components/Calculator/CalculatorPage'; // Assuming this is the correct path for the calculator page

import BankForm from '../components/banks/BankForm';
import Statements from '../components/banks/statements';
import BankTransactionForm from '../components/banks/BankTransactionForm';
import BankTransactionView from '../components/banks/BankTransectionList';

import Vehicles from '../pages/Vehicles';
import Orders from '../pages/Orders';
import Transactions from '../pages/Transactions';
import BankStatements from '../pages/BankStatements';
import Dues from '../pages/Dues';
import Notifications from '../pages/Notifications';
import Reports from '../pages/Reports';
import Trips from '../pages/Trips';
import Maintenance from '../pages/Maintenance';
import Settings from '../pages/Settings';
import Roles from '../pages/Roles';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* Role-based Dashboard to default page */}
      <Route path="/app/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/app/manager-dashboard" element={<ManagerDashboard />} />
      <Route path="/app/employee-dashboard" element={<EmployeeDashboard />} />

      {/* Private Routes */}
      <Route path="/app/branches" element={<BranchList />}/>
      <Route path="/app/branches/add" element={<BranchForm  />} />

      <Route path="/app/clients/add" element={<ClientForm />} />
      <Route path="/app/clients" element={<ClientList />} />
      <Route path="/app/employees/add" element={<EmployeeForm />} />
      <Route path="/app/employees" element={<EmployeeList />} />
      
      <Route path="/app/banks/add" element={<BankForm />} />
      <Route path="/app/banks/statements" element={<Statements />} />
      <Route path="/app/banks/transactions/add" element={<BankTransactionForm />} />
      <Route path='/app/banks/transactions/list' element={<BankTransactionView />} />


      <Route path="/app/calculator/CalculatorPage" element={<CalculatorPage />} />
      
      <Route
        path="/app/vehicles"
        element={
          <PrivateRoute rolesAllowed={['Admin', 'Branch Manager']}>
            <Vehicles />
          </PrivateRoute>
        }
      />
      <Route
        path="/app/orders"
        element={
          <PrivateRoute rolesAllowed={['Branch Manager', 'Logistics Staff']}>
            <Orders />
          </PrivateRoute>
        }
      />
      <Route
        path="/app/transactions"
        element={
          <PrivateRoute rolesAllowed={['Admin', 'Accountant']}>
            <Transactions />
          </PrivateRoute>
        }
      />
      <Route
        path="/app/bank-statements"
        element={
          <PrivateRoute rolesAllowed={['Admin', 'Accountant']}>
            <BankStatements />
          </PrivateRoute>
        }
      />
      <Route
        path="/app/dues"
        element={
          <PrivateRoute rolesAllowed={['Admin', 'Accountant']}>
            <Dues />
          </PrivateRoute>
        }
      />
      <Route
        path="/app/notifications"
        element={
          <PrivateRoute rolesAllowed={['Admin', 'Branch Manager']}>
            <Notifications />
          </PrivateRoute>
        }
      />
      <Route
        path="/app/reports"
        element={
          <PrivateRoute rolesAllowed={['Admin', 'Analyst']}>
            <Reports />
          </PrivateRoute>
        }
      />
      <Route
        path="/app/trips"
        element={
          <PrivateRoute rolesAllowed={['Branch Manager', 'Logistics Staff']}>
            <Trips />
          </PrivateRoute>
        }
      />
      <Route
        path="/app/maintenance"
        element={
          <PrivateRoute rolesAllowed={['Admin', 'Branch Manager']}>
            <Maintenance />
          </PrivateRoute>
        }
      />
      <Route
        path="/app/settings"
        element={
          <PrivateRoute rolesAllowed={['Admin']}>
            <Settings />
          </PrivateRoute>
        }
      />
      <Route
        path="/app/roles"
        element={
          <PrivateRoute rolesAllowed={['Admin']}>
            <Roles />
          </PrivateRoute>
        }
      />

      {/* Catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
