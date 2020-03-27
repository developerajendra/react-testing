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

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function  setup 
 * @param {object} props - Component props specific to this setup.
 * @param {object}  state  - Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props} />);
  if(state) wrapper.setState(state);
  return wrapper;
}

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {String} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val)=>{
  return wrapper.find(`[data-test='${val}']`);
}

test('renders without error',()=>{
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1)
});



test('renders counter display',()=>{
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1)
});

test('counter starts at 0',()=>{
  const wrapper = setup();
   const initialCounterState  = wrapper.state('counter');
   expect(initialCounterState).toBe(0);
});


//Increment
describe('Increment',()=>{
  test('renders increment button', ()=>{
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'increnment-button'); 
    expect(button.length).toBe(1)
  });

  test('clicking button increments counter display',()=>{
    const counter = 5;
    const wrapper = setup(null, {counter});

    //find button and click
    const button = findByTestAttr(wrapper, 'increnment-button');
    button.simulate('click');

    //find display and test value
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.text()).toContain(counter+1);
  });
})




test('set error message boolean initial state',()=>{
  const wrapper = setup();
  const isErrorState = wrapper.state('isError');
  expect(isErrorState).toBe(false);
});

describe('Decrement', () => {

  test('renders decrement button', ()=>{
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'decrement-button'); 
    expect(button.length).toBe(1)
  });

  test('clicking button decrement counter display', ()=>{

    const counter = 5;
    const wrapper = setup(null, {counter});
  
    //Find button and click 
    const button = findByTestAttr(wrapper,'decrement-button');
    button.simulate('click');
    wrapper.update();

    //Find display and test value
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.text()).toContain(counter-1);
  
  });


  //Make sure error doesn't show by default
  test('error does not show when not needed',()=>{
    const wrapper = setup();

    const errorElem = findByTestAttr(wrapper, 'error-message');
    const hasErrorClass = errorElem.hasClass('hidden');
    expect(hasErrorClass).toBe(true);
  });



  describe('Counter is 0 and decrement is clicked',()=>{
     // using a describe here so I can use a "beforeEach" for shared setup
     let wrapper
     beforeEach(()=>{
        wrapper = setup()
        //find button and click 
        const button = findByTestAttr(wrapper,'decrement-button');
        button.simulate('click');
        wrapper.update();
     });

     test('show errors', ()=>{
      const errorElem = findByTestAttr(wrapper, 'error-message');
      const hasErrorClass = errorElem.hasClass('hidden');
      expect(hasErrorClass).toBe(false);
     })

     test('counter still display 0',()=>{
      const counterDisplay = findByTestAttr(wrapper, 'counter-display');
      expect(counterDisplay.text()).toContain(0);
     });

     test('clicking increment clears the error', ()=>{
        const button = findByTestAttr(wrapper, 'increnment-button');
        button.simulate('click');

        const errorElem = findByTestAttr(wrapper, 'error-message');
        const hasErrorClass = errorElem.hasClass('hidden');
        expect(hasErrorClass).toBe(true);
     });
  });  
});