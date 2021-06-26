import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";

import Button from '@material-ui/core/Button'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import {ChromePicker} from "react-color"
import styles from './styles/ColorPickerFormStyles.js'

class ColorPickerForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentColor: '#800020',
            newColorName: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.changeCurrentColor = this.changeCurrentColor.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isUniqueColorName', (value) => 
            this.props.colors.every(({name}) => name.toLowerCase()!==value.toLowerCase())
        )
        ValidatorForm.addValidationRule('isUniqueColor', (value) => 
            this.props.colors.every(c => c.color!==this.state.currentColor )
        )
      }      

    handleChange(evt) {
        this.setState({ [evt.target.name] : evt.target.value })
    }

    changeCurrentColor(newColor) {
        this.setState({currentColor: newColor.hex})
    }

    handleSubmit() {
        let newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName
        }
        this.props.addNewColor(newColor)
        this.setState({newColorName: ''})
    }

    render() {
        let {paletteIsFull,classes} = this.props
        let {currentColor,newColorName} = this.state
        return (
            <div>
                <ChromePicker 
                color={currentColor} 
                onChangeComplete={this.changeCurrentColor}
                className={classes.picker}
                />
                <ValidatorForm
                onSubmit = {this.handleSubmit}
                instantValidate = {false}
                >
                    <TextValidator
                    value={newColorName}
                    onChange = {this.handleChange}
                    className={classes.colorNameInput}
                    variant="filled"
                    name="newColorName"
                    margin="normal"
                    label="color name"
                    validators={['required', 'isUniqueColorName', 'isUniqueColor']}
                    errorMessages={['Enter a color name', 'Color name already exists', 'Color is already in use']}
                    />
                    <Button 
                    variant="contained" 
                    color="primary" 
                    type="submit"
                    disabled={paletteIsFull}
                    style={{backgroundColor : paletteIsFull ? 'grey' : currentColor}}
                    className={classes.addColor}
                    >
                    { paletteIsFull? 'Palette is Full' :'Add Color'}
                    </Button>
                </ValidatorForm>
            </div>
        )
    }
}

export default withStyles(styles)(ColorPickerForm)
