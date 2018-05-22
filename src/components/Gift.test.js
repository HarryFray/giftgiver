import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift';

describe('Gift', () => {
  //creates fake function to ensure one is being fired
  const mockRemove = jest.fn();
  const id = 1;
  const props = { gift: { id }, removeGift: mockRemove };

  const gift = shallow(<Gift {...props} />);

  it('renders correctly', () => {
    expect(gift).toMatchSnapshot();
  })

  it('inits a person and present in state', () => {
    expect(gift.state()).toEqual({ person: '', present: '' });
  });

  describe('when typing into the person input', () => {
    const person = 'Uncle';

    beforeEach(() => {
      gift.find('.input-person')
        // on change event comes through with target of 'Uncle'
        .simulate('change', { target: { value: person } })
    })

    afterEach(() => {
      gift.setState({ person: '', present: '' });
    })

    it('updates the person in state', () => {
      expect(gift.state().person).toEqual(person);
    })

  });

  describe('when typing into the present input', () => {
    const present = 'Golf Clubs';

    beforeEach(() => {
      gift.find('.input-present')
        .simulate('change', { target: { value: present } })
    })

    afterEach(() => {
      gift.setState({ present: '', present: '' });
    })

    it('updates the present in state', () => {
      expect(gift.state().present).toEqual(present);
    })

  })

  describe('when clicking the remove gift button', () => {
    beforeEach(() => {
      gift.find('.btn-remove').simulate('click');
    })

    it('calls the removeGift CB', () => {
      expect(mockRemove).toHaveBeenCalledWith(id);
    })
  })
});