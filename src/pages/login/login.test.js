import React from 'react';
import { shallow} from 'enzyme';
import Login from '../login/login';

describe('Login Component', () => {
  //testing rendering of login component
    it('should render without throwing an error', () => {
        expect(shallow(< Login />).exists()).toBe(true)
    })
    //testing the email and password input existence
    it('renders a email input', () => {
        expect(shallow( < Login /> ).find('#outlined-required').length).toEqual(1)
    })
})
describe('Email input', () => {
  //testing email input for Fundoo notes
    it('should respond to change event and change the state of the Login Component', () => {
      const wrapper = shallow( < Login /> );
      wrapper.find('#outlined-required').simulate('change', {
        target: {
          name: 'email',
          value: 'mayurkalekar087@gmail.com'
        }
      });
      expect(wrapper.state('email')).toEqual('mayurkalekar087@gmail.com');
    })
  })
  describe('Password input', () => {
    //testing password input for Fundoo notes
    it('should respond to change event and change the state of the Login Component', () => {
      const wrapper = shallow( < Login /> );
      wrapper.find('#outlined-password')
        .simulate('change', {
          target: {
            name: 'password',
            value: 'Mayur@0025798'
          }
        });
      expect(wrapper.state('password')).toEqual('Mayur@0025798');
    })
  })

//negative test cases for login
describe('Login Component', () => {
  //testing rendering of login component
    it('should render without throwing an error', () => {
        expect(shallow(< Login />).exists()).toBe(true)
    })
    //testing the email and password input existence
    it('renders a email input', () => {
        expect(shallow( < Login /> ).find('#outlined-required').length).toEqual(0)
      })
      it('renders a password input', () => {
        expect(shallow( < Login /> ).find('#outlined-adornment-password').length).toEqual(0)
      })
})
  describe('Email input', () => {
  //testing email input for Fundoo notes
    it('should respond to change event and change the state of the Login Component', () => {
      const wrapper = shallow( < Login /> );
      wrapper.find('#outlined-required').simulate('change', {
        target: {
          name: 'email',
          value: 'mayurkalekar087@gmail.com'
        }
      });
      expect(wrapper.state('email')).toEqual('mayurkalekar087@gmail.com');
    })
  })
  describe('Password input', () => {
    //testing password input for Fundoo notes
    it('should respond to change event and change the state of the Login Component', () => {
      const wrapper = shallow( < Login /> );
      wrapper.find('#outlined-adornment-password')
        .simulate('change', {
          target: {
            name: 'password',
            value: 'vfcvbvg'
          }
        });
      expect(wrapper.state('password')).not.toEqual('fbvg');
    })
  })

  describe('Login Component', () => {
  //testing rendering of login component
    it('should render without throwing an error', () => {
        expect(shallow(< Login />).exists()).toBe(true)
    })
    //testing the email and password input existence
    it('renders a email input', () => {
        expect(shallow( < Login /> ).find('#outlined-required').length).toEqual(0)
      })
      it('renders a password input', () => {
        expect(shallow( < Login /> ).find('#outlined-adornment-password').length).toEqual(0)
      })
})
  describe('Email input', () => {
  //testing email input for Fundoo notes
    it('should respond to change event and change the state of the Login Component', () => {
      const wrapper = shallow( < Login /> );
      wrapper.find('#outlined-required').simulate('change', {
        target: {
          name: 'email',
          value: 'mayurkalekar087@gmail.com'
        }
      });
      expect(wrapper.state('email')).not.toEqual('mayurkalekar087@gmail.com');
    })
  })
  describe('Password input', () => {
    //testing password input for Fundoo notes
    it('should respond to change event and change the state of the Login Component', () => {
      const wrapper = shallow( < Login /> );
      wrapper.find('#outlined-adornment-password')
        .simulate('change', {
          target: {
            name: 'password',
            value: 'vfcvbvg'
          }
        });
      expect(wrapper.state('password')).toEqual('vfcvbvg');
    })
  })