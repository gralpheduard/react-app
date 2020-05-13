import React, {useState} from 'react';
import {Box, 
        Card, 
        CardContent, 
        Typography,
        CardActionArea,
        Modal, 
        Backdrop, 
        Fade,
        Avatar
} from '@material-ui/core'
import useStyles from './useStyles'


const CardSection = ({svg, title, content, classSection, motto}) =>{
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <div>
            <Card variant="outlined" className={classSection}>
                <CardActionArea onClick={handleOpen}>
                    <CardContent style={{ backgroundColor: "#202020" }}>
                        <Box color="third">
                           {svg}
                        </Box>
                    </CardContent>
                </CardActionArea>
                <CardActionArea onClick={handleOpen}>
                    <CardContent >
                        <Typography variant="h5" component="h3">
                            {title}
                        </Typography>
                        <Typography>
                            {content}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title"><Avatar>{svg}</Avatar>{title}</h2>
                        <p id="transition-modal-description">"{motto}"</p>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default CardSection;