import React from 'react';
import {Grid} from '@material-ui/core'
const Card = () =>{
    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    TEST
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    TEST
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    TEST
                </Grid>
            </Grid>
        </div>
    )
}

export default Card;