import React, { Component } from 'react';
import CommentList from './CommentList';
import eventHelpers from '../../../utils/eventHelpers';
import userHelpers from '../../../utils/userHelpers';
import moment from 'moment';

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reply: '',
      commentData: [],
      username: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.preventDefaultSubmit = this.preventDefaultSubmit.bind(this);
    this.handleReplyChange = this.handleReplyChange.bind(this);
  }

  componentWillMount() {
    const eventId = Number(location.href.split('/').pop().trim());

    // get comments for the current event
    eventHelpers.getComments(eventId)
    .then((res) => {
      // commentData = res.data;
      this.setState({ commentData: res.data });
    })
    .catch((err) => {
      console.log(err);
    });

    // get user info
    userHelpers.getCurrentUserData()
    .then((res) => {
      this.setState({ username: res.data.username });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  handleSubmit() {
    // build comment
    const commentToSubmit = {
      userId: window.localStorage.getItem('id'),
      text: this.state.reply,
      username: this.state.username,
      // avatarURL: this.props.avatarURL || 'https://s3.amazonaws.com/spreadout-img/avatar.png',
      timeCreated: moment(),
    };

    // get eventId
    const eventId = Number(location.href.split('/').pop().trim());

    // add to state for automatic update without page reload
    const newCommentData = this.state.commentData.concat([commentToSubmit]);
    this.setState({ commentData: newCommentData });

    // submit comment
    eventHelpers.addComment(commentToSubmit, eventId)
    .then((res) => {
      console.log('RES FROM SUBMITTING', res);
    })
    .catch((err) => {
      console.log('ERR ON ADDING COMMENT', err);
    });

    // clear form
    this.setState({ reply: '' });
  }

  handleReplyChange(e) {
    this.setState({ reply: e.target.value });
  }

  preventDefaultSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <CommentList 
          commentData={this.state.commentData}
          preventDefaultSubmit={this.preventDefaultSubmit}
          handleSubmit={this.handleSubmit}
          handleReplyChange={this.handleReplyChange}
          reply={this.state.reply}
        />
      </div>
    );
  }
}

module.exports = Comments;
