import React from 'react';

import { Container } from './styles';

interface Props {
  pokemon: string;
}

const Logo: React.FC<Props> = ({ pokemon }) => <Container>{pokemon}</Container>;

export default Logo;
