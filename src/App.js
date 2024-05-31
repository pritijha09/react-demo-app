import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import TestForm from './components/TestForm';
//import About from './components/About';
import News from './components/News';
import {
Route,
Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {
  const pageSize = 5;
  const apiKey = "f6ff205e360d4bac8ffe7cf7e0be1375"
  const [progress, setProgress] = useState(0)
  return (
    <>
     <Navbar title="TextUtils" aboutText="About Us"/>
     <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
<div className="container my-3">
<Routes>
        <Route exact path="/" element={<TestForm headeing="Enter the text to convert."/>}> </Route>
          <Route exact path="/general" element={<News pageSize={pageSize} setProgress={setProgress} apiKey={apiKey} key="general" country="in" category="general" />} ></Route>
          <Route exact path="/business" element={<News pageSize={pageSize} setProgress={setProgress} apiKey={apiKey} key="business" country="in" category="business"/>} ></Route>
          <Route exact path="/entertainment" element={<News pageSize={pageSize} setProgress={setProgress} apiKey={apiKey} key="entertainment" country="in" category="entertainment"/>} ></Route>
          <Route exact path="/health" element={<News pageSize={pageSize} setProgress={setProgress} apiKey={apiKey} key="health" country="in" category="health"/>} ></Route>
          <Route exact path="/science" element={<News pageSize={pageSize} setProgress={setProgress} apiKey={apiKey} key="science" country="in" category="science"/>} ></Route>
          <Route exact path="/sports" element={<News pageSize={pageSize} setProgress={setProgress} apiKey={apiKey} key="sports" country="in" category="sports"/>} ></Route>
          <Route exact path="/technology" element={<News pageSize={pageSize} setProgress={setProgress} apiKey={apiKey} key="technology" country="in" category="technology"/>} ></Route>
        
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
