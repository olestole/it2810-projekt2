import React, { Component } from 'react';
import 'components/main.css';

interface LikeButtonProps {
  like: () => void;
}

export default class LikeButton extends Component<LikeButtonProps> {
  constructor(props: LikeButtonProps) {
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
