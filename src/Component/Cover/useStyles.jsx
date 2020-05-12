import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    words:{
        backgroundColor: theme.palette.third.main,
        height: 690,
        [theme.breakpoints.down('md')]:{
            height: 687,
        },
        [theme.breakpoints.down('xs')]:{
            height: 700,
        }
    },
    svg:{
        backgroundColor: theme.palette.secondary.main,
            height:"100%",
            [theme.breakpoints.down('lg')]:{
                height: 690,
            },
            [theme.breakpoints.down('md')]:{
                height:"100%"
            },
      },
    title:{
        marginBottom: 30,
        marginTop:"27%",
        color: theme.palette.primary.main,
        [theme.breakpoints.down('md')]:{
            marginTop:"22%"
        },
        [theme.breakpoints.down('sm')]:{
            marginTop:"27%"
        },
        [theme.breakpoints.down('xs')]:{
            marginTop:"32%"
        }
    },
    subTitle:{
        color: theme.palette.primary.main,
        marginBottom:40,
        marginLeft: "30%",
        marginRight: "30%"
    },
    afros:{
        marginLeft: "10%",
        marginRight: "10%",
        marginTop:"25%",
        [theme.breakpoints.down('md')]:{
            marginTop:"5%",
        },
    }
}));

export default useStyles;