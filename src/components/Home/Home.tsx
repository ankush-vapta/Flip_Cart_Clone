//@typescript-eslint/no-unused-vars
import React from 'react'
import Banner from './Banner'
import ConstanstNavbar from './ConstantNavbar'
import {  Box } from '@mui/material';

const Home = () => {
  return (
    <>
      <ConstanstNavbar />
      <Box style={{padding:"10px 10px" , backgroundColor:"#F7F5EB"}}>
      <Banner />
      </Box>

    </>
  )
}

export default Home