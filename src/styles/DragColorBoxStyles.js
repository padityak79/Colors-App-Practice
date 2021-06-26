import sizes from './sizes.js'
import chroma from 'chroma-js'

let styles = {
    Colorbox: {
        backgroundColor: props => props.color,
        height: "25%",
        width: "20%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        fontSize: "15px",
        marginBottom: "-3.5px",
        "&:hover svg": {
            color: "white",
            transform: "scale(1.2)"
        },
        [sizes.down('lg')]: {
            width: "25%",
            height: "20%"
        },
        [sizes.down('md')]: {
            width: "50%",
            height: "10%"
        },
        [sizes.down('sm')]: {
            width: "100%",
            height: "5%"
        }
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        padding: "10px",
        bottom: "0px",
        left: "0px",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between",
        "& span" : {
           lineHeight: "24px"
        },
        color: props => chroma(props.color).luminance() <= 0.25 ? "white" : "black"
    },
    deleteIcon: {
        transition: "all 0.3s"
    }
}

export default styles