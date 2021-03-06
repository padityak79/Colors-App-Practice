export default {
    root: {
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        "&:hover svg": {
            cursor: "pointer",
            opacity: ".8"
        }
    },
    colors: {
        backgroundColor: "grey",
        height:"90px",
        width:"100%",
        borderRadius: "5px",
        overflow: "hidden"
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: ".8rem",
        position: "relative"
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.1rem"
    },
    minicolor: {
        height: "25%",
        width:"20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-3.5px"
    },
    delete: {

    }, 
    deleteIcon: {
        color: "white",
        backgroundColor:"#eb3d30",
        width: "20px",
        height: "20px",
        position: "absolute",
        right: "0",
        top: "0",
        padding: "5px",
        zIndex: 10,
        opacity: "0"
    }
};