import globalStyles from '@assets/css/globalStyle.css';
import { Global } from '@emotion/react';
import Detail from '@pages/Detail';
import Home from '@pages/Home';
import 'normalize.css';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </>
  );
};

export default App;
