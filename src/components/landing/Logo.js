import React from 'react';
import { Image as ChakraImage, } from '@chakra-ui/react';

export const Logo = props => (
  <ChakraImage
    src={ props.image || "/white-logo.svg" }
    {...props}
  />
);
