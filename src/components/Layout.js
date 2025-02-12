import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Nav } from './Nav';
import './Nav.css';
export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <Nav />
    
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}