import React, { Component } from 'react'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

class PaletteMetaForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            stage: 'form',
            newPaletteName: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.showEmojiPicker = this.showEmojiPicker.bind(this)
        this.savePalette = this.savePalette.bind(this)
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isUniquePaletteName', (value) => 
        this.props.palettes.every(({paletteName}) => paletteName.toLowerCase()!==value.toLowerCase())
        )   
    }

    showEmojiPicker() {
        this.setState({stage: 'emoji'})
    }

    handleClose = () => {
      this.setState({stage: ''})
    };

    handleChange(evt) {
        this.setState({ [evt.target.name] : evt.target.value })
    }

    savePalette(emoji){
        let newPalette = {
            paletteName: this.state.newPaletteName,
            emoji: emoji.native
        }
        this.props.handleSubmit(newPalette)
        this.setState({stage: ""})
    }

    render() {
        let { hideForm} = this.props
        let { stage, newPaletteName} = this.state
        return (
            <div>
                <Dialog open={stage === 'emoji'} onClose={hideForm}>
                    <DialogTitle id="form-dialog-title">Choose a Palette Emoji</DialogTitle>
                    <Picker onSelect={this.savePalette} title="Pick a Palette Emoji"/>
                </Dialog>
                <Dialog open={stage === 'form'} onClose={hideForm} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add New Name</DialogTitle>
                    <ValidatorForm 
                    onSubmit={this.showEmojiPicker}
                    >
                        <DialogContent>
                            <DialogContentText>
                                Please enter a name for the palette. Make sure it's unique!
                            </DialogContentText>
                            <TextValidator 
                            label="Palette Name" 
                            onChange={this.handleChange}
                            value={newPaletteName} 
                            margin='normal'
                            name="newPaletteName"
                            fullWidth
                            validators={['required','isUniquePaletteName']}
                            errorMessages={['Enter the Palette Name' , 'Palette Name already taken!']}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={hideForm} color="primary">
                                Cancel
                            </Button>
                            <Button 
                            variant="contained" 
                            color='primary' 
                            type="submit"
                            >Save Palette
                            </Button>
                        </DialogActions>
                    </ValidatorForm>
            </Dialog>
            </div>
        );
    }
  
    
}

export default PaletteMetaForm