import React from 'react';
import { Header } from './Components/Header/Header';
import { MainVideo } from './Components/MainVideo/MainVideo';
import { Description } from './Components/Description/Description';
import { Form } from './Components/Form/Form';
import { Comments } from './Components/Comments/Comments';
import { SideVideo } from './Components/SideVideo/SideVideo';

function App() {
  return (
    <div>
      <Header />
      <main>
        <MainVideo />
        <Description />
        <Form />
        <Comments />
        <SideVideo />
      </main>
    </div>
  );
}

export default App;
