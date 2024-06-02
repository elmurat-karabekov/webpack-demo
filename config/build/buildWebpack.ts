import { Configuration } from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/types';

export function buildWebpack(options: BuildOptions): Configuration {
  const { mode, paths } = options; // object decomposition

  const isDev = mode === 'development';

  return {
    mode: mode ?? 'development',
    entry: {
      index: paths.entry,
    },
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js', // unique hash depending on content => files with same content have same hash
      clean: true,
    },
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    plugins: buildPlugins(options),
    devtool: isDev && 'inline-source-map',
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
