import { CSSProp, Color, MqProp, PropList, Units, XOR } from './helpers';

// main types
export type Colors = Readonly<{
  [colorCode: string]: Color | Function;
}>;

export type FontFamilies = Readonly<{ [type: string]: string }>;

export type FontTypography = Readonly<{
  [type: string]: {
    [size: string]: MqProp<string, Readonly<number | number[]>>;
  };
}>;

export type FontWeights = Readonly<{ [weight: string]: number }>;

export type Fonts = Readonly<{
  families?: FontFamilies;
  typography?: FontTypography;
  weights?: FontWeights;
}>;

export type NamedProp = Readonly<
  XOR<
    {
      cssProp: CSSProp;
      list: PropList;
      prefix?: string;
      units?: Units;
    },
    {
      helperFn: Function;
      list: PropList;
      prefix?: string;
      units?: Units;
    }
  >
>;

export type SpaceProp = Readonly<{
  prop: 'margin' | 'padding';
  list?: PropList;
  units?: Units;
}>;

export type VariableProp = Readonly<
  XOR<
    {
      cssProp: CSSProp;
      list?: PropList;
      name: string;
      units?: Units;
    },
    {
      name: string;
      helperFn: Function;
      list?: PropList;
      units?: Units;
    }
  >
>;

export type ParsedProp = Readonly<
  XOR<
    {
      cssProp: CSSProp;
      cssValue?: string | number;
      list?: { [key: string]: string | number };
      propValue: any;
      units?: Units;
    },
    {
      helperFn: Function;
      helperFnArgStr?: string;
      list?: { [key: string]: string | number };
      propValue: any;
      units?: Units;
    }
  >
>;

export type Generator = Readonly<{
  namedProps: ReadonlyArray<NamedProp>;
  spaceProps: ReadonlyArray<SpaceProp>;
  variableProps: ReadonlyArray<VariableProp>;
}>;

export type Grid = Readonly<{
  cols?: number;
  gutter?: number;
  margin?: number;
  width?: number;
}>;

export type Breakpoints = Readonly<{
  [breakpoint: string]: number;
}>;

export type AnimationDurations = Readonly<{
  [duration: string]: number;
}>;

export type Theme = Readonly<{
  animationDurations?: AnimationDurations;
  breakpoints?: Breakpoints;
  colors?: Colors;
  fonts?: Fonts;
  generator?: Generator;
  grid?: Grid;

  [otherOptions: string]: any;
}>;

export type Variations = Readonly<{
  [variation: string]: any;
}>;
