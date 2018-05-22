import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  // shallow only has outer most element of child components show up
  // Gifts outer element... so all we can do is check to see if its there or not.
  const app = shallow(<App />);

  // creates snapshot of app to compare new rendering to each time
  // u in cl updates to new snapshot
  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  })
  // get at app staet with .state()
  it('inits the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([])
  });

  describe('when clicking the add gift button', () => {

    const id = 1;
    // runs before each i nested with in the describe
    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });
    // runs after each it within the describe prevening
    // test polution
    afterEach(() => {
      app.setState({ gifts: [] })
    })

    it('adds a new gift `state`', () => {
      expect(app.state().gifts).toEqual([{ id }]);
    });

    it('adds a new gift to the renderd list', () => {
      expect(app.find('.gift-list').children().length).toEqual(id);
    });

    it('creates a gift componenet', () => {
      expect(app.find('Gift').exists()).toBe(true);
    })

    describe('and the user want to remove the added gift', () => {
      // .instance() gives access to functions declared within component
      beforeEach(() => {
        app.instance().removeGift(id);
      })

      it('removes the gift from state', () => {
        expect(app.state().gifts).toEqual([]);
      })
    })
  });

  describe('when calling remove gift button', () => {
    it(' returns correct max when older gifts have been removed', () => {
      // setState({}) does what you think it does to the shallowly 
      // rendered component
      app.setState({ gifts: [{ id: 1 }, { id: 3 }, { id: 8 }] });
      app.instance().addGift();
      expect(app.state().gifts).toEqual([{ id: 1 }, { id: 3 }, { id: 8 }, { id: 9 }])
    });

    it(' returns correct max when imposible order occurs', () => {
      app.setState({ gifts: [{ id: 100 }, { id: 3 }, { id: 8 }] });
      app.instance().addGift();
      expect(app.state().gifts).toEqual([{ id: 100 }, { id: 3 }, { id: 8 }, { id: 101 }])

    })
  })

});