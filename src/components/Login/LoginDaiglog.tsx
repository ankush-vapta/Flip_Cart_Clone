import React, { useState, useContext } from 'react';
import handleApi from '../../services/api'
import { DataContext } from '../../context/DataProvider'
// DataContext is context that is used to staorevalue

import { Dialog, DialogContent, TextField, Box, Button, Typography, styled } from '@mui/material';

const Component = styled(DialogContent)`
    height: 70vh;
    width: 100%;
    padding: 0;
    padding-top: 0;
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

/*
const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`
*/

const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    width: 40%;
    height: 82%;
    padding: 45px 35px;
    & > p, & > h5 {
        color: #FFFFFF;
        font-weight: 600
    }
`;
const accountInitialValues = {
    login: {
        view: "login",
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: "signup",
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'

    }
}

const loginInitialValues = {
    username: "",
    password: ""
}
const signupInitialValues = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phone: ""
}
const LoginDaiglog: Function = (props: any) => {
    const { open, setOpen } = props;
    const [account, toggleAccount] = useState(accountInitialValues.login);
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues)

    const { setAccount } = useContext(DataContext);

    function handleClose() {
        setOpen(false)
        toggleAccount(accountInitialValues.login)
    }

    function onInputChange(e: any) {
        setSignup({ ...signup, [e.target.name]: e.target.value })
    }

    async function signUpUser() {
        let responce = handleApi(signup)
        if (!responce) return;
        handleClose()
        setAccount(signup.firstname)
        return responce;
    }

    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <Component>
                    <Box style={{ display: 'flex', height: '100%' }}>
                        <Image>
                            <Typography variant="h5">{account.heading}</Typography>
                            <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
                        </Image>
                        {
                            account.view === 'login' ?
                                <Wrapper>
                                    <TextField variant="standard" name='username' label='Enter Email/Mobile number' onChange={(e) => setLogin({ ...login, [e.target.name]: e.target.value })} />
                                    {< >Please enter valid Email ID/Mobile number</ >}
                                    <TextField variant="standard" name='password' label='Enter Password' onChange={(e) => setLogin({ ...login, [e.target.name]: e.target.value })} />
                                    <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                                    <LoginButton   >Login</LoginButton>
                                    <Text style={{ textAlign: 'center' }}>OR</Text>
                                    <RequestOTP>Request OTP</RequestOTP>
                                    <CreateAccount onClick={() => toggleAccount(accountInitialValues.signup)}>New to Flipkart? Create an account</CreateAccount>
                                </Wrapper> :
                                <Wrapper>
                                    <TextField variant="standard" name='firstname' label='Enter Firstname' onChange={(e) => onInputChange(e)} />
                                    <TextField variant="standard" name='lastname' label='Enter Lastname' onChange={(e) => onInputChange(e)} />
                                    <TextField variant="standard" name='username' label='Enter Username' onChange={(e) => onInputChange(e)} />
                                    <TextField variant="standard" name='email' label='Enter Email' onChange={(e) => onInputChange(e)} />
                                    <TextField variant="standard" name='password' label='Enter Password' onChange={(e) => onInputChange(e)} />
                                    <TextField variant="standard" name='phone' label='Enter Phone' onChange={(e) => onInputChange(e)} />
                                    <LoginButton onClick={() => signUpUser()} >Continue</LoginButton>
                                </Wrapper>
                        }
                    </Box>
                </Component>
            </Dialog>
        </>
    )
}

export default LoginDaiglog

// function authSignup(
//     signup: { firstname: string; lastname: string; username: string; email: string; password: string; phone: string; }
//     ) {
//     throw new Error('Function not implemented.');
// }
