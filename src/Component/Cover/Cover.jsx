import React from 'react';
import SvgMobile from './Svgs/SvgMobile';
import SvgPC from './Svgs/SvgPC'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: "#eb6383",
      color: "white"
    },
    title:{
        alignItems: "center",
        justifyContent:"center",
        backgroundColor: "#FFFFFF"
        
    },
    subTitle:{
        alignItems: "center",
        justifyContent:"center",
    },

  }));
  
const Cover =()=>{
    const classes = useStyles();

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item sm={12} xs={12} md={12} lg={6}  m="auto" >
                        <Box mt={15} mb={3} direction="column-reverse">
                            <Typography variant="h3" component="h3">The kulots</Typography>
                        </Box>
                        <Box mx={10}mb={8}>
                            <Typography  variant="h5" component="h2">Lorem ipsum dolor, Inventore enim assumenda qui similique? Quidem porro eaque beatae qui magnam temporibus.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6} m="auto" >
                        <Box mt={10} mx={10}>
                            <SvgPC />
                        </Box>

                    </Grid>
                </Grid>


            </div>
        )
    }
    


export default Cover;