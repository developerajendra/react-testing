import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';


Enzyme.configure({adapter: new EnzymeAdapter()});

// test('renders learn react link', () => {
//   // const { getByText } = render(<App />);
//   // const linkElement = getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();

//   const wrapper = shallow(<App/>);
//   // console.log(wrapper.debug());

//   expect(wrapper).toBeTruthy();
//   // expect(wrapper).toBeFalsy();
 

// });


test('renders without error',()=>{
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1)
});

test('renders ncrement button', ()=>{

});

test('renders counter display',()=>{

});

test('counter starts at 0',()=>{

});

test('clicking button increments counter display',()=>{

});