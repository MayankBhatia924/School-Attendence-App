import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAebjPCzSKBneGtUA3uJPFh1RlzqMpp1hU",
  authDomain: "school-attendence-app-804f9.firebaseapp.com",
  databaseURL: "https://school-attendence-app-804f9-default-rtdb.firebaseio.com",
  projectId: "school-attendence-app-804f9",
  storageBucket: "school-attendence-app-804f9.appspot.com",
  messagingSenderId: "696936685086",
  appId: "1:696936685086:web:721252e97837a3ffbb580f"
};
if(!firebase.apps.length)
firebase.initializeApp(firebaseConfig);

export default firebase.database()