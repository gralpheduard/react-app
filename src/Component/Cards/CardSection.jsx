import React from 'react';
import {Grid, 
        Box, 
        Card, 
        CardContent, 
        Typography,
        CardActionArea
    } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    Root:{
        height: "200%"
    },
    Card1:{
        width: "70%",
        marginTop: "5%",
        marginLeft: "auto",
        marginRight: "auto",
    },
    Card2:{
        width: "70%",
        marginTop: "5%",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "5%",
    }
  });
  
const CardSection = ({svg, title, content, classSection}) =>{
    const classes = useStyles();
    return (
            <Card  variant="outlined" className={classSection}>
                <CardActionArea>
                    <CardContent style={{ backgroundColor: "#202020" }}>
                        <Box color="third">
                           {svg}
                        </Box>
                    </CardContent>
                </CardActionArea>

                    <CardContent >
                        <Typography variant="h5" component="h3">
                            {title}
                        </Typography>
                        <Typography>
                            {content}
                        </Typography>
                    </CardContent>
            </Card>
    )
}

export default CardSection;