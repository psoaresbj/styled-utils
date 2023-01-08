import { MqBoolProp } from './helpers';
import { Variations } from './main';

export type VariationProps<V extends Readonly<Variations>, BPS> = {
  [i in keyof V]?: MqBoolProp<BPS>;
};
