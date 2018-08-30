import React, { Fragment } from 'react';
import styled from 'styled-components';

import { Grid, Hidden } from '@material-ui/core';
import A from 'atom/A';
import NavBar from 'organism/NavBar';
import BurgerMenu from 'organism/BurgerMenu';
import Logo from 'atom/Logo';
import LogoImg from './logo.png';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <Fragment>
        <Grid container>
          <Grid item xs={3}>
            <Hidden xsDown>
              <A href="/">
                <Logo src={LogoImg} alt="Logo" />
              </A>
            </Hidden>
          </Grid>
          <Grid item xs={9} container>
            <NavBar />
          </Grid>
        </Grid>
        <Hidden smUp>
          <BurgerMenu />
        </Hidden>
      </Fragment>
    );
  }
}

export default Header;
