// @ts-ignore
import React, { useState } from 'react'

import { Typography, Menu, MenuItem, Box, styled } from '@mui/material';
import { PowerSettingsNew } from '@mui/icons-material';


type DataContextType = {
    anchorEl: null | HTMLElement;
};


const Component = styled(Menu)`
    margin-top: 5px;
`;

const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 20px;
`;

const Profile = ({ account, setAccount }: any) => {
    // const [open, setOpen] = useState<any>(true)

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    function handleClick(e: any) {
        setAnchorEl(e.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
        setAccount("")
    }

    /*
    function logoutUser() {

    }
    */
    return (
        <>
            <Box onClick={(e) => handleClick(e)}><Typography style={{ marginTop: 2 }}>{account}</Typography></Box>
            <Component
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={() => {
                    handleClose();
                    //  logoutUser();
                }}>
                    <PowerSettingsNew fontSize='small' color='primary' />
                    <Logout>Logout</Logout>
                </MenuItem>
            </Component>
        </>
    )
}

export default Profile