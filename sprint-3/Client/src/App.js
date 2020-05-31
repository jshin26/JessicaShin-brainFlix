import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Upload from './pages/Upload/Upload';



function App() {

  return (
    <BrowserRouter>

      <Header />
      
      <Switch>          
        <Route path="/" exact component={Main} />
        <Route path="/upload" exact component={Upload} />
        <Route path="/:id" exact component={Main} />
      </Switch>

    </BrowserRouter>
  );
}


export default App;
