// @flow
import {renderToString} from 'react-dom/server';
import {
  createPlugin,
  memoize,
  dangerouslySetHTML,
  type FusionPlugin,
  type Context,
} from 'fusion-core';
import {ServerStyleSheet} from 'styled-components';
import type {PluginServiceType} from './types.js';

const plugin =
  __NODE__ &&
  createPlugin({
    provides() {
      class PluginService {
        ctx: Context;
        value: ?string;

        constructor(ctx) {
          this.ctx = ctx;
        }
        getStyleTags() {
          const sheet = new ServerStyleSheet(); // <-- creating out stylesheet

          renderToString(sheet.collectStyles(this.ctx.element)); // <-- collecting styles

          return sheet.getStyleTags(); // <-- getting all the tags from the sheet
        }
      }
      return {
        from: memoize(ctx => new PluginService(ctx)),
      };
    },
    middleware(_, plugin) {
      return async (ctx, next) => {
        if (!ctx.element) return next();

        await next();

        const styleTags = await plugin.from(ctx).getStyleTags();

        ctx.template.head.push(dangerouslySetHTML(styleTags));
      };
    },
  });

export default ((plugin: any): FusionPlugin<empty, PluginServiceType>);
