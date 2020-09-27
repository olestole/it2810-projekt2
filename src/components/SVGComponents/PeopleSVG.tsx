import React from 'react';

import { ReactComponent as Man1 } from 'assets/SVG/man1.svg';
import { ReactComponent as Man2 } from 'assets/SVG/man2.svg';
import { ReactComponent as Man3 } from 'assets/SVG/man3.svg';
import { ReactComponent as Man4 } from 'assets/SVG/man4.svg';
import { ReactComponent as Man5 } from 'assets/SVG/man5.svg';
import { ReactComponent as Woman1 } from 'assets/SVG/woman1.svg';
import { ReactComponent as Woman2 } from 'assets/SVG/woman2.svg';
import { ReactComponent as Woman3 } from 'assets/SVG/woman3.svg';
import { ReactComponent as Woman4 } from 'assets/SVG/woman4.svg';

import { SVGUserType } from 'types';

interface PeopleSVGProps {
  type: SVGUserType;
}

const PeopleSVG = ({ type }: PeopleSVGProps) => {
  switch (type) {
    case 'man1':
      return <Man1 />;
    case 'man2':
      return <Man2 />;
    case 'man3':
      return <Man3 />;
    case 'man4':
      return <Man4 />;
    case 'man5':
      return <Man5 />;
    case 'woman1':
      return <Woman1 />;
    case 'woman2':
      return <Woman2 />;
    case 'woman3':
      return <Woman3 />;
    case 'woman4':
      return <Woman4 />;
    default:
      return null;
  }
};

export default PeopleSVG;
