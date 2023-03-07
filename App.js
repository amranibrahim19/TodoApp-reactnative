import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/Store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} />
    </Provider>
  );
};

export default App;

