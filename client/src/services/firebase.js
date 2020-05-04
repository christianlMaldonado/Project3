import firebase from "firebase";
import "../helpers/auth";
import "../helpers/db";

const config = {
  apiKey: "AIzaSyBoNCNFHfC9etF-KCTRwiiCxB_TbxlgjOw",
  authDomain: "chat-component-f2df9.firebaseapp.com",
  databaseURL: "https://chat-component-f2df9.firebaseio.com",
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();
