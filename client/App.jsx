import React, { useEffect, useState } from 'react';
import MainContainer from './containers/MainContainer.js';

const App = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(`/api`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);

  return (
    <div id='app'>
      <h1
        style={{
          display: 'flex',
          justifyContent: 'center',
          fontSize: '40px',
        }}
      >
        Hello World! Let's buy some stocks!
      </h1>
      <MainContainer data={data} />
    </div>
  );
};

export default App;
