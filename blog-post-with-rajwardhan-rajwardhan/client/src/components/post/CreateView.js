import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Button, FormControl, InputBase, makeStyles, TextareaAutosize } from '@material-ui/core'
import { AddCircle } from '@material-ui/icons'
import { createPost, uploadFile } from '../../service/api'
    
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

const date = new Date()

const initialValues = {
    title:'',
    description:'',
    picture:'',
    username:'Akshat',
    categories:'All',
    createdDate: date.toUTCString()
}


function CreateView() {
    const history = useHistory()
    const classes = useStyles()
    const [post, setPost] = useState(initialValues)
    // const [file, setFile] = useState('')
    const [image, setImage] = useState('')
    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'

    // useEffect(() => {
    //     const getImage = async () => {
    //         if(file){
    //             const data = new FormData()
    //             data.append("name", file.name)
    //             data.append("file", file) 

    //             const image = await uploadFile(data)
    //             post.picture = image.data
    //             setImage(image.data)
    //         }
    //     }
    //     getImage()
    // }, [file])

    const handleChange = (e) => {
        setPost({...post, [e.target.name]: e.target.value})
    }
    const savePost = async () =>{
        await createPost(post)
        history.push('/')
    }
    return (
        <div>
            <Box className={classes.container}>
            <img src={url} alt="wrapper" className={classes.image}/>
            <FormControl className={classes.form}>
                {/* <label htmlFor="fileInput"> */}
                <AddCircle fontSize='large' color='action' />
                {/* </label> */}
                {/* <input 
                type="file" 
                id="fileInput" 
                style={{ display:'none' }} 
                onChange={(e) => setFile(e.target.files[0])}/> */}
                <InputBase onChange={(e) => handleChange(e)} 
                placeholder='Title'
                className={classes.textField}
                name='title'
                />
                <Button onClick={() => savePost()} variant='contained' color='secondary'>Publish</Button>
            </FormControl>
            <TextareaAutosize 
                onChange={(e) => handleChange(e)} 
                minRows={5}
                placeholder='Tell your story...'
                className={classes.textArea}
                name='description'
            />
            </Box>
        </div>
    )  
}

export default CreateView
