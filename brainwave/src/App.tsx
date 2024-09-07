import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import NewAccount from "./pages/NewAccount";
import SiteIntroduction from "./components/SiteIntroduction";
import RobotIntro from "./components/RobotIntro";

function App() {
  return (
    <Router>
      <Header />
      <SiteIntroduction />
       <RobotIntro />
      <Routes>
        <Route path="/signin" element={<NewAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
