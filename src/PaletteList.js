import React, { Component } from 'react'
import MiniPalette from './MiniPalette'
import {withStyles} from '@material-ui/styles'
import styles from './styles/PaletteListStyles.js'
import {Link} from 'react-router-dom'
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import Dialog from '@material-ui/core/Dialog';
import Avatar from '@material-ui/core/Avatar';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import blue from '@material-ui/core/colors/blue'
import red from '@material-ui/core/colors/red'

class PaletteList extends Component {
    constructor(props) {
        super(props) 
        this.state={
            deleteDialogOpen : false,
            deleteId : undefined
        }
        this.activateDeleteDialog = this.activateDeleteDialog.bind(this)
        this.deletePalette = this.deletePalette.bind(this)
        this.cancelDeletePalette = this.cancelDeletePalette.bind(this)
        this.goToPalette = this.goToPalette.bind(this)
    }

    activateDeleteDialog(id) {
        this.setState({ deleteDialogOpen : true , deleteId : id })
    }

    goToPalette(id) {
        this.props.history.push(`/palette/${id}`)
    }

    deletePalette() {
        let {deleteId} = this.state
        this.setState({ deleteDialogOpen : false , deleteId : undefined })
        this.props.removePalette(deleteId)
    }

    cancelDeletePalette() {
        this.setState({ deleteDialogOpen : false , deleteId : undefined })
    }

    render() {
        let {palettes,classes} = this.props
        let {deleteDialogOpen} = this.state
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h2 className={classes.heading}> React Colors</h2>
                        <Link to="/palette/new" >
                            New Palette
                        </Link>
                    </nav>
                    <TransitionGroup className={classes.palettes}>
                    {palettes.map( palette => 
                        <CSSTransition key={palette.id} classNames="fade" timeout={300}>
                            <MiniPalette 
                            {...palette} 
                            activateDeleteDialog = {this.activateDeleteDialog}
                            goToPalette={this.goToPalette}
                            key={palette.id}
                            />
                        </CSSTransition>
                    )}
                    </TransitionGroup>
                </div>
                <Dialog open={deleteDialogOpen} aria-labelledby="delete-dialog-title">
                    <DialogTitle id="delete-dialog-title">Delete This Palette?</DialogTitle>
                    <List>
                        <ListItem button onClick={this.deletePalette}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: blue[100] , color: blue[600]}}>
                                    <CheckIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>
                                Delete
                            </ListItemText>
                        </ListItem>
                        <ListItem button onClick={this.cancelDeletePalette}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: red[100] , color: red[600]}}>
                                    <CloseIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>
                                Cancel
                            </ListItemText>
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList) 
