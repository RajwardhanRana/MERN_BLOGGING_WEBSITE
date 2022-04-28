import { Grid, makeStyles } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import Post from './Post'
import { Link, useLocation } from 'react-router-dom'
import { getAllPosts } from '../../service/api'

const useStyles = makeStyles((theme) => ({
    container:{
        display:'flex',
        alignItems:'center', 
        justifyContent:'center',
        [theme.breakpoints.up('md')]:{
            justifyContent:'start'
        }
    }
}))

function Posts() {
    const { search } = useLocation()
    const classes = useStyles()
    const [posts, setPosts] = useState([])
    useEffect(() =>{
        const fetchData = async () =>{
            let data = await getAllPosts(search)
            console.log(data)
            setPosts(data)
        }
        fetchData()  
    }, [search])
    return (
        <div>
                <Grid container item lg = {12} sm = {12} xs = {12} className={classes.container}>
            {
                        posts.map(post => (
                            <Link to={`/details/${post._id}`} style={{ textDecoration:'none', color: 'inherit'}}>
                                <Post post = {post} key={post._id} />
                            </Link>
                        ))
                    }
                    </Grid>
        </div>
    )
}

export default Posts
