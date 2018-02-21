import { createStore } from 'redux'
import {
  LOGIN_REQUEST ,
  LOGIN_SUCCESS ,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from './constants'


function requestLogin(creds) {
  console.log('action requestLogin')
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token
  }
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}



export function loginUser(creds) {

  console.log('loginUser creds', creds)

  var data = JSON.stringify({
    username : creds.username,
    password : creds.password
  });
  
  let config = {
    mode: 'cors',
    method: 'POST',
    headers: { 'Content-Type':'application/json' },
    body: data
  }

  return dispatch => {

    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return fetch('http://localhost:5050/sessions/create', config)
      .then(response =>
        response.json().then(response => (response))
      ).then((response) =>  {
        if (!response.ok) {

          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(loginError(response.message))
          return Promise.reject(user)
        } else {

          // If login was successful, set the token in local storage
          localStorage.setItem('id_token', response.id_token)
          localStorage.setItem('access_token', response.access_token)
          // Dispatch the success action
          dispatch(receiveLogin(response))
        }

        
      }).catch(err => console.log("Error: ", err))


  }


}


//////////////



function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  }
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
}

// Logs the user out
export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('id_token')
    localStorage.removeItem('access_token')
    dispatch(receiveLogout())
  }
}