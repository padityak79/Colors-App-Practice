import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import paletteColors from './seedColors.js'
import Palette from './Palette.js'
import PaletteList from './PaletteList.js'
import NewPaletteForm from "./newPaletteForm.js"
import { generatePalette } from "./colorHelpers"
import Singlecolorpalette from "./singleColorPalette.js"
import { TransitionGroup , CSSTransition } from 'react-transition-group'
import Page from './page.js'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    let allPalettes = JSON.parse(window.localStorage.getItem('palettes'))
    this.state = {
      palettes : allPalettes || paletteColors
    }
    this.savePalette = this.savePalette.bind(this)
    this.removePalette = this.removePalette.bind(this)
  }

  savePalette(newPalette) {
    this.setState({palettes : [...this.state.palettes , newPalette]} , this.syncLocalStorage)
  }

  syncLocalStorage() {
    window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes))
  }

  findPalette(id) {
    return this.state.palettes.find((palette) => palette.id === id)
  }

  removePalette(id) {
    let palettes = this.state.palettes.filter(p => p.id !== id)
    this.setState({palettes}, this.syncLocalStorage)
  }

  render() {
    return (
      <Route
      render = {({location}) => 
        (<TransitionGroup>
          <CSSTransition key={location.key} classNames="page" timeout={500}>
            <Switch location={location}>
              <Route 
              exact
              path="/palette/new"
              render={(routeProps) => 
              <Page><NewPaletteForm 
              savePalette={this.savePalette} 
              palettes={this.state.palettes} 
              {...routeProps}/>
              </Page>}
              />
              <Route 
              exact 
              path="/" 
              render={(routeProps) => 
              <Page><PaletteList 
              palettes={this.state.palettes} 
              removePalette={this.removePalette} 
              {...routeProps} />
              </Page>}
              />
              <Route 
              exact 
              path="/palette/:id" 
              render={(routeProps) => 
              <Page><Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))}/>
              </Page>}
              />
              <Route 
              exact
              path="/palette/:paletteID/:colorID"
              render = {(routeProps) => 
              <Page><Singlecolorpalette 
              palette={generatePalette(this.findPalette(routeProps.match.params.paletteID))} 
              colorID={routeProps.match.params.colorID}/>
              </Page>}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>)
      }
      />
    )
  }
}


export default App;
