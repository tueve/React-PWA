import React, { Component } from 'react';
import { Grid, Hidden, withWidth } from '@material-ui/core';
import NavItem from 'atom/NavItem'

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
