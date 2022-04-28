import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import Posts from './Posts'
import { Grid } from '@material-ui/core'

function Home() {

    return (
        <div>
            <Banner />
            <Grid container>
                <Grid item lg = {3} xs = {12} md = {3} sm = {12}>
                    <Categories />
                </Grid>
                <Grid item lg = {9} xs = {12} md = {9} sm = {12}>
                    <Posts />
                </Grid>
            </Grid>
        </div>
    )
}

export default Home
