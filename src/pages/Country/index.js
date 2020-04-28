import React from 'react';
import {Route, Switch} from 'react-router-dom';
import List from './List';
import Edit from './Edit';


const Country = ({match: {path}}) => (
    <Switch>
        <Route path = {`${path}/new`} strict component ={Edit} />
        <Route path = {`${path}/:id`} stric component = {Edit}/>
        <Route path = {`${path}/`}  component = {List}/>
     </Switch>
)

export default Country;