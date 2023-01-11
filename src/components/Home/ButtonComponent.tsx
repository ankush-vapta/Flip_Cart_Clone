import React, { useState, useContext } from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import LoginDaiglog from '../Login/LoginDaiglog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';



const ButtonComponent = () => {
  const [open, setOpen] = useState<boolean>(false);

  const { account, setAccount } = useContext(DataContext);

  return (
    <>
      <div>
        {account ? <Profile account={account} setAccount={setAccount} /> :
          <Button sx={{ mr: 2 }} variant="contained" onClick={() => setOpen(true)}>Login Button</Button>
        }
      </div>

      <Button sx={{ mr: 2 }} variant="contained">Become A Sellor</Button>
      <Button sx={{ mr: 2 }} variant="contained"> More</Button>
      <LoginDaiglog open={open} setOpen={setOpen} />
    </>
  )
}

export default ButtonComponent


