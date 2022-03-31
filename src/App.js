import "./App.css";
import {  Route,Routes, Link } from "react-router-dom";
import Homepage from "./Homepage";
import SignUp from "./SignUp"
import SignIn from "./SignIn"

function App() {
  return (
    <>
      

      <div className="App">
        <header className="App-header">
          
            
            
            
             
             <Routes>
             <Route exact path='/' element={< Homepage />}></Route>
                 <Route exact path="/signUp" element={<SignUp/>}></Route>
                 <Route exact path="/signIn"  element={<SignIn/>}></Route>
            
            </Routes>
          
        </header>
      </div>
    </>
  );
}





export default App;
