import sizes from './sizes'

export default {
    Palette: {
        height: "100vh",
        overflow: "hidden"
    },
    colors: {
        height: "90vh"
    },
    goBack: {
        height: "50%",
        width: "20%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        fontSize: "15px",
        marginBottom: "-3.5px",
        backgroundColor: "black",
        "& a": {
            color: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "100px",
            height: "30px",
            lineHeight: "30px",
            border: "none",
            outline: "none",
            cursor: "pointer",
            fontSize: ".8rem",
            background: "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
            textAlign: "center",
            textDecoration: "none"
        },
        [sizes.down('lg')]: {
            width:"75%",
            height: "33.3333%"
        },
        [sizes.down('md')]: {
            width: "50%",
            height: "20%"
        },
        [sizes.down('xs')]: {
            width: "100%",
            height: "10%"
        }
    }
}