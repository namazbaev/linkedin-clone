import { auth, provider, storage, db } from '../firebase/config';
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
const postArticleAPI = (payload) => {
  console.log('payload', payload);
  return (dispatch) => {
    if (payload.image != '') {
      const upload = storage().ref(`images/${payload.image.name}`).put(payload.image);
      upload.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Progress: ${progress}%`);
        if (snapshot.state === 'RUNNING') {
          console.log(`Progress running: ${progress}%`);
        }
      }, (error) => console.log(error.code),
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();
          db.collection("articles").add({
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL
            },
            video: payload.video,
            sharedImg: downloadURL,
            comments: 0,
            description: payload.description
          })
        }
      )
    }
  }
}
export { setUser, signInAPI, getUserAuth, signOutUser, postArticleAPI }