import "babel-polyfill";
import Enzyme from "enzyme";
import Adapter from "e-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });