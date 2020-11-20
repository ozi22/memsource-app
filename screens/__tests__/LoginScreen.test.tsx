import React from 'react';
import renderer from 'react-test-renderer';
import LoginScreen from '../LoginScreen';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

describe('LoginScreen', () => {
  it('should match snapshot', () => {
    const { toJSON } = renderer.create(
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
