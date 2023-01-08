import { Variations } from '../types';
import { mq } from './mq';
import css from '../helpers/css';

export const variations = (variations: Variations) => (props: { [prop: string]: any }) => {
  const variationName = Object.keys(variations).find(variation => !!props[variation]);

  if (!variationName) {
    return variations?.default || null;
  }

  const propValue = props[variationName];
  const style = variations[variationName];

  if (typeof propValue === 'boolean' && !!propValue) {
    return style;
  }

  if (typeof propValue === 'object') {
    const methods = Object.entries(propValue as object).reduce(
      (methodsResult: any[], [key, value]) =>
        key === 'from' || key === 'upTo' ? [...methodsResult, [key, value]] : methodsResult,
      []
    );

    if (methods.length) {
      return css`
        ${variations?.default || null};

        ${methods.map(([method, breakpoint]) => mq[method as 'from' | 'upTo'](breakpoint, style))};
      `;
    }
  }

  return variations?.default || null;
};
