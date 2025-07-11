import React from 'react';
import Login from './Login';
import Protected from './Protected';
import Logout from './Logout';

function App() {
  return (
    <div>
      <h1>JWT Expiry Demo</h1>
      <Login />
      <Protected />
      <Logout />
    </div>
  );
}

export default App;
