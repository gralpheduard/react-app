import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
    },  
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 4),
    },

}));

export default useStyles;