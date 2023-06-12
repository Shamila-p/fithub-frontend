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
import UserProfile from './pages/User/UserProfile/UserProfile';
import PrivateRouteAdmin from './Utils/PrivateRouteAdmin'
import PrivateRouteUser from './Utils/PrivateRouteUser';
import PrivateRouteTrainer from './Utils/PrivateRouteTrainer';
import WorkoutVideos from './pages/User/WorkoutVideos/WorkoutVideos';
import AssignedUsers from './components/admin/TrainerData/AssignedUsers'
import AssignedUserPage from './pages/Admin/Trainers/AssignedUserPage';
import Chat from './pages/Trainer/Chat/Chat';
// import AdminPrivateRoute from './Utils/AdminPrivateRoute'

function App() {
  return (
    <div className="App">
      <Router>
       <Routes>

          {/* <------- Admin Routes -------> */}

         <Route path="/admin" element={<AdminLogin/>} />
         <Route element={<PrivateRouteAdmin/>}>
            <Route path="/admin/dashboard" element={<Dashboard/>} />
            <Route path="/admin/users" element={<Users/>} />
            <Route path="/admin/users/view/:userId" element={<ViewUser/>} />
            <Route path="/admin/users/edit/:userId" element={<EditUser/>} />
            <Route path="/admin/trainers" element={<Trainers/>} />
            <Route path="/admin/trainers/assigned-users/:trainerId" element={<AssignedUserPage/>} />
            <Route path="/admin/trainer/:trainerId" element={<SingleTrainer/>} />
            <Route path="/admin/trainers/add" element={<AddTrainers/>} />
            <Route path="/admin/trainer/edit/:trainerId" element={<EditTrainer/>} />
            <Route path="/admin/plan" element={<Plan/>} />
            <Route path="/admin/plan/add" element={<AddPlan/>} />
            <Route path="/admin/plan/edit/:planId" element={<EditPlan/>} />
            <Route path="/admin/notification" element={<AdminNotification/>} />
            <Route path="/admin/challenges/" element={<ChallengeCategory/>} />
            <Route path="/admin/challenges/:categoryId/videos" element={<ChallengeVideo/>} />
        </Route>


         {/* <------- User Routes -------> */}

         <Route path="/" exact element={<Landing/>} />
         <Route path="/login" element={<LoginForm/>} />
         <Route path="/signup" element={<SignupForm/>} />
          <Route element={<PrivateRouteUser/>}>
            <Route path="/logined" element={<LoginedPage/>} />
            <Route path="/category" element={<CategoryPage/>} />
            <Route path="/payment" element={<PricingPlan/>} />
            <Route path="/user/profile" element={<UserProfile/>} />
            <Route path="/workout-videos" element={<WorkoutVideos/>} />
            <Route path="/chat" element={<Chat/>} />
         </Route>


         {/* <------- Guide Routes -------> */}

         <Route path="/trainer/login" element={<TrainerLogin/>} />
         <Route element={<PrivateRouteTrainer/>}>
            <Route path="/trainer/dashboard" element={<TrainerDashboard/>} />
            <Route path="/trainer/users" element={<TrainerUsers/>} />
            <Route path="/trainer/chat" element={<Chat/>} />

         </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

