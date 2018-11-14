// @flow
/* eslint-env browser */

import {type FusionPlugin, createPlugin} from 'fusion-core';
import type {PluginServiceType} from './types.js';

const plugin = createPlugin({
  provides() {
    return {};
  }
});

export default ((plugin: any): FusionPlugin<empty, PluginServiceType>);
