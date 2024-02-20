import Navbar from "./components/Navbar";
import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from"./pages/Signup";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Heroslider from "./components/Heroslider";
const App = () => {
    return (
        <>
            
           
           
            <Router> 
                <Navbar/>
                <Routes>
                    <Route path={"/"} element={<Home/>} />
                    <Route path={"/about"} element={<About/>} />
                    <Route path={"/login"} element={<Login/>} />
                    <Route path={"/signup"} element={<Signup/>} />
                    <Route path={"/category"} element={<Category/>} />
                   

                </Routes>
            </Router>
            
           
                
            
        </>
    );
};

export default App;
