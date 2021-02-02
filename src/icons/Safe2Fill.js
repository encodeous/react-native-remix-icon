import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSafe2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M10 20H6v2H4v-2H3a1 1 0 01-1-1V4a1 1 0 011-1h7V1.59a.5.5 0 01.582-.493l10.582 1.764a1 1 0 01.836.986V6h1v2h-1v7h1v2h-1v2.153a1 1 0 01-.836.986L20 20.333V22h-2v-1.333l-7.418 1.236A.5.5 0 0110 21.41V20zm2-.36l8-1.334V4.694l-8-1.333v16.278zM16.5 14c-.828 0-1.5-1.12-1.5-2.5S15.672 9 16.5 9s1.5 1.12 1.5 2.5-.672 2.5-1.5 2.5z" />
    </Svg>
  );
}

export default SvgSafe2Fill;