import ResetCss from '@assets/css/reset.css';
import Header from '@components/Header';
import { Global } from '@emotion/react';
import Detail from '@pages/Detail';
import Main from '@pages/Main';
import 'normalize.css';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Global styles={ResetCss} />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </>
  );
};

export default App;
