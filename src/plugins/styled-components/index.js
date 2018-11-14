// @flow
import browserPlugin from './browser';
import serverPlugin from './server';

export {default as styled} from 'styled-components';
export default (__NODE__ ? serverPlugin : browserPlugin);
