import React from 'react';
import SvgPC from './Svgs/SvgPC'
import { Box, Grid, Typography, Button } from '@material-ui/core';

import useStyles from './useStyles'
const Cover =()=>{
    const classes = useStyles();

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item className={classes.words} sm={12} xs={12} md={12} lg={6}  >
                        <Box className={classes.title}>
                            <Typography variant="h3" component="h3">The kulots</Typography>
                        </Box>
                        <Box className={classes.subTitle}>
                            <Typography  variant="h5" component="h2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptates magnam dolor! Corrupti id quam</Typography>
                        </Box>
                        <Box className={classes.coverBottom}>
                            <Button color="secondary"variant="contained">
                                Join the club!
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item className={classes.svg} xs={12} sm={12} md={12} lg={6}>
                        <Box className={classes.afros}>
                            <SvgPC />
                        </Box>

                    </Grid>
                </Grid>
            </div>
        )
    }
    


export default Cover;