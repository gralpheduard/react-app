import React from 'react';
import {Box, 
        Card, 
        CardContent, 
        Typography,
        CardActionArea
    } from '@material-ui/core'

const CardSection = ({svg, title, content, classSection}) =>{
    return (
            <Card variant="outlined" className={classSection}>
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