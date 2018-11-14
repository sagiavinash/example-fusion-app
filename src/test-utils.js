// @flow
import Enzyme, {mount} from 'enzyme';
import {renderToStaticMarkup} from 'react-dom/server';
import Adapter from 'enzyme-adapter-react-16';
import getApp from './main';

Enzyme.configure({adapter: new Adapter()});

export default async function start({root}: * = {}) {
  const app =  await getApp({
    render: __NODE__ ? renderToStaticMarkup : mount,
    root,
  });

  return app;
}
