// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js'
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: 'AIzaSyDxWRoe2DWYAPer_36NWvNNK0RgudaQS-I',
  authDomain: 'e-marketing-a7f9e.firebaseapp.com',
  databaseURL: 'https://e-marketing-a7f9e.firebaseio.com',
  projectId: 'e-marketing-a7f9e',
  storageBucket: 'e-marketing-a7f9e.appspot.com',
  messagingSenderId: '171261672286',
  appId: '1:171261672286:web:75eefc7a20209d89e86dcf',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
