import { GeneratedProps, VariationProps } from '../theme/types';
import { generateProps, transitions, variations } from '@psoares/styled-utils';
import { mq } from '../theme/mq';
import React from 'react';
import styled, { css } from 'styled-components';

const testVariations = {
  default: css`
    margin-left: 4rem;
  `,

  pushIt: css`
    margin-left: 10rem;
  `
} as const;

type TestVariations = VariationProps<typeof testVariations>;

const Div = styled.div<GeneratedProps & TestVariations>`
  ${transitions('all', 'animation', 'inOutBack')};

  ${variations(testVariations)};
  ${generateProps}
`;

export const Example = () => {
  return (
    <Div b07 bgN02 flex="center" ml={3} mt={{ sm: 2 }} sz={4}>
      <span>Test</span>
    </Div>
  );
};
