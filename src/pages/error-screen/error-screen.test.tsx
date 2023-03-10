import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import ErrorScreen from './error-screen';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Component: ErrorScreen', () => {

  it('should render correctly', () => {
    const store = mockStore({});
    render(
      <Provider store={store}>
        <ErrorScreen />
      </Provider>
    );

    expect(screen.getByText(/Failed to load data from server, please try again later!/i)).toBeInTheDocument();

  });
});
