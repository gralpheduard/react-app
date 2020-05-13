import React from 'react';
import {Grid} from '@material-ui/core'
import {One, Two, Three, Four, Five, Six} from './SVGs'
import CardSection from './CardSection'
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
                        title = {"Inter"}
                        content ={"Lorem ipsum dolor sit amet."}
                        motto={"kulot or not, whatever"}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <CardSection 
                        classSection={classes.Card1}
                        svg = {<Four />}
                        title = {"Pro"}
                        content ={"Lorem ipsum dolor sit amet."}
                        motto={"Chill? All the time. All the time? Chill."}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <CardSection 
                        classSection={classes.Card1}
                        svg = {<Three />}
                        title = {"Meta"}
                        content ={"Lorem ipsum dolor sit amet."}
                        motto={"Eat, sleep, repeat."}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                <CardSection 
                        classSection={classes.Card2}
                        svg = {<Two />}
                        title = {"Ana"}
                        content ={"Lorem ipsum dolor sit amet."}
                        motto={"Sugar Ruuuushh!!!"}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <CardSection 
                        classSection={classes.Card2}
                        svg = {<Five />}
                        title = {"Telo"}
                        content ={"Lorem ipsum dolor sit amet."}
                        motto={"Gadgets.. Gadgets.. Gadgetssss"}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <CardSection 
                        classSection={classes.Card2}
                        svg = {<Six />}
                        title = {"Cyto"}
                        content ={"Lorem ipsum dolor sit amet."}
                        motto={"It's hard to be the smart guy in the group, but life's hard so... yeah."}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;