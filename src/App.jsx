
import React, { useState } from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";

import Header from './component/header/Header'
import DataProvider from './context/DataProvider';
/*
import Login from './component/account/Login';
import Home from './component/home/Home'
import CreatePost from './component/create/Createpost'
import DetailsView from './component/details/DetailsView'
import Updatepost from './component/create/Updatepost'
*/

/*Rating task component 
import RatingComponent from './RatingComponent';
*/

/* Toolkit component*/
import ToolkitHome from './ReduxToolkit/Pages/ToolkitHome'
import ToolkitCart from './ReduxToolkit/Pages/ToolkitCart'
import ToolkitNavbar from './ReduxToolkit/Components/ToolkitNavbar';

function PrivateRoute({ isAuth }) {
    return isAuth ?
        <>
            <Header />
            <Outlet />
        </> :
        < Navigate replace to="/login" />

}


function App() {
    const [isAuth, isUserAuth] = useState(false)
    return (
        <>
            <ToolkitNavbar />
            {/*  we can pass data with 2 different method 1.with propas 2.agar kisi opeaning and closing bracket ke ander component pass kiya he to usko children se data milega   */}
                 {/* <DataProvider> */}
                <Routes>
                    <Route path="/" element={<ToolkitHome />} />
                    <Route path="/Cart" element={<ToolkitCart />} />

                    {/* <Route path="/" element={<RatingComponent />} /> */}
                    {/* 
                    <Route path="/login" element={<Login isUserAuth={isUserAuth} />} />
                    <Route path='/' element={<PrivateRoute isAuth={isAuth} />} >
                        <Route path="/" element={<Home />} />
                    </Route>
                    <Route path='/create' element={<PrivateRoute isAuth={isAuth} />} >
                    <Route path="/create" element={<CreatePost />} />
                    </Route>
                    
                    <Route path='/details/:id' element={<PrivateRoute isAuth={isAuth} />} >
                    <Route path="/details/:id" element={<DetailsView />} />
                    </Route>
                    
                    <Route path='/update/:id' element={<PrivateRoute isAuth={isAuth} />} >
                    <Route path="/update/:id" element={<Updatepost />} />
                    
                    </Route>
                */}
                </Routes>
             {/* </DataProvider> */}

        </>
    );
}

export default App;
