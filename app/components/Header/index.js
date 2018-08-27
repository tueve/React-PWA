import React, { Fragment } from 'react';
import styled from 'styled-components';

import { Grid, withWidth, Hidden } from '@material-ui/core';
import A from './A';
import NavBar from './NavBar';
import BurgerMenu from './BurgerMenu';

import Logo from './logo.png';
import messages from './messages';

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: blue;
`;

const LogoComp = styled.img`
  width: 120px;
  height: 120px;
  margin: 10px 30px;
`;

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <Fragment>
        <Grid container>
          <Grid item xs={3}>
            <Hidden xsDown>
              <A href="/">
                <LogoComp src={Logo} alt="Logo" />
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
