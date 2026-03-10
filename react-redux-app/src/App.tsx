import './App.css'
import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Counter from './Counter';
// import Vendor from './Vendor';
// import Users from './Users';
// import Test from './Test';
import Counter from './Counter';
const Vendor = lazy(() => import('./Vendor'));
const Users = lazy(() => import('./Users'));
const Test = lazy(() => import('./Test'));


function App() {

  return (
    <>
      <React.Suspense fallback={
        <div className=" d-flex justify-content-center align-items-center" style={{ height: '50vh'}}>
          <div className="spinner-border text-primary" role="status" style={{ width: '5rem', height:'50vh'}}>
              <span className="visually-hidden">Loading....</span>
          </div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Counter/>}></Route>
          <Route path="/users" element={<Users/>}></Route>
          <Route path="/vendors" element={<Vendor/>}></Route>
          <Route path="/test" element={<Test/>}></Route>
        </Routes>
      </React.Suspense>
    </>
  )
}

export default App
