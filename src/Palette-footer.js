import React from 'react'
import {withStyles} from '@material-ui/styles'
import styles from './styles/PaletteFooterStyles.js'

function Palettefooter(props) {
    let {paletteName,emoji,classes} = props
    return (
    <footer className={classes.paletteFooter}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
    </footer>
    )
}

export default withStyles(styles)(Palettefooter)