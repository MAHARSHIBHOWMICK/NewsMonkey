import './App.css';
import News from './components/News';
import Navbar from './components/Navbar';
import LoadingBar from "react-top-loading-bar";
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default function App(){
  const pageSize=6
  const apikey="6168ed63f5bc44b4ba9bc4cef9d4a00b"
  // apikey=process.env.REACT_APP_NEWS_API;
  const[progress,setProgress]=useState(0);



    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color="#f11946"
        progress={progress}
      />
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} apikey={apikey} key={"home"} pageSize={pageSize} country="us" catagory="general"/>} />
          <Route exact path='/business' element={<News setProgress={setProgress} apikey={apikey} key={"business"} pageSize={pageSize} country="us" catagory="business"/>} />
          <Route exact path='/entertainment' element={<News setProgress={setProgress} apikey={apikey} key={"entertainment"} pageSize={pageSize} country="us" catagory="entertainment"/>} />
          <Route exact path='/health' element={<News setProgress={setProgress} apikey={apikey} key={"health"} pageSize={pageSize} country="us" catagory="health"/>} />
          <Route exact path='/science' element={<News setProgress={setProgress} apikey={apikey} key={"science"} pageSize={pageSize} country="us" catagory="science"/>} />
          <Route exact path='/sports' element={<News setProgress={setProgress} apikey={apikey} key={"sports"} pageSize={pageSize} country="us" catagory="sports"/>} />
          <Route exact path='/technology' element={<News setProgress={setProgress} apikey={apikey} key={"technology"} pageSize={pageSize} country="us" catagory="technology"/>} />

        </Routes>
        </Router>
      </div>
    )
  
}



