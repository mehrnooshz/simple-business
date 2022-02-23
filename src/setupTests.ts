import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// https://www.npmjs.com/package/enzyme-adapter-react-16
// Configure enzyme to use the adapter you want it to use
configure({ adapter: new Adapter() });
