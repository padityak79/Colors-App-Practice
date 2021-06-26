import React, { Component } from "react";
import PaletteMetaForm from "./PaletteMetaForm.js";
import classNames from "classnames";
import {Link} from 'react-router-dom'
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AddToPhotos from "@material-ui/icons/AddToPhotos";
import Button from '@material-ui/core/Button'
import styles from './styles/PaletteFormNavStyles.js'

class PaletteFormNav extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            formShowing: false
        }
        this.showForm = this.showForm.bind(this)
        this.hideForm = this.hideForm.bind(this)
    }

    showForm() {
        this.setState({formShowing : true})
    }   
    
    hideForm() {
        this.setState({formShowing : false})
    }   

    render() {
        let {classes,open,handleSubmit,handleDrawerOpen,palettes} = this.props
        let {formShowing} = this.state
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position='fixed'
                    color='default'
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open
                    })}
                    >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                        color='inherit'
                        aria-label='Open drawer'
                        onClick={handleDrawerOpen}
                        className={classNames(classes.menuButton, {
                            [classes.hide] : open
                        })}
                        >
                        <AddToPhotos />
                        </IconButton>

                        <Typography variant='h6' color='inherit' noWrap>
                        Create New Palette
                        </Typography>
                    </Toolbar>
                    <div className={classes.navBtns}>
                        <Link to="/">
                                <Button className={classes.button} variant='contained' color="secondary">
                                    Go Back
                                </Button>
                        </Link>
                        <Button className={classes.button} variant="contained" color="primary" onClick={this.showForm}>
                            Save
                        </Button>
                    </div>
                </AppBar>
                {
                    formShowing && <PaletteMetaForm handleSubmit={handleSubmit} palettes={palettes} hideForm={this.hideForm}/>
                }
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);
