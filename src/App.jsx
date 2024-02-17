import Navbar from "./components/Navbar";
import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
import About from "./components/About";
import Login from "./components/Login";
const App = () => {
    return (
        <>
            
           
           
            <Router> 
                <Navbar/>
                <Routes>
                   
                    <Route path={"/about"} element={<About/>} />
                    <Route path={"/login"} element={<Login/>} />
                    

                </Routes>
            </Router>

                
            
        </>
    );
};

export default App;
