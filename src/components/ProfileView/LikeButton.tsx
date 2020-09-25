import React, { Component } from 'react';
<<<<<<< HEAD
import './likeButton.css';
=======
>>>>>>> 215f004c36727aabd43c0979fa02186380f5dd2a

interface Likefunction {
  like: () => void;
}

export default class LikeButton extends Component<Likefunction> {
  constructor(props: any) {
    super(props);
  }

  render() {
<<<<<<< HEAD
    return (
      <button id="likeButton" onClick={this.props.like}>
        Like
      </button>
    );
=======
    return <button onClick={this.props.like}>Like</button>;
>>>>>>> 215f004c36727aabd43c0979fa02186380f5dd2a
  }
}
