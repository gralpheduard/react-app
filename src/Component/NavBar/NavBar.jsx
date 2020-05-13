import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles'
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const NavBar = () =>{
  const classes = useStyles();

    return(
    <div>
        <AppBar color="textSecondary" position="static"className={classes.root}>
            <Toolbar>
                {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton> */}
                <Typography variant="h6" color="third"className={classes.title}>
                Kulots
                </Typography>
                {/* <Button color="inherit">Button</Button> */}
            </Toolbar>
        </AppBar>
    </div>

    )

}


export default NavBar;