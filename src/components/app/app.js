import React from 'react'
// import ErrorBtn from '../error-btn/error-btn';
import Header from '../header';
import { Route, Switch } from 'react-router';
import { HomePage, CartPage } from '../pages';



const App =   () => {
  return (
    <main role="main" className='container'>
      <Header/>
      {/* <ErrorBtn/> */}

      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/cartpage/'component={CartPage}/>
      </Switch>
    </main>
  )
};

export default App;