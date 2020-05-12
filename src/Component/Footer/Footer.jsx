import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import useStyles from './useStyles'

const Footer = () =>{
    const classes = useStyles();

    return (
        <div>
            <Grid container className={classes.footer}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Box mt={2} mb={2}>
                        <Typography variant="h5" component="h2">The Kulots</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Box mb={1}>
                        <Typography>This is just a portfolio by Ralph Eduard C. Gannaban - Links below</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Box>
                        <a href=""><LinkedInIcon color="primary"/></a> <a href=""><FacebookIcon color="primary"/></a>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Box mb={2}>
                        gralpheduard@gmail.com
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Box mb={2}>
                        ©2020 Ralph Eduard C. Gannaban. All rights reserved
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;