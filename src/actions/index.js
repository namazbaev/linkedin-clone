import { auth, provider } from '../firebase/config';
import { signInWithPopup, signOut } from 'firebase/auth';
import { SET_USER } from './actionType';

const setUser = (payload) => ({
  type: SET_USER,
  payload: payload
})

const signInAPI = () => {
  return (dispatch) => {
    signInWithPopup(auth, provider).then((payload) => {
      dispatch(setUser(payload.user))
    }).catch((err) => console.log('err', err.message))
  }
}

const getUserAuth = () => {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user))
      }
    })
  }
}
const signOutUser = () => {
  return (dispatch) => {
    signOut(auth).then(() => {
      dispatch(setUser(null))
    }).catch((err) => console.log(err.message))
  }
}
export { setUser, signInAPI, getUserAuth, signOutUser }