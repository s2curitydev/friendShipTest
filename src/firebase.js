//firebase.js
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3PZGRuaBMbqk16oNSjsfDu1DkCWQKZeg",
  authDomain: "janmang2app.firebaseapp.com",
  projectId: "janmang2app",
  storageBucket: "janmang2app.appspot.com",
  messagingSenderId: "284880997754",
  appId: "1:284880997754:web:b5560b8b9e746c02805ac3",
  measurementId: "G-XD3MNH726E",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };
