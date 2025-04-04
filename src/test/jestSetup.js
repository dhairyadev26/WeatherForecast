import "babel-polyfill";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-19";

Enzyme.configure({ adapter: new Adapter() });