import Button from '@mui/material/Button';
import LoginDaiglog from '../Login/LoginDaiglog';
import React, { useState } from 'react';


const ButtonComponent = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button sx={{ mr: 2 }} variant="contained" onClick={() => setOpen(true)}>Login Button</Button>
      <Button sx={{ mr: 2 }} variant="contained">Become A Sellor</Button>
      <Button sx={{ mr: 2 }} variant="contained"> More</Button>
      <LoginDaiglog open={open} setOpen={setOpen} />
    </>
  )
}

export default ButtonComponent


