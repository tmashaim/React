import React from 'react';
import {SvgXml} from 'react-native-svg';

const HiddenEye = ({height, width, color}) => {
  const defaultColor = color ? color : 'white';
  const defaultHeight = height ? height : 14;
  const defaultWidth = width ? width : 14;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.0955 17.9608C11.3879 17.9865 11.6893 18 12 18C16.909 18 21 12 21 12C21 12 20.3303 11.0179 19.2078 9.84839L11.0955 17.9608Z" fill="#979797"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5051 6.49485C13.7076 6.18695 12.8665 6 12 6C5.45455 6 3 12 3 12C3 12 3.75006 13.8335 5.52661 15.4734L9 12C9 10.3431 10.3431 9 12 9L14.5051 6.49485Z" fill="#979797"/>
<rect opacity="0.3" x="5.1001" y="18.4351" width="19" height="2" transform="rotate(-45 5.1001 18.4351)" fill="#979797"/>
</svg>

`}
    />
  );
};

export default HiddenEye;