import React, { Component } from 'react'
import {withStyles} from '@material-ui/styles'
import ColorBox from './Color-Box.js'
import NavBar from './NavBar.js'
import Palettefooter from './Palette-footer'
import styles from './styles/PaletteStyles'


class Palette extends Component {

    constructor(props) {
        super(props) 
        this.state = {
            level : 400,
            format: "hex"
        }
        this.changeLevel = this.changeLevel.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(format) {
        this.setState({format})
    }

    changeLevel(level) {
        this.setState({level})
    }

    render() {
        
        let {colors,paletteName,emoji,id} = this.props.palette
        let {classes} = this.props
        let {level,format} = this.state
        let colorBoxes = colors[level].map( c => <ColorBox 
            background={c[format]} 
            name={`${c.name}`}
            moreUrl={`/palette/${id}/${c.id}`}
            key={c.id}
            showFullPalette ={true}
            />
        )
        return (
            <div className={classes.Palette}>
                <NavBar 
                level={level} 
                changeLevel={this.changeLevel} 
                handleChange={this.handleChange}
                showAllColors={true}
                />
                <div className={classes.colors}>
                    {colorBoxes}
                </div>
                <Palettefooter paletteName={paletteName} emoji={emoji}/>
            </div>
        )
    }
}
export default withStyles(styles)(Palette)
