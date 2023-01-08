import * as CSS from 'csstype';

declare const durations: {
    animation: number;
    hover: number;
    long: number;
    short: number;
};

declare const ease: {
    readonly inBack: "cubic-bezier(0.6, -0.28, 0.735, 0.045)";
    readonly inCirc: "cubic-bezier(0.6, 0.04, 0.98, 0.335)";
    readonly inCubic: "cubic-bezier(0.55, 0.055, 0.675, 0.19)";
    readonly inExpo: "cubic-bezier(0.95, 0.05, 0.795, 0.035)";
    readonly inOutBack: "cubic-bezier(0.68, -0.55, 0.265, 1.55)";
    readonly inOutCirc: "cubic-bezier(0.785, 0.135, 0.15, 0.86)";
    readonly inOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1)";
    readonly inOutExpo: "cubic-bezier(1, 0, 0, 1)";
    readonly inOutQuad: "cubic-bezier(0.455, 0.03, 0.515, 0.955)";
    readonly inOutQuart: " cubic-bezier(0.77, 0, 0.175, 1)";
    readonly inOutQuint: "cubic-bezier(0.86, 0, 0.07, 1)";
    readonly inOutSine: "cubic-bezier(0.445, 0.05, 0.55, 0.95)";
    readonly inQuad: "cubic-bezier(0.55, 0.085, 0.68, 0.53)";
    readonly inQuart: "cubic-bezier(0.895, 0.03, 0.685, 0.22)";
    readonly inQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)";
    readonly inSine: "cubic-bezier(0.47, 0, 0.745, 0.715)";
    readonly outBack: "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    readonly outCirc: "cubic-bezier(0.075, 0.82, 0.165, 1)";
    readonly outCubic: "cubic-bezier(0.215, 0.61, 0.355, 1)";
    readonly outExpo: "cubic-bezier(0.19, 1, 0.22, 1)";
    readonly outQuad: "cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    readonly outQuart: "cubic-bezier(0.165, 0.84, 0.44, 1)";
    readonly outQuint: "cubic-bezier(0.23, 1, 0.32, 1)";
    readonly outSine: "cubic-bezier(0.39, 0.575, 0.565, 1)";
};

declare const spaceNames: readonly ["mb", "ml", "mr", "mt", "pb", "pl", "pr", "pt"];

type MqBoolAllowedMethods = 'from' | 'upTo';
type RGB = `rgb(${string})`;
type RGBA = `rgba(${string})`;
type HEX = `#${string}`;
type HSL = `hsl(${string})`;
type HSLA = `hsla(${string})`;
type Color = RGB | RGBA | HEX | HSL | HSLA;
type Units = 'rem' | 'em' | 'px' | '%';
type Truthy = boolean | 'true' | 'false';
type InterpolatedStyle = TemplateStringsArray | Function | string[] | string;
type CSSProp = keyof CSS.PropertiesHyphen;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
type BoolPropsFromArray<propsArray extends ReadonlyArray<string>> = Partial<Record<propsArray[number], Truthy>>;
type BoolProps<T extends Object> = Partial<Record<keyof T, Truthy>>;
type StringProps<T extends Object> = Partial<Record<keyof T, string>>;
type MqProp<BPS extends string | number | symbol, T> = Partial<Record<BPS, T>> | T;
type MqBoolProp<BPS> = Partial<Record<MqBoolAllowedMethods, BPS>> | Truthy;
type PropList = XOR<string, {
    [prop: string]: any;
}>;

type Colors = Readonly<{
    [colorCode: string]: Color | Function;
}>;
type FontFamilies = Readonly<{
    [type: string]: string;
}>;
type FontTypography = Readonly<{
    [type: string]: {
        [size: string]: MqProp<string, Readonly<number | number[]>>;
    };
}>;
type FontWeights = Readonly<{
    [weight: string]: number;
}>;
type Fonts = Readonly<{
    families?: FontFamilies;
    typography?: FontTypography;
    weights?: FontWeights;
}>;
type NamedProp = Readonly<XOR<{
    cssProp: CSSProp;
    list: PropList;
    prefix?: string;
    units?: Units;
}, {
    helperFn: Function;
    list: PropList;
    prefix?: string;
    units?: Units;
}>>;
type SpaceProp = Readonly<{
    prop: 'margin' | 'padding';
    list?: PropList;
    units?: Units;
}>;
type VariableProp = Readonly<XOR<{
    cssProp: CSSProp;
    list?: PropList;
    name: string;
    units?: Units;
}, {
    name: string;
    helperFn: Function;
    list?: PropList;
    units?: Units;
}>>;
type ParsedProp = Readonly<XOR<{
    cssProp: CSSProp;
    cssValue?: string | number;
    list?: {
        [key: string]: string | number;
    };
    propValue: any;
    units?: Units;
}, {
    helperFn: Function;
    helperFnArgStr?: string;
    list?: {
        [key: string]: string | number;
    };
    propValue: any;
    units?: Units;
}>>;
type Generator = Readonly<{
    namedProps: ReadonlyArray<NamedProp>;
    spaceProps: ReadonlyArray<SpaceProp>;
    variableProps: ReadonlyArray<VariableProp>;
}>;
type Grid = Readonly<{
    cols?: number;
    gutter?: number;
    margin?: number;
    width?: number;
}>;
type Breakpoints = Readonly<{
    [breakpoint: string]: number;
}>;
type AnimationDurations = Readonly<{
    [duration: string]: number;
}>;
type Theme = Readonly<{
    animationDurations?: AnimationDurations;
    breakpoints?: Breakpoints;
    colors?: Colors;
    fonts?: Fonts;
    generator?: Generator;
    grid?: Grid;
    [otherOptions: string]: any;
}>;
type Variations = Readonly<{
    [variation: string]: any;
}>;

type IndexKeys<T> = Exclude<keyof T, keyof []>;
type ListObjectValidation = {
    prefix?: undefined;
    list: object;
};
type ListObjectWithPrefix = {
    prefix: string;
    list: object;
};
type GetNamesWithPrefix<P> = P extends ListObjectWithPrefix ? keyof P['list'] : never;
type GetListKeys<P> = P extends VariableProp ? keyof P['list'] : never;
type GetPrefixName<P> = P extends {
    prefix: string;
} ? P['prefix'] : never;
type GetVariablePropName<P> = P extends VariableProp ? P['name'] : never;
type GetNamedPropName<P> = P extends {
    prefix: string;
} ? `${GetPrefixName<P>}${Capitalize<string & GetNamesWithPrefix<P>>}` : P extends ListObjectValidation ? keyof P['list'] : never;
type VariableProps<V extends ReadonlyArray<VariableProp>, BPS extends string | number | symbol> = {
    [i in IndexKeys<V> as GetVariablePropName<V[i]>]?: V[i] extends {
        list: object;
    } ? MqProp<BPS, GetListKeys<V[i]>> : MqProp<BPS, string | number>;
};
type NamedProps<N extends ReadonlyArray<NamedProp>, BPS extends string | number | symbol> = {
    [i in IndexKeys<N> as GetNamedPropName<N[i]>]?: MqBoolProp<BPS>;
};
type SpaceProps<BPS extends string | number | symbol> = Partial<Record<typeof spaceNames[number], MqProp<BPS, number | string>>>;
type GeneratorProps<N extends ReadonlyArray<NamedProp>, V extends ReadonlyArray<VariableProp>, BPS extends string | number | symbol> = NamedProps<N, BPS> & SpaceProps<BPS> & VariableProps<V, BPS>;

type VariationProps<V extends Readonly<Variations>, BPS> = {
    [i in keyof V]?: MqBoolProp<BPS>;
};

type Args = {
    [key: string]: any;
    theme?: Theme;
};
declare const generateProps: (args: Args) => string[] | "" | undefined;

type Props = {
    [key: string]: any;
    theme: Theme;
};
declare const mq: {
    between: (breakpoint1: string | number, breakpoint2: string | number, style: any) => (props: Props) => string[];
    from: (breakpoint: string | number, style: any) => (props: Props) => string[];
    upTo: (breakpoint: string | number, style: any) => (props: Props) => string[];
    bp: (breakpoint: string | number, style: any) => (props: Props) => string[] | null;
};

type Duration = string | number;
type Eases = keyof typeof ease;
type TransitionsCSSProps = CSSProp | CSSProp[] | 'all';
declare const transitions: (properties: TransitionsCSSProps, duration: Duration, ease: Eases) => (props: any) => string[];

declare const variations: (variations: Variations) => (props: {
    [prop: string]: any;
}) => any;

export { AnimationDurations, BoolProps, BoolPropsFromArray, Breakpoints, CSSProp, Color, Colors, FontFamilies, FontTypography, FontWeights, Fonts, Generator, GeneratorProps, Grid, InterpolatedStyle, MqBoolProp, MqProp, NamedProp, ParsedProp, PropList, SpaceProp, StringProps, Theme, Truthy, Units, VariableProp, VariationProps, Variations, Without, XOR, durations, ease, generateProps, mq, spaceNames, transitions, variations };
