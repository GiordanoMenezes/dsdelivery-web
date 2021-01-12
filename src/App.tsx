import './App.css';
import { ToastContainer } from 'react-toastify';

import Routes from './Routes';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div>
        <Routes />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
