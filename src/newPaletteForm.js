import React, { Component } from "react";
import ColorPickerForm from "./ColorPickerForm.js";
import PaletteFormNav from './PaletteFormNav.js'
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from '@material-ui/core/Button'
import {arrayMove} from 'react-sortable-hoc'
import DraggableColorlist from './DraggableColorlist'
import { Typography } from "@material-ui/core";
import styles from './styles/NewPlaletteFormStyles.js'
import seedColors from "./seedColors.js";

class NewPaletteForm extends Component {
  static defaultProps = {
      maxPaletteSize: 20
  }
  constructor(props) {
      super(props)
      this.state = {
        open: true,
        colors : seedColors[0].colors,
      };
      this.addNewColor = this.addNewColor.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.removeColorBox = this.removeColorBox.bind(this)
      this.removeColors = this.removeColors.bind(this)
      this.addRandomColor = this.addRandomColor.bind(this)
    }  

  handleDrawerOpen = () => {
    this.setState({ open: true });
  }

  handleDrawerClose = () => {
    this.setState({ open: false });
  }

  removeColorBox(colorName) {
      this.setState({colors : this.state.colors.filter(color => color.name !== colorName)})
  }

  handleSubmit(newPalette) {
      let {paletteName} = newPalette
      newPalette.id = paletteName.toLowerCase().replace( / /g, '-' )
      newPalette.colors =  this.state.colors
      this.props.savePalette(newPalette)
      this.props.history.push('/')
  }

  addNewColor(newColor) {
      this.setState({colors : [...this.state.colors , newColor] , newColorName: ""})
  }
  removeColors() {
      this.setState({colors : []})
  }
  addRandomColor() {
      let allColors = this.props.palettes.flatMap(({colors}) => colors)
      let {colors} = this.state
      let idx =  Math.floor(Math.random() * allColors.length)
      while(colors.includes(allColors[idx])) {
        idx =  Math.floor(Math.random() * allColors.length)
      }
      this.setState({colors: [...this.state.colors , allColors[idx]]})
  }
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({colors}) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }))
  }

  render() {
    const { classes , maxPaletteSize , palettes} = this.props;
    const { open , colors } = this.state;
    const paletteIsFull = colors.length >= maxPaletteSize

    return (
      <div className={classes.root}>
        <PaletteFormNav 
        open={open}  
        palettes={palettes}
        handleSubmit={this.handleSubmit}
        handleDrawerOpen={this.handleDrawerOpen}
        />
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>

          <div className={classes.container}>
            <Divider />
            <Typography variant='h4' gutterBottom>Design Your Palette</Typography>
            <div className={classes.buttons}>
              <Button 
              variant='contained' 
              color="secondary" 
              className={classes.button}
              onClick={this.removeColors}
              >Clear Palette
              </Button>
              <Button 
              variant='contained' 
              color="primary" 
              className={classes.button}
              onClick={this.addRandomColor}
              disabled={paletteIsFull}
              >Random Colors
              </Button>
            </div>
            <ColorPickerForm 
            paletteIsFull={paletteIsFull} 
            addNewColor={this.addNewColor}
            colors={colors}
            />
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorlist
          colors={colors} 
          removeColorBox={this.removeColorBox}
          axis='xy'
          onSortEnd = {this.onSortEnd}
          distance={15}
          />
        </main>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);
