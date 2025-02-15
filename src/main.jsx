import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import  {store}  from './redux/store/store';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <>
      <Toaster />
      <App />
    </>
  </Provider>
);
