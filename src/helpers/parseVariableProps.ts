import { ParsedProp, Theme, VariableProp } from '../types';
import { getList } from './getList';

export const parseVariableProps = (theme?: Theme, props?: { [key: string]: any }): ParsedProp[] => {
  if (!theme || !props) {
    return [];
  }

  const propKeys = Object.keys(props || {});

  return (theme?.generator?.variableProps || []).reduce((result: ParsedProp[], variableProp: VariableProp) => {
    const list = getList(variableProp?.list, theme) as { [key: string]: string | number };
    const { cssProp, helperFn, name, units } = variableProp;

    if (!propKeys.includes(name)) {
      return result;
    }

    if (!!helperFn) {
      return [
        ...result,
        {
          helperFn,
          list,
          propValue: props[name],
          units
        }
      ];
    }

    return [
      ...result,
      {
        cssProp,
        list,
        propValue: props[name],
        units
      }
    ];
  }, []);
};
