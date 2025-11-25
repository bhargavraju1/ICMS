// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./auth/Signin";
import DirectorDashboard from "./pages/DirectorDashboard";
import PMDashboard from "./pages/pm/Dashboard";
import HrDashboard from "./pages/hr/HrDashboard";
import EMDashboard from "./pages/employee/Dashboard";
import PrivateRoute from "./utils/PrivateRoute";
import Layout from "./components/Layout"; 
import EmployeeAdd from "./pages/director/EmployeeADD";
import AddEmployeeCredentials from "./pages/hr/AddEmployeeCredentials";
import Credentials from "./pages/hr/credentials";
import HrCredentialsAdd from "./pages/director/HrCredentialsAdd";
import AssignCredentials from "./pages/director/AssignCredentials";
import EmployeeDetails from "./pages/hr/employeeDetails";
import PmDetails from "./pages/hr/pmDetails";
import MyTeam from "./pages/pm/MyTeam";
import Profile from "./pages/employee/Profile";
import TasksAssigned from "./pages/employee/TaskAssigned";
import Home from "./home/Home";
import AboutUs from "./home/AboutUs";
import Careers from "./home/Careers";
import Industries from "./home/Industries";
import Solutions from "./home/Solutions";
import Navbar from "./components/Navbar";
import ViewTechnologies from "./home/ViewTechnologies";
import ExploreOurVision from "./home/ExploreOurVision";
import LearnAboutSustainability from "./home/LearnAboutSustainability";
import AdvancedManufacturing from "./home/AdvancedManufacturing";
import SmartMobility from "./home/SmartMobility";
import SustainableEngineering from "./home/SustainbilityEngineering";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <>
              <Home />
                {/* 👈 Footer shown only on Home page */}
            </>
          }
        />

        <Route path="/signin" element={<Signin />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/technology" element={<ViewTechnologies />} />
        <Route path="/about" element={<ExploreOurVision />} />
        <Route path="/sustainability" element={<LearnAboutSustainability />} />
        <Route path="/technology/manufacturing" element={<AdvancedManufacturing/>} />
        <Route path="/technology/mobility" element={<SmartMobility/>} />
         <Route path="/technology/sustainability" element={<SustainableEngineering/>} />


        {/* Director Routes */}
        <Route
          path="/director"
          element={
            <PrivateRoute role="director">
              <Layout>
                <DirectorDashboard />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/director/create-employee"
          element={
            <PrivateRoute role="director">
              <Layout>
                <EmployeeAdd />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/director/HrCredentials"
          element={
            <PrivateRoute role="director">
              <Layout>
                <HrCredentialsAdd />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/director/assign-credentials/:employeeId"
          element={
            <PrivateRoute role="director">
              <Layout>
                <AssignCredentials />
              </Layout>
            </PrivateRoute>
          }
        />

        {/* Project Manager */}
        <Route
          path="/projectmanager"
          element={
            <PrivateRoute role="project managers">
              <Layout>
                <PMDashboard />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/pm/my-team"
          element={
            <PrivateRoute role="project managers">
              <Layout>
                <MyTeam />
              </Layout>
            </PrivateRoute>
          }
        />

        {/* HR Routes */}
        <Route
          path="/hr"
          element={
            <PrivateRoute role="hr">
              <Layout>
                <HrDashboard />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/hr/add-credentials"
          element={
            <PrivateRoute role="hr">
              <Layout>
                <AddEmployeeCredentials />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/hr/employee-records"
          element={
            <PrivateRoute role="hr">
              <Layout>
                <EmployeeDetails />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/hr/pm-records"
          element={
            <PrivateRoute role="hr">
              <Layout>
                <PmDetails />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/hr/credentials"
          element={
            <PrivateRoute role="hr">
              <Layout>
                <Credentials />
              </Layout>
            </PrivateRoute>
          }
        />

        {/* Employee Routes */}
        <Route
          path="/employee"
          element={
            <PrivateRoute role="employee">
              <Layout>
                <EMDashboard />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/employee/my-profile"
          element={
            <PrivateRoute role="employee">
              <Layout>
                <Profile />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/employee/my-tasks"
          element={
            <PrivateRoute role="employee">
              <Layout>
                <TasksAssigned />
              </Layout>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
