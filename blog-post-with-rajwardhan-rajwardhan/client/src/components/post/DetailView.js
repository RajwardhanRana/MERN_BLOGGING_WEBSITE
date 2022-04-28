import { Box, makeStyles, IconButton, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Edit, Delete } from '@material-ui/icons'
import { Link, useHistory } from 'react-router-dom'
import { getPost, deletePost } from '../../service/api'

const useStyles = makeStyles((theme) => ({
    container:{
        [theme.breakpoints.up('lg')]: {
            padding:'0 100px',
        },
        padding:0,
    },
    image:{
        width:'100%',
        height:'60vh',
    },
    icons:{
        float:'right',
    },
    icon:{
        margin:5,
        fontSize:32
    },
    heading:{
        fontWeight:600,
        margin:'70px 100px 5px 10px',
        fontFamily:'Roboto',
        [theme.breakpoints.down('xs')]: {
            fontSize:'2rem',
        },
        [theme.breakpoints.down('md')]: {
            fontSize:'3rem',
        },
        [theme.breakpoints.up('lg')]: {
            margin: '70px 0 5px 0',
            fontSize:'4rem',
        },
        textTransform:'capitalize',
        textAlign:'center'
    },
    info_container:{
        margin:'0 50px 10px 15px',
        display:'flex',
        [theme.breakpoints.down('sm')]:{
            display:'block',
        },
        justifyContent:'space-between'
    },
    info:{
        fontSize:'14px',
        color:'rgb(87, 85, 85)',
        fontWeight:'800',
    },
    descr:{
        padding:10
    }
}))

function DetailView({ match }) {
    const history = useHistory()
    const classes = useStyles()
    const [post, setPost] = useState({})
    useEffect(() => {
        const fetchData = async () =>{
            let data = await getPost(match.params.id)
            console.log(data)
            setPost(data)
        }
        fetchData()
        //eslint-disable-next-line
    }, [])
    const deleteBlog = async () => {
        await deletePost(post._id)
        history.push('/')
    }
    const url = 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    return (
        <div>
            <Box className={classes.container}>
                <img src={ post.picture || url } alt="wrapper" className={classes.image}/>
            <Box className={classes.icons}>
                <Link to={`/update/${post._id}`} style={{ textDecoration:'none', color: 'inherit'}}>
                <IconButton>
                <Edit className={classes.icon} color = 'primary'/>
                </IconButton>
                </Link>
                <IconButton onClick={() => deleteBlog()}> 
                <Delete className={classes.icon} color='error'/>
                </IconButton>
            </Box>
            <Typography className={classes.heading}>{post.title}</Typography>
            <Box className={classes.info_container}> 
            <Link to={`/?username=${post.username}`} style={{ textDecoration:'none', color: 'inherit'}}>
                <Typography className={classes.info}>{post.username}</Typography>
            </Link>
                <Typography className={classes.info}>{new Date(post.createdDate).toDateString()}</Typography>
            </Box>
            <Typography className={classes.descr} >{post.description} </Typography>
        </Box>
        </div>
    )
}

export default DetailView
