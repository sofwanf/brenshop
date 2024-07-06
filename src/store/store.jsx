import { createStore, combineReducers } from 'redux';
import reducer from './reducers';

const rootReducer = combineReducers({
  app: reducer, // Ganti 'app' dengan nama slice sesuai kebutuhan aplikasi Anda
  // Jika Anda memiliki reducer tambahan, tambahkan di sini
});

const store = createStore(rootReducer);

export default store;
