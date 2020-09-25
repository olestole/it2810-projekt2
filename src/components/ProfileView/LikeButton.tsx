import React, { Component } from 'react';
import './likeButton.css';

interface Likefunction {
  like: () => void;
}

export default class LikeButton extends Component<Likefunction> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <button id="likeButton" onClick={this.props.like}>
        Like
      </button>
    );
  }
}
