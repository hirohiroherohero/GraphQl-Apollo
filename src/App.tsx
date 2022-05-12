import globalStyles from '@assets/css/globalStyle.css';
import { Global } from '@emotion/react';
import 'normalize.css';

const App = () => {
  return (
    <>
      <Global styles={globalStyles} />
    </>
  );
};

export default App;
