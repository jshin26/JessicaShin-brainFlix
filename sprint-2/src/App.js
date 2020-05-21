import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Upload from './pages/Upload/Upload';



function App() {

  return (
      
      <div>
        <Header />

        <Switch>          
          <Route exact path="/" component={Main} />
          <Route path="/upload" component={Upload} />
          <Route path="/:id" component={Main} />

        </Switch>
      </div>
  );
}


export default App;
