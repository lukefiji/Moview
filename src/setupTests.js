// requestAnimoationFrame polyfill shim
import requestAnimationFrame from './polyfills';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
