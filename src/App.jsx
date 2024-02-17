import Navbar from "./components/Navbar";
import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
import About from "./components/About";
import Login from "./components/Login";
import Signup from"./components/Signup";
import Heroslider from "./components/Heroslider";
const App = () => {
    return (
        <>
            
           
           
            <Router> 
                <Navbar/>
                <Routes>
                   
                    <Route path={"/about"} element={<About/>} />
                    <Route path={"/login"} element={<Login/>} />
                    <Route path={"/signup"} element={<Signup/>} />
                   

                </Routes>

                <Heroslider/>
                <Routes>
                     <Route path={"/heroslider"} element={<Heroslider/>} />
                </Routes>
            </Router>
            
           
                
            
        </>
    );
};

export default App;
