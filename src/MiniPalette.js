import React ,{PureComponent} from 'react'
import {withStyles} from '@material-ui/styles'
import styles from './styles/MiniPaletteStyles.js'
import DeleteIcon from '@material-ui/icons/Delete' 


class MiniPalette extends PureComponent {
    constructor(props) {
        super(props) 
        this.handleRemove = this.handleRemove.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleRemove(e){
        e.stopPropagation()
        this.props.activateDeleteDialog(this.props.id)
    }
    handleClick() {
        this.props.goToPalette(this.props.id)
    }
    render (){
        let {classes,colors,paletteName,emoji} = this.props
        let miniColorBoxes = colors.map(color => <div 
            className={classes.minicolor}
            style={{backgroundColor: color.color}}
            key={color.name}
        />)
        return(
            <div className={classes.root} onClick={this.handleClick}>
                    <DeleteIcon className={classes.deleteIcon} style={{transition: "all .3s ease-in-out"}} onClick={this.handleRemove}/>
                <div className={classes.colors}>
                    {miniColorBoxes}
                </div>
                <h5 className={classes.title}>
                    {paletteName} <span className={classes.emoji}>{emoji}</span> 
                </h5>
            </div>
        )}
}

export default withStyles(styles)(MiniPalette)