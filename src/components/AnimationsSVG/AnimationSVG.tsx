import React from 'react';

import { ReactComponent as Cloud } from 'components/SVG/cloud.svg';
import { ReactComponent as Stars } from 'components/SVG/stars.svg';

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
    default:
      return null;
  }
};

export default AnimationSVG;
