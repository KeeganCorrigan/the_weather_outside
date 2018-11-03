import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import AboutCard from './aboutCard';
import AboutButton from './aboutButton';
import App from './App';
import DarkSkyButton from './darkSkyButton';
import DarkSkyCard from './darkSkyCard';
import NavBar from './navbar';
import SimpleBottomNavigation from './simpleBottomNavigation';
import SimpleCard from './simpleCard';
import Gif from './gif';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

describe('NavBar', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Gif', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Gif />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('SimpleBottomNavigation', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SimpleBottomNavigation />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('SimpleCard', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SimpleCard />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('AboutCard', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AboutCard />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('DarkSkyCard', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<DarkSkyCard />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('DarkSkyButton', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<DarkSkyButton />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('AboutButton', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AboutButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
