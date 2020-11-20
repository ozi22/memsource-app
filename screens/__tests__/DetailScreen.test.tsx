import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import DetailScreen from '../DetailScreen';

describe('DetailScreen', () => {
  it('should render correctly', () => {
    const { toJSON } = renderer.create(
      <Provider store={store}>
        <DetailScreen />
      </Provider>
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
