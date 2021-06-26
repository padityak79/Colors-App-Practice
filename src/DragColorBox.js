import React from 'react'
import {withStyles} from '@material-ui/styles'
import DeleteIcon from '@material-ui/icons/Delete';
import {SortableElement} from 'react-sortable-hoc';
import styles from './styles/DragColorBoxStyles.js'

const DragColorBox = SortableElement((props) => {
    let {name,classes,removeColorBox} = props
    return (
        <div className={classes.Colorbox}>
            <div className={classes.boxContent}>
                <span>{name}</span>
                <DeleteIcon className={classes.deleteIcon} onClick={removeColorBox}/>    
            </div>
        </div>
    )
})

export default withStyles(styles)(DragColorBox)

