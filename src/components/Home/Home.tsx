//@typescript-eslint/no-unused-vars
import { useEffect } from "react"
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from "react-redux/es/hooks/useSelector";

import Banner from './Banner'
import ConstanstNavbar from './ConstantNavbar'
import { getProduct } from '../Redux/action/action';
import Slide from "./Slide";
import MidSection from "./MidSection";

import { Box } from '@mui/material';


const Home = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const getProductReducer: any = useSelector(state => state.getProductReducer)
  const { products } = getProductReducer;


  // @ts-ignore
  useEffect(() => {
    // @ts-ignore
    dispatch(getProduct())
  }, [])



  return (
    <>
      <ConstanstNavbar />
      <Box style={{ padding: "10px 10px" }}>
        <Banner />
        <Slide products={products} title="Deal Of The Day" />
        <Slide products={products} title="Deal Of The Day" />
        <MidSection />
        <Slide products={products} title="Deal Of The Day" />

      </Box>

    </>
  )
}

export default Home