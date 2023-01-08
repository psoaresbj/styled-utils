import { VariationProps as BaseVariationProps, GeneratorProps, Variations } from '@psoares/styled-utils';
import { breakpoints } from './breakpoints';
import { generator } from './generator';

// Create types for your components

export type GeneratedProps = GeneratorProps<
  typeof generator.namedProps,
  typeof generator.variableProps,
  keyof typeof breakpoints
>;

export type VariationProps<T extends Variations> = BaseVariationProps<T, keyof typeof breakpoints>;
