import { CSSProp } from '../types';
import { durations } from '../constants/durations';
import { ease as eases } from '../constants/ease';
import css from '../helpers/css';

type Duration = string | number;
type Eases = keyof typeof eases;
type TransitionsCSSProps = CSSProp | CSSProp[] | 'all';

const defaultDuration = 500;

const transition = (
  props: any,
  { property, duration, ease }: { duration: Duration; ease: Eases; property: TransitionsCSSProps }
) => {
  const themeDurations = props?.theme?.animationDurations || props?.theme?.durations || {};
  const durationObject = { ...durations, ...themeDurations };
  const themeEases = props?.theme?.ease || {};
  const easeLib = { ...eases, themeEases };
  const durationVal = durationObject[duration] || duration || defaultDuration;

  return `${property || 'all'} ${typeof durationVal === 'number' ? `${durationVal}ms` : durationVal} ${
    easeLib[ease] || ease
  }`;
};

const setTransitions = (
  props: any,
  { properties, duration, ease }: { duration: Duration; ease: Eases; properties: TransitionsCSSProps }
) =>
  Array.isArray(properties)
    ? properties.map(property => transition(props, { duration, ease, property })).join(', ')
    : transition(props, { duration, ease, property: properties });

export const transitions = (properties: TransitionsCSSProps, duration: Duration, ease: Eases) => (props: any) =>
  css`
    transition: ${setTransitions(props, { duration, ease, properties })};
  `;
