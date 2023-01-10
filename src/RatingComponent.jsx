import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import { CardActions, CardContent, IconButton, Snackbar, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import RemoveIcon from '@mui/icons-material/Remove';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


const initialValue = {
    number: 1
}

const RatingComponent = () => {
    const [value, setValue] = useState(initialValue.number);
    const [open, setOpen] = useState(false);

    function handleOnClickPos() {
        if (value < 5) {
            setValue(value + 1)
            setOpen(true)

        }
    }
    function handleOnClickNeg() {
        if (value <= 0) {
            let disabledBtn = true;

        }
        else {
            setValue(value - 1);
            // setOpen(false)
            // console.log(value , "vvvv")
        }
    }

    console.log(value);
    // useEffect(() => {
    //     setTimeout(() => {
    //         // setOpen(false)
    //         console.log("aaaaaaa")
    //     }, 1000)
    // }, [value])



    return (
        <div className='container bg-img' src="https://www.brandinginasia.com/wp-content/uploads/2022/11/5-Stars-Everywhere-_-Cadbury-5-Star-India.jpg" alt="...">

            <img src="https://www.brandinginasia.com/wp-content/uploads/2022/11/5-Stars-Everywhere-_-Cadbury-5-Star-India.jpg" style={{ "width": "100%", height: "500px" }} alt="" />

            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        5 Star Do Nothing
                        <br />
                        <br />
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                        <br />
                    </Typography>
                    <CardActions>
                        <Button size="small" disabled={value >= 5} onClick={handleOnClickPos} ><PlusOneIcon /></Button>
                        <Button size="small" disabled={value <= 0} onClick={handleOnClickNeg}><RemoveIcon /></Button>
                    </CardActions>
                </CardContent>
            </Card>
            {value === 5 &&
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="success">rating is 5</Alert>
                </Stack>}
            {value === 0 &&
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="error">rating is never less then zero</Alert>
                </Stack>}
        </div>
    )
}

export default RatingComponent