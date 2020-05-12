import React from 'react';
import SvgPC from './Svgs/SvgPC'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles'
import Button from '@material-ui/core/Button'
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
                            <Typography  variant="h5" component="h2">If you have a curly hair, put your hands in the air and wave it like you just don't care!</Typography>
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