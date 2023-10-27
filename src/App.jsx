import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './pages/homeScreen';
import SignUp from './pages/signup';
import SleepProblems from './pages/sleepProblems';
import BedTime from './pages/bedTime';
import GetUpTime from './pages/getUpTime';
import TotalSleep from './pages/totalSleep';
import SleepScore from './pages/sleepScore';
import { UsernameProvider } from './utils/usernameContext';

function App() {
  return (
    <div className="App bg-slate-900 h-screen">
      <BrowserRouter>
        <UsernameProvider>
          <Routes>
            <Route path="/" element={<SignUp />}></Route>
            <Route path="/home" element={<HomeScreen />}></Route>
            <Route path="/sleepproblem" element={<SleepProblems />}></Route>
            <Route path="/bedtime" element={<BedTime />}></Route>
            <Route path="/getuptime" element={<GetUpTime />}></Route>
            <Route path='/totalsleep' element={<TotalSleep />}></Route>
            <Route path='/sleepscore' element={<SleepScore />}></Route>
          </Routes>
        </UsernameProvider>
      </BrowserRouter>
    </div>
  );
}

export default App
