import React from 'react';
import { Header } from './Components/Header/Header';
import { MainVideo } from './Components/MainVideo/MainVideo';
import { SideVideo } from './Components/SideVideo/SideVideo';

function App() {
  return (
    <div>
      <Header />
      <main>
        <MainVideo />
        <SideVideo />
      </main>
    </div>
  );
}

export default App;
