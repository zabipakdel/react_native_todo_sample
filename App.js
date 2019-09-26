import React from 'react';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
import RootStack from './src/router';
// import reducer from './src/Redux/reducers';
// import reducer from './src/Redux/reducers';
import storeCreate from './src/Redux/persist';
import { PersistGate } from 'redux-persist/integration/react';
console.disableYellowBox = true;
const store = storeCreate();
console.log(store);
// seeker
const logger = store => next => action => {
  console.log('PREV STATE ==>', store.getState());
  console.log(action);
  next(action);
  console.log('NEXT STATE ==>', store.getState());
};

// const store = createStore(reducer); //, applyMiddleware(logger));

const App = () => {
  console.log();
  const { persistor } = store;
  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootStack />
      </PersistGate>
    </Provider>
  );
};

export default App;
