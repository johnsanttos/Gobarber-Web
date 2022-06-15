import React, { ReactNode } from 'react';

import { Container } from './styles';

type TooltipProps = {
  title: string;
  className?: string;
  children: ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ title,
     className ='',
     children 
    }) => (
  <Container className={className}>
    {children}
    <span>{title}</span>
  </Container>
);