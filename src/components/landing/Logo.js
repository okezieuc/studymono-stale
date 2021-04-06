import React from 'react';
import { Image, } from '@chakra-ui/react';

export const Logo = props => (
  <Image
    src={ props.image || "/white-logo.svg" }
    {...props}
  />
);
