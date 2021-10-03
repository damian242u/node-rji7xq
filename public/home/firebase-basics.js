const config = {
  apiKey: 'AIzaSyBHA20Fhy-YklaIm3QaXKh97q-li1iTnnY',
  authDomain: 'myapp-eedce.firebaseapp.com',
  databaseURL: 'https://myapp-eedce-default-rtdb.firebaseio.com',
  projectId: 'myapp-eedce',
  storageBucket: 'myapp-eedce.appspot.com',
  messagingSenderId: '256373132109',
  appId: '1:256373132109:web:5969eee656f6bc2dfa4504',
  measurementId: 'G-SYM9VDJWEK',
};

firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

function writeUserData(name, email, password) {
  firebase
    .database()
    .ref('users/' + name)
    .set({ email: email, password: password });
}

function linkDevice(deviceName, accountname) {
  firebase
    .database()
    .ref('users/' + accountname + '/' + 'linked-users')
    .set(deviceName);
}
