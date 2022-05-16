import globalStyles from '@assets/css/globalStyle.css';
import { Global } from '@emotion/react';
import Home from '@pages/Home';
import 'normalize.css';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
