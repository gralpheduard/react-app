import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.secondary.main,
        width: "100%",
        height: "100%"
    },
    Grid: {
        height: "100%",
    },
    paper:{
        padding: "4%",
        backgroundColor: theme.palette.third.main,     
        textAlign: 'center',
        height: '100%',
        width: '80%',
        margin:"auto",
        marginTop: "2%",
        marginBottom: "2%"
    },
    input:{
        color:theme.palette.primary.main,
        fontSize:10,
        margin: "auto",
        width: 300,
        [theme.breakpoints.up('sm')]:{
            width: 470,
        },
        [theme.breakpoints.up('md')]:{
            width: 700,
        },
        [theme.breakpoints.up('lg')]:{
            width: 1000,
        },

    },
    inputLabel:{
        color:'white',
        fontSize: 12
    }
}));


export default useStyles;