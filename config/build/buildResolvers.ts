import { Configuration } from 'webpack';
import { BuildOptions } from './types/types';

export function buildResolvers(
  options: BuildOptions
): Configuration['resolve'] {
  return {
    extensions: ['.tsx', '.ts', '.js'], // resolves extension when importing ex: import abc from './test.tsx` ==> now write './test' without extension. webpack will resolve the extension for you
    // first try to resolve with .tsx ext, then with .ts, then with .js extension
  };
}
