import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Button, FormControl, InputBase, makeStyles, TextareaAutosize } from '@material-ui/core'
import { Edit } from '@material-ui/icons'
import { getPost, updatePost } from '../../service/api'


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
    form:{
        display:'flex',
        flexDirection:'row', 
        marginTop: 10 
    }, 
    textField:{
        flex:1,
        margin:'0 30px', 
        padding:10, 
        fontSize:20       
    },
    textArea:{
        width:'100%',
        marginTop:50,
        padding:5,
        border: 'none', 
        fontSize: 26,
        '&:focus-visible':{
            outline:'none'
        }
    }
}))
const date  = new Date()
const initialValues = {
    title:'',
    description:'',
    picture:'',
    username:'Akshat',
    categories:'All',
    createdDate: date.toUTCString()
}


function UpdateView({ match }) {
    const history = useHistory()
    const classes = useStyles()
    const [post, setPost] = useState(initialValues)
    useEffect(() => {
        const fetchData = async () =>{
            let data = await getPost(match.params.id)
            console.log(data)
            setPost(data)
        }
        fetchData()
        //eslint-disable-next-line
    }, [])
    const url = 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    const handleChange = (e) => {
        setPost({...post, [e.target.name]: e.target.value})
    }
    const updateBlog = async () =>{
        await updatePost(match.params.id, post)
        history.push(`/details/${match.params.id}`)
    }
    return (
        <div>
            <Box className={classes.container}>
            <img src={url} alt="wrapper" className={classes.image}/>
            <FormControl className={classes.form}>
                <Edit  fontSize='large' color='action' />
                <InputBase 
                placeholder='Title' 
                value={post.title} 
                className={classes.textField} 
                onChange={(e) => handleChange(e)}
                name='title'/>
                <Button variant='contained' color='secondary' onClick={() => updateBlog()}>Update</Button>
            </FormControl>
            <TextareaAutosize 
                minRows={5}
                placeholder='Tell your story...'
                value={post.description}
                className={classes.textArea}
                onChange={(e) => handleChange(e)}
                name='description'
            />
            </Box>
        </div>
    )
}

export default UpdateView
