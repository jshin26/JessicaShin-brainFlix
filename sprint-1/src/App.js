import React from 'react';
import { Header } from './Components/Header';
import { MainVideo } from './Components/Main';
import { Description } from './Components/Description';
import { Form } from './Components/Form';
import { Comments } from './Components/Comments';
import { NextVideo } from './Components/Next';

function App() {
  return (
    <div>
      <Header />
      <main>
        <MainVideo />
        <Description />
        <Form />
        <Comments />
      </main>
    </div>
  );
}

export default App;
