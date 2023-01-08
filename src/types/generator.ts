import { MqBoolProp, MqProp } from './helpers';
import { NamedProp, VariableProp } from './main';
import { spaceNames } from '../constants/spaceNames';

type IndexKeys<T> = Exclude<keyof T, keyof []>;
type ListObjectValidation = { prefix?: undefined; list: object };
type ListObjectWithPrefix = { prefix: string; list: object };
type GetNamesWithPrefix<P> = P extends ListObjectWithPrefix ? keyof P['list'] : never;
type GetListKeys<P> = P extends VariableProp ? keyof P['list'] : never;
type GetPrefixName<P> = P extends { prefix: string } ? P['prefix'] : never;

type GetVariablePropName<P> = P extends VariableProp ? P['name'] : never;
type GetNamedPropName<P> = P extends { prefix: string }
  ? `${GetPrefixName<P>}${Capitalize<string & GetNamesWithPrefix<P>>}`
  : P extends ListObjectValidation
  ? keyof P['list']
  : never;

type VariableProps<V extends ReadonlyArray<VariableProp>, BPS extends string | number | symbol> = {
  [i in IndexKeys<V> as GetVariablePropName<V[i]>]?: V[i] extends { list: object }
    ? MqProp<BPS, GetListKeys<V[i]>>
    : MqProp<BPS, string | number>;
};

type NamedProps<N extends ReadonlyArray<NamedProp>, BPS extends string | number | symbol> = {
  [i in IndexKeys<N> as GetNamedPropName<N[i]>]?: MqBoolProp<BPS>;
};

type SpaceProps<BPS extends string | number | symbol> = Partial<
  Record<typeof spaceNames[number], MqProp<BPS, number | string>>
>;

export type GeneratorProps<
  N extends ReadonlyArray<NamedProp>,
  V extends ReadonlyArray<VariableProp>,
  BPS extends string | number | symbol
> = NamedProps<N, BPS> & SpaceProps<BPS> & VariableProps<V, BPS>;
