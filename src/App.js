import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './component/Home/Home/Home';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import Navigation from './component/Navigation/Navigation';
import AdminSidebar from './component/Dashboard/Sidebar/AdminSidebar';
import Appointments from './component/Dashboard/Appointments/Appointments';
import Patients from './component/Dashboard/Patients/Patients';
import Prescriptions from './component/Dashboard/Prescriptions/Prescriptions';
import Dashboard from './component/Dashboard/Dashboard/Dashboard';
import Appointment from './component/Appointment/Appointment';
import Login from './component/Login/Login';
function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/appointment">
            <Appointment />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/appointments">
            <Appointments />
          </Route>
          <Route exact path="/patients">
            <Patients />
          </Route>
          <Route exact path="/prescriptions">
            <Prescriptions />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
