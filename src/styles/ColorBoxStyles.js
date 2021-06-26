import chroma from 'chroma-js'
import sizes from './sizes.js'

export default {
    ColorBox: {
        height: props => props.showFullPalette ? "25%" : '50%',
        width: "20%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        fontSize: "15px",
        marginBottom: "-3.5px",
        "&:hover button": {
            opacity: "1",
            transition: ".4s"
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: props => props.showFullPalette ? "20%" : "33.3333%"
        },
        [sizes.down("md")]: {
            width: "50%",
            height: props => props.showFullPalette ? "10%" : "20%"
        },
        [sizes.down("xs")]: {
            width: "100%",
            height: props => props.showFullPalette ? "5%" : "10%"
        }
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        padding: "8px",
        bottom: "0px",
        left: "0px",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px"
    },
    copyText: {
        color: props => chroma(props.background).luminance() >= 0.6 ? "rgba(0,0,0,.7)" : "white"
    },
    colorName: {
        color: props => chroma(props.background).luminance() <= 0.25 ? "white" : "rgba(0,0,0,.7)"
    },
    seeMore: {
        color: props => chroma(props.background).luminance() >= 0.6 ? "rgba(0,0,0,.7)" : "white",
        position: "absolute",
        bottom: "0px",
        right: "0px",
        width: "60px",
        height: "25px",
        textAlign: "center",
        lineHeight: "25px",
        textTransform: "uppercase",
        background: "rgba(255,255,255,0.3)"
    },
    copyButton: {
        color: props => chroma(props.background).luminance() >= 0.6 ? "rgba(0,0,0,.7)" : "white",
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
        textDecoration: "none",
        opacity: "0"
    },
    copyOverlay: {
        opacity: "0",
        zIndex: "0",
        height: "100%",
        width: "100%",
        position: "relative",
        transform : "scale(.1)",
        transition: "transform .6s ease-in-out"
    },
    showOverlay: {
        opacity: "1",
        transform: "scale(50)",
        zIndex: "10",
        position: "absolute",
        overflow: "hidden",
    },
    copyMessage: {
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        transform: "scale(.1)",
        fontSize: "2rem",
        opacity: "0",
        "& h1": {
            fontWeight: "400",
            textShadow: "1px 2px black",
            background: "rgba(255,255,255,0.2)",
            width: "100%",
            textAlign: "center",
            marginBottom: "0",
            padding: "1rem",
            textTransform: "uppercase",
            [sizes.down('sm')]: {
                fontSize: "5rem"
            },
            [sizes.down('xs')]: {
                fontSize: "3rem"
            }
        },
        "& p": {
            fontSize: "1.5rem",
            fontWeight: "100"
        }
    },
    messageShow: {
        opacity : "1",
        transform: "scale(1)",
        zIndex: "25",
        transition: "all .4s ease-in-out",
        transitionDelay: ".3s",
    }
}