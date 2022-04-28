import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import AppWithRouterAccess from './AppWithRouterAccess';
//Components
// import Header from './components/header/Header'
// import Home from './components/home/Home'
// import DetailView from './components/post/DetailView'
// import CreateView from './components/post/CreateView'
// import UpdateView from './components/post/UpdateView'

function App() {
  return (
    <BrowserRouter>
    <AppWithRouterAccess />
      {/* <Header />
      <Box style={{marginTop: 79}}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/details/:id' component={DetailView} />
          <Route exact path='/create' component={CreateView} />
          <Route exact path='/update/:id' component={UpdateView} />
        </Switch>
      </Box> */}
    </BrowserRouter>
  );
}

export default App;
