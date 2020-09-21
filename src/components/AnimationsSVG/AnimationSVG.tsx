import React from 'react';

import { ReactComponent as Cloud } from 'assets/SVG/cloud.svg';
import { ReactComponent as Stars } from 'assets/SVG/stars.svg';
import { ReactComponent as Sun } from 'assets/SVG/sun.svg';

import { AnimationType } from 'types';

interface AnimationSVGProps {
  type: AnimationType;
}

const AnimationSVG = ({ type }: AnimationSVGProps) => {
  switch (type) {
    case 'cloud':
      return <Cloud />;
    case 'stars':
      return <Stars />;
    case 'sun':
      return <Sun />;
    default:
      return null;
  }
};

export default AnimationSVG;
