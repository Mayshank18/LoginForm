import React,{useContext,useEffect} from 'react'
import { LoginContext } from '../context/ContextProvider'
import {Box,makeStyles,Typography,AppBar,Toolbar} from '@material-ui/core'
import { Marginer } from './marginer'
import { SubmitButtonout } from './accountBox/common'
import { useHistory } from "react-router-dom";

const useStyles=makeStyles(theme=>({
        header:{
            background:'#fff44f'
        },
        container:{
            display:'flex',
            height:'40vh',
            display:'flex',
            textAlign:'center',
            flexDirection:'column',
            alignItems:'center',
            width:'30vw',
            margin:'auto',
            '&>*':{
                padding:'auto'
            },
            [theme.breakpoints.down('sm')]:{
                display:'flex',
                flexDirection:'column',
                height:'100vh',
                width:'100%',
            },
        },
        text:{
            margin:'auto',
            fontSize:20,
            color:'#F28C28',
            fontWeight:600
        }
}))


const Home = () => {
    const {account,setLoggedIn} = useContext(LoginContext);
    const classes=useStyles();
    let history = useHistory();

    const logoutUser=()=>{
        history.push("/login");
        setLoggedIn(false);
    }

    return (
        <AppBar className={classes.header}>
            <Toolbar>
            <Box className={classes.container}>
                <Box className={classes.container}>
                    <Typography className={classes.text}>Welcome, {account.fullname}!</Typography>
                </Box>
                <Box className={classes.container}>
                    <Typography className={classes.text}>Contact -:  {account.phone}</Typography>
                </Box>
                <Box className={classes.container}>
                    <Typography className={classes.text}>EmailId -:  {account.email}</Typography>
                </Box>
                <Marginer direction="vertical" margin="1.6em" />
                <Box className={classes.container}>
                <SubmitButtonout onClick={()=>logoutUser()} type="submit">Log-out</SubmitButtonout>
                </Box>
                <Marginer direction="vertical" margin="1em" />
            </Box>
        </Toolbar>
    </AppBar>
    )
}

export default Home;
