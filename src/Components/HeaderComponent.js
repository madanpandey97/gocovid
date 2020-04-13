import React from 'react';
import {  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBContainer } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
        collapse: !this.state.collapse,
      });
  }

  render() {
    // const bgPink = {backgroundColor: 'purple-gradient'}
    // const container = {height: 1300}
    return(
      <div>
        <Router>
          <header>
            <MDBNavbar className ="purple-gradient"  dark expand="md" scrolling fixed="top">
              <MDBContainer>
              <MDBNavbarBrand href="/">
                  <strong>GoCoronaGo</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={ this.onClick } />
              <MDBCollapse isOpen = { this.state.collapse } navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                      <MDBNavLink to="#">Home</MDBNavLink>
                  </MDBNavItem>
                  {/* <MDBNavItem>
                      <MDBNavLink to="#">Features</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink to="#">Pricing</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Options</MDBNavLink> */}
                  {/* </MDBNavItem> */}
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="https://www.facebook.com/madanpandey97"><MDBIcon fab icon="facebook-f" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="https://www.linkedin.com/in/madan-pandey/"><MDBIcon fab icon="linkedin" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="https://github.com/madanpandey97"><MDBIcon fab icon="github" /></MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
          </header>
        </Router>
        
      </div>
    );
  }
}

export default Header;