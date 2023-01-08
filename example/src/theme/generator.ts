/* eslint-disable no-nested-ternary */
import { Generator } from '@psoares/styled-utils';
import { colors } from './colors';
import { css } from 'styled-components';
import { fonts } from './fonts';

const setSize = (h: any, w: any) => css`
  height: ${h};
  width: ${w || h};
`;

const flexHelper = (vAlign = 'start', hAlign = 'start', direction = 'row', inline = false) => css`
  align-items: ${direction === 'row' || direction === 'row-reverse'
    ? vAlign === 'center'
      ? 'center'
      : `flex-${vAlign}`
    : hAlign === 'center'
    ? 'center'
    : `flex-${hAlign}`};
  display: ${inline ? 'inline-flex' : 'flex'};
  flex-direction: ${direction};
  justify-content: ${direction === 'row' || direction === 'row-reverse'
    ? hAlign === 'center'
      ? 'center'
      : `flex-${hAlign}`
    : vAlign === 'center'
    ? 'center'
    : `flex-${vAlign}`};
`;

const flexHelperList = { center: 'center center', centerLeft: 'center start', centerRight: 'center end' };

export const generator = {
  namedProps: [
    { cssProp: 'background-color', list: colors, prefix: 'bg' },
    { cssProp: 'font-weight', list: fonts.weights },
    { cssProp: 'color', list: colors },
    { cssProp: 'text-align', list: { center: 'center', left: 'left', right: 'right' } },
    { helperFn: flexHelper, list: flexHelperList, prefix: 'flex' }
  ],

  spaceProps: [
    { prop: 'padding', units: 'rem' },
    { prop: 'margin', units: 'rem' }
  ],

  variableProps: [
    { cssProp: 'display', list: { nonVisible: 'none', visible: 'flex' }, name: 'isVisible' },
    { cssProp: 'opacity', name: 'alpha' },
    { helperFn: setSize, name: 'sz', units: 'rem' },
    { helperFn: flexHelper, list: flexHelperList, name: 'flex' }
  ]
} as const satisfies Generator;
