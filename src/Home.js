import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import Contact from './contact';
import ContactList from './ContactList'

const Home = ({id, updateSelectedContact, contacts, routerProps}) => (

  <Switch>

    <Route path='/contacts/:id' render={(routerProps) => (
      <Contact routerProps={routerProps} contacts={contacts} updateSelectedContact={updateSelectedContact}/>
    )}/>

    <Route path='/contacts' render={(routerProps) => (
      <ContactList routerProps={routerProps} contacts={contacts} updateSelectedContact={updateSelectedContact}/>
    )}/>

  </Switch>
)

export default Home
