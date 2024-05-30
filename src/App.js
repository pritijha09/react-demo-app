import './App.css';
import Navbar from './components/Navbar';
import TestForm from './components/TestForm';
import About from './components/About';
import {
BrowserRouter as Router,
Switch,
Route,
Link,
Routes
} from "react-router-dom"

function App() {
  return (
    <>
     <Navbar title="TextUtils" aboutText="About Us"/>

<div className="container my-3">
<Routes>
        <Route path="/" element={<TestForm headeing="Enter the text to convert."/>}> </Route>
          <Route path="/about" element={<About />} >
        </Route>
      </Routes>
{/* <Routes>
    <Route path="/about">
    <About/>
    </Route>
    <Route path="/text-conversion">
    <TestForm headeing="Enter the text to convert."/>
    </Route>
    <Route path='/'>
    <TestForm headeing="Enter the text to convert."/>
    </Route>
    </Routes> */}
</div>
   


    </>
 
  );
}

export default App;
