import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/styles";
import ColorBox from './Color-Box.js'
import NavBar from './NavBar.js'
import Palettefooter from './Palette-footer.js'
import styles from './styles/PaletteStyles'

class Singlecolorpalette extends Component {
    constructor(props) {
        super(props)
        this._shades = this.gatherShades(this.props.palette,this.props.colorID) 
        this.state = {
            format: "hex"
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(format) {
        this.setState({format})
    }

    gatherShades(palette, colorToFilterBy) {
        let shades = []
        let allColors = palette.colors
        for(let key in allColors) {
            shades = shades.concat(allColors[key]
                .filter(color => color.id === colorToFilterBy))
        }
        return shades.slice(1)
    }

    render() {
        let {format} = this.state
        let{paletteName,emoji,id} = this.props.palette
        let {classes} = this.props
        let colorBoxes = this._shades.map(color => <ColorBox 
        name={color.name}
        background={color[format]}
        showFullPalette={false}
        key={color.name}
        />)
        return (
            <div className={classes.Palette}>
                <NavBar handleChange={this.handleChange} showAllColors={false}/>
                <div className={classes.colors}>
                    {colorBoxes}
                    <div className={classes.goBack}>
                         <Link to={`/palette/${id}`}>Go-Back</Link>
                    </div>
                </div>
                <Palettefooter paletteName={paletteName} emoji={emoji}/>
            </div>
        )
    }
}

export default withStyles(styles)(Singlecolorpalette)
