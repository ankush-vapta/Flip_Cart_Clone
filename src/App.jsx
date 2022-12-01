
import React, { useState } from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from './component/account/Login';
import DataProvider from './context/DataProvider';
import Home from './component/home/Home'
import Header from './component/header/Header'
import CreatePost from './component/create/Createpost' 
import DetailsView from './component/details/DetailsView'

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
            {/*  we can pass data with 2 different method 1.with propas 2.agar kisi opeaning and closing bracket ke ander component pass kiya he to usko children se data milega   */}
            <DataProvider>

                <Routes>
                    <Route path="/login" element={<Login isUserAuth={isUserAuth} />} />

                    <Route path='/' element={<PrivateRoute isAuth={isAuth} />} >
                        <Route path="/" element={<Home />} />
                    </Route>
                    <Route path='/create' element={<PrivateRoute isAuth={isAuth} />} >
                        <Route path="/create" element={<CreatePost />} />
                    </Route>

                    <Route path='/details' element={<PrivateRoute isAuth={isAuth} />} >
                        <Route path="/details/:id" element={<DetailsView />} />
                    </Route>
                
                </Routes>

            </DataProvider>
        </>
    );
}

export default App;
