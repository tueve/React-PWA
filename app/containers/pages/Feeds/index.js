import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { truncate } from 'lodash';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectFeedData,
  makeSelectLoading,
  makeSelectError,
} from './selectors';

import { loadFeed } from './actions';
import reducer from './reducer';
import saga from './saga';

import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core';

class Feed extends Component {
  componentDidMount() {
    this.props.loadNewFeed();
    console.log(this.props);
  }

  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={8}>
          <Grid container spacing={16}>
            {this.props.feed &&
              this.props.feed.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="headline"
                        component="h2"
                      >
                        {truncate(item.title, {
                          length: 50,
                          omission: '...',
                        })}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        Share
                      </Button>
                      <Button size="small" color="primary">
                        Read More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    loadNewFeed: () => dispatch(loadFeed()),
  };
}

const mapStateToProps = createStructuredSelector({
  feed: makeSelectFeedData(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'feed', reducer });
const withSaga = injectSaga({ key: 'feed', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Feed);
