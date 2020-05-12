import React from 'react';
import {Grid} from '@material-ui/core'
import {One, Two, Three, Four, Five, Six} from './SVGs'
import CardSection from './CardSection'
import { makeStyles } from '@material-ui/core/styles';
import useStyles from './useStyles'

const Cards = () =>{
    const classes = useStyles();
    return (
        <div className={classes.Root}>
            <Grid container>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <CardSection 
                        classSection={classes.Card1}
                        svg = {<One />}
                        title = {"One"}
                        content ={"Lorem ipsum dolor sit amet."}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <CardSection 
                        classSection={classes.Card1}
                        svg = {<Two />}
                        title = {"Two"}
                        content ={"Lorem ipsum dolor sit amet."}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <CardSection 
                        classSection={classes.Card1}
                        svg = {<Three />}
                        title = {"Three"}
                        content ={"Lorem ipsum dolor sit amet."}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                <CardSection 
                        classSection={classes.Card2}
                        svg = {<Four />}
                        title = {"Four"}
                        content ={"Lorem ipsum dolor sit amet."}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <CardSection 
                        classSection={classes.Card2}
                        svg = {<Five />}
                        title = {"Five"}
                        content ={"Lorem ipsum dolor sit amet."}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <CardSection 
                        classSection={classes.Card2}
                        svg = {<Six />}
                        title = {"Six"}
                        content ={"Lorem ipsum dolor sit amet."}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;