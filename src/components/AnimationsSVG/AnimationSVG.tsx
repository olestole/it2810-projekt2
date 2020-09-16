import React from 'react';

import { ReactComponent as Cloud } from 'components/SVG/cloud.svg';
import { ReactComponent as Stars } from 'components/SVG/stars.svg';
import { ReactComponent as Sun } from 'components/SVG/sun.svg';

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
