import { Toolbar, AppBar, Typography, makeStyles, Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

 
const useStyles = makeStyles((theme) =>({
    header:{
        background:'azure',
        padding:'5px',
    },
    container:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around'
    },
    text:{
        color:'#fa4d8a',
        [theme.breakpoints.down('xs')]: {
            fontSize:'16px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize:'18px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize:'22px',
        },
        [theme.breakpoints.up('lg')]: {
                fontSize:'24px',
            },
        fontWeight:'600',
        padding:'5px',
        borderRadius:'10px'
    }
}))

function Header() {
    const classes = useStyles()
    const history = useHistory();
    const { oktaAuth, authState } = useOktaAuth();
    
    if (!authState) return null;


    const login = async () => history.push('/login');
    const logout = async () => oktaAuth.signOut();
    
    const button = authState.isAuthenticated ?
    <button onClick={logout}>Logout</button> :
    <button onClick={login}>Login</button>;
    
    return (
        <div>
            <AppBar className={classes.header}>
                <Toolbar className={classes.container}>
                    <Link to={'/'} style={{ textDecoration:'none' }}>
                    <Button color="secondary">
                    <Typography className={classes.text}>Home</Typography>
                    </Button>
                    </Link>
                    <Link to={'/about'} style={{ textDecoration:'none' }}>
                    <Button color="secondary">
                    <Typography className={classes.text}>About</Typography>
                    </Button>
                    </Link>
                    <Link to={'/login'} style={{ textDecoration:'none' }}>
                    <Button color="secondary">
                    <Typography className={classes.text}>{button}</Typography>
                    </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
