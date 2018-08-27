import React, { Component } from 'react';
import { Grid, Button, Hidden, withWidth } from '@material-ui/core';
import styled from 'styled-components';

const NavItem = styled(Button)`
  && {
    width: 100%;
    font-weight: bold;
  }
`;

class NavBar extends Component {
  render() {
    return (
      <Hidden xsDown>
        <Grid container justify={'flex-end'} alignItems={'center'}>
          <Grid item xs={2}>
            <NavItem>HOME</NavItem>
          </Grid>
          <Grid item xs={2}>
            <NavItem>PROJECTS</NavItem>
          </Grid>
          <Grid item xs={2}>
            <NavItem>ABOUT</NavItem>
          </Grid>
        </Grid>
      </Hidden>
    );
  }
}

export default  withWidth()(NavBar);
