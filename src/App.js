import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import AdminLogin from './components/admin/AdminLogin/AdminLogin';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import Landing from './pages/User/Landing/Landing';
import LoginForm from './components/User/LoginForm/LoginForm';
import SignupForm from './components/User/SignupForm/SignupForm';
import TrainerLogin from './components/Trainer/TrainerLogin/TrainerLogin';
import Users from './pages/Admin/Users/Users'
import LoginedPage from './pages/User/LoginedPage/LoginedPage';
import CategoryPage from './pages/User/Category/CategoryPage';
import PricingPlan from './components/User/Payment/Payment';
import EditUser from './components/admin/EditUser/EditUser';
import AdminUserData from './components/admin/UserData/AdminUserData';
import ViewUser from './pages/Admin/ViewUser/ViewUser';
import Trainers from './pages/Admin/Trainers/Trainers';
import AddTrainers from './components/admin/TrainerData/AddTrainers'
import EditTrainer from './components/admin/TrainerData/EditTrainer';
import AddPlan from './components/admin/PlanData/AddPlan';
import Plan from './pages/Admin/Plan/Plan'
import EditPlan from './components/admin/PlanData/EditPlan'
import TrainerDashboard from './pages/Trainer/Dashboard/TrainerDashboard'
import TrainerUsers from './pages/Trainer/Users/TrainerUsers';
import AdminNotification from './pages/Admin/Notification/AdminNotification';
import SingleTrainer from './pages/Admin/Trainers/SingleTrainer';
import ChallengeCategory from './pages/Admin/Challenges/ChallengeCategory';
import ChallengeVideo from './components/admin/Challenges/ChallengeVideo';

function App() {
  return (
    <div className="App">
      <Router>
       <Routes>

          {/* <------- Admin Routes -------> */}

         <Route path="/admin" element={<AdminLogin/>} />
         <Route path="/admin/dashboard" element={<Dashboard/>} />
         <Route path="/admin/users" element={<Users/>} />
         <Route path="/admin/users/view/:userId" element={<ViewUser/>} />
         <Route path="/admin/users/edit/:userId" element={<EditUser/>} />
         <Route path="/admin/trainers" element={<Trainers/>} />
         <Route path="/admin/trainer/:trainerId" element={<SingleTrainer/>} />
         <Route path="/admin/trainers/add" element={<AddTrainers/>} />
         <Route path="/admin/trainer/edit/:trainerId" element={<EditTrainer/>} />
         <Route path="/admin/plan" element={<Plan/>} />
         <Route path="/admin/plan/add" element={<AddPlan/>} />
         <Route path="/admin/plan/edit/:planId" element={<EditPlan/>} />
         <Route path="/admin/notification" element={<AdminNotification/>} />
         <Route path="/admin/challenges" element={<ChallengeCategory/>} />
         <Route path="/admin/challenges/:categoryId/videos" element={<ChallengeVideo/>} />



         {/* <------- User Routes -------> */}

         <Route path="/" exact element={<Landing/>} />
         <Route path="/login" element={<LoginForm/>} />
         <Route path="/logined" element={<LoginedPage/>} />
         <Route path="/category" element={<CategoryPage/>} />
         <Route path="/signup" element={<SignupForm/>} />
         <Route path="/payment" element={<PricingPlan/>} />


         {/* <------- Guide Routes -------> */}

         <Route path="/trainer/login" element={<TrainerLogin/>} />
         <Route path="/trainer/dashboard" element={<TrainerDashboard/>} />
         <Route path="/trainer/users" element={<TrainerUsers/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

