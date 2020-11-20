import React from 'react';
import renderer from 'react-test-renderer';
import ProjectItems from '../ProjectItems';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

jest.mock('@react-navigation/native');

describe('ProjectItems', () => {
  it('should render correctly', () => {
    const { toJSON } = renderer.create(
      <Provider store={store}>
        <ProjectItems />
      </Provider>
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
