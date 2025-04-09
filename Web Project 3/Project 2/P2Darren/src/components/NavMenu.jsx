import React, { Component } from 'react'
import { MenuItem, Menu } from 'semantic-ui-react'
import './NavMenu.css' 
export default class MenuExampleStackable extends Component {
  state = {}

  handleItemClick = (e, { name }) =>{
    this.setState({ activeItem: name }),
    document.getElementById(name).scrollIntoView({
      behavior:"smooth"
    })
  }

  render() {
    const { activeItem } = this.state

    return (
    <Menu stackable>
        <MenuItem
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        >
          <h3>About</h3>
        </MenuItem>

        <MenuItem
          name='degrees'
          active={activeItem === 'degrees'}
          onClick={this.handleItemClick}
        >
          <h3>Degrees</h3>
        </MenuItem>

        <MenuItem
          name='minors'
          active={activeItem === 'minors'}
          onClick={this.handleItemClick}
        >
          <h3>Minors</h3>
        </MenuItem>

        <MenuItem
          name='employments'
          active={activeItem === 'employements'}
          onClick={this.handleItemClick}
        >
          <h3>Employments</h3>
        </MenuItem>

        <MenuItem
          name='people'
          active={activeItem === 'people'}
          onClick={this.handleItemClick}
        >
          <h3>People</h3>
        </MenuItem>
      </Menu>
    )
  }
}