import React from 'react'
import {Paper, Grid, Typography, TextField, Box,Button} from '@material-ui/core'
import useStyles from './useStyles';

const SendMessage = () =>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid container >
                <Grid className={classes.Grid} item xs={12}>
                    <Paper className={classes.paper} elevation={3}>
                        <Box mb={2}>
                            <Typography variant="h5"color="primary">Send us a message!</Typography>
                        </Box>
                        <form>
                            <Box mb={2}>
                            <TextField id="custom-css-standard-input"     
                                        InputProps={{
                                            className: classes.input,
                                        }}
                                        InputLabelProps={{
                                            className: classes.inputLabel,
                                        }}
                                        label="Name" 
                                        variant="filled" 
                            />
                            </Box>
                            <Box mb={2}>
                            <TextField id="custom-css-standard-input"     
                                        InputProps={{
                                            className: classes.input,
                                        }}
                                        InputLabelProps={{
                                            className: classes.inputLabel,
                                        }}
                                        label="Email" 
                                        variant="filled" 
                            />
                            </Box>
                            <Box mb={2}>
                            <TextField
                                id="filled-multiline-static"
                                label="Your message..."
                                InputLabelProps={{
                                    className: classes.inputLabel,
                                }}
                                InputProps={{
                                    className: classes.input,
                                }}
                                multiline
                                rows={4}
                                defaultValue=""
                                variant="filled"
                            />
                            </Box>
                            <Button color="primary">Send</Button>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default SendMessage