import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    authContainer: {
        width: 400,
        margin: '0 auto',
    },
    formContainer: {
        position: 'relative',
        padding: '0 20px 50px',
        '&>*': {
            marginBottom: 15,
        },
    },
    authHeader: {
        textAlign: 'center',
        padding: '24px 0',
    },
    authLogo: {
        display: 'flex',
        backgroundColor: '#F50057',
        color: '#FFFFFF',
        borderRadius: '100%',
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 10px',
    },
    switchButton: {
        position: 'absolute',
        bottom: 0,
        right: 20,
    },
    link: {
        textAlign: 'center',
        margin: '0px auto 20px',
    }
}));

export default useStyles;