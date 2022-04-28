import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'

const useStyle = makeStyles((theme)=>({
    image:{
        display:'flex',
        width: '100%',
        height: '75vh',
        backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1)), url(${'https://media.istockphoto.com/vectors/seamless-vector-pattern-in-authentic-arabian-style-vector-id1284296433?k=20&m=1284296433&s=612x612&w=0&h=2arX9XtW6_whUoiCpGwv-E8oVFv63_O5XGZznkx4LHw='})`,
        alignItems:'top',
        justifyContent:'center',
    },
    img__txt:{
        marginTop:'100px',
        fontSize:'5rem',
        color: '#bd2258',
        fontWeight:'700',
        fontFamily:'Roboto',
        userSelect:'none'
    }
}))

function Banner() {
    const classes = useStyle()
    return (
        <div>
            <Box className={classes.image}>
                <Typography className={classes.img__txt}>BLOGS</Typography>
            </Box>
        </div>
    )
}

export default Banner
