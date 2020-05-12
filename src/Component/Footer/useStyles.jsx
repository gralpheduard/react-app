import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    contentLinks:{
        fontSize: 12,
    },
   footer:{
       backgroundColor: theme.palette.third.main,
       color: theme.palette.primary.main,
       height: "100%"
   }
}));

export default useStyles;