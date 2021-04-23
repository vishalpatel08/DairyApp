import React from 'react'
import { theme, ThemeProvider } from '@chakra-ui/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Frontpage from './rw3/index'
import NewUser from './rw3/AddUser'
import Eh from './rw3/eventhandler'
import UserData from './rw3/UserData'
import UserList from './rw3/UserList'
import NewData from './rw3/AddData'

function APP(){
    return(
        <BrowserRouter basename={window.location.pathname || ''}>
        <ThemeProvider theme={theme} >
        <Switch >
            <Route exact path='/' component={Frontpage}/>
            <Route exact path='/adduser' component={NewUser}/>
            <Route exact path='/removeuser' component={Eh}/>
            <Route exact path='/userdata/:id' component={UserData}/>
            <Route exact path='/userlist' component={UserList}/>
            <Route exact path='/adddata/:id' component={NewData} />
        </Switch>
        </ThemeProvider>
        </BrowserRouter>
    )
}

export default APP


