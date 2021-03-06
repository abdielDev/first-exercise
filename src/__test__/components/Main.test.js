import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Main from '../../components/Main';

describe('<Main />', () => {
  const main = shallow(<Main />);
  test('Render del componente Main', () => {
    expect(main.length).toEqual(1);
  });
});

describe('Main Snapshot', () => {
  test('Comprobar la UI del componente Main', () => {
    const main = create(<Main />);
    expect(main.toJSON()).toMatchSnapshot();
  });
});