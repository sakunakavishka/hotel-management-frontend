import Header from "./components/header/header"
import './App.css';
import HomePage from "./pages/client-page/homepage";
import AdminPage from "./pages/admin-page/admin";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import TestComponent from "./components/test/test";
import LoginPage from "./pages/login/login";
function App() {
  
  return (
    <BrowserRouter>

      <Routes path="/*">

    <Route path="/admin/*" element={<AdminPage/>} />
    <Route path ="/login" element={<LoginPage/>} />
    <Route path="/" element={<HomePage/>} />
    <Route path="/test" element={<TestComponent/>}/>

    
      </Routes>

    </BrowserRouter>
      
    
  );
}

export default App
