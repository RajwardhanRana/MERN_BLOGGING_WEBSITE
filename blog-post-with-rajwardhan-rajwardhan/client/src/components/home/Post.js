import React from 'react'
import './Post.css'
import { Box, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    container:{
        minHeight:450,
        maxHeight:500,
        height:'fit-content',
        display: 'flex',
        flexDirection: 'column',
        width: 290,
        borderRadius: 2,
        border:'1px solid #bd2258',
        alignItems:'center',
        backgroundColor:'azure',
        overflow:'hidden',
    },
    image:{
        height: 190,
        marginBottom:10,
        // display:'none'
    },
    cat:{
        fontSize:14,
        color:'darkgray',
    },
    title:{
        fontWeight:'600',
        textTransform:'capitalize',
        fontSize:20,
    },
    username:{
        fontFamily:'Helvetica',
        fontSize:20,
    },
    description:{
        padding:10
    }

}))  

function Post({ post }) {
    const classes = useStyles()
    const url = post.picture || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGlnaXRhbCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80  '
    return (
        
        <div className="posts">
            <Box className={classes.container} key={post._id}>
                <img src={url} alt="wrapper" className={classes.image}/>
                <Typography className={classes.cat}>{post.categories}</Typography>
                <Typography className={classes.title}>{post.title}</Typography>
                <Typography className={classes.username}>Author:<span style={{textWeight:'600'}}>{post.username}</span></Typography>
                <Typography className={classes.description}>{post.description}</Typography>
            </Box>
        </div>
    )
}
export default Post
