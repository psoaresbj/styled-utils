import { Theme } from '../types';
import { applyParsedProps } from '../helpers/applyParsedProps';
import { parseNamedProps } from '../helpers/parseNamedProps';
import { parseSpaceProps } from '../helpers/parseSpaceProps';
import { parseVariableProps } from '../helpers/parseVariableProps';

type Args = {
  [key: string]: any;
  theme?: Theme;
};

export const generateProps = (args: Args) => {
  try {
    delete args.children;
    const { theme, ...props } = args;
    const generator = args?.theme?.generator;

    if (!Object.keys(props).length || typeof props !== 'object' || !generator) {
      return;
    }

    const parsedProps = [
      ...parseNamedProps(theme, props),
      ...parseSpaceProps(theme, props),
      ...parseVariableProps(theme, props)
    ];

    return applyParsedProps(parsedProps, theme);
  } catch (error) {
    console.log(error);

    return '';
  }
};
