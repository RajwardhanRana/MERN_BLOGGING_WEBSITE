import { Button, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Categories.css'

const useStyles = makeStyles((theme) => ({
    btn:{
        padding: '10px',
        width:'100%',
        marginBottom:'15px'
    },
    links:{
        fontSize:'1.5rem',
        color:'#bd2258',
}
}))


function Categories() {
    const classes = useStyles()
    //eslint-disable-next-line
    const [categories, setCategories] = useState([
        {
            name: 'Movies',
        },
        {
            name: 'Music',
        },
        {
            name: 'Sports',
        },
        {
            name: 'Tech',
        },
        {
            name: 'Fashion',
        },
    ])
    return (
        <div className="categories">
            <Link to={'/create'} style={{ textDecoration:'none', color: 'inherit'}}>
            <Button variant="contained" color="secondary" className={classes.btn}><span style={{fontSize: 20}}>&#43; </span> 
            Create Blog 
            </Button>
            </Link>
            <div className="container">
                <Link to={'/'}  style={{ textDecoration:'none'}} className={classes.links}>All categories</Link>
                    {
                    categories.map(category => (
                        <Link to={`/?category=${category.name}`} style={{ textDecoration:'none'}} className={classes.links}>
                            {category.name}
                       </Link>
                    ))
                    }
            </div>
        </div>
    )
}

export default Categories
