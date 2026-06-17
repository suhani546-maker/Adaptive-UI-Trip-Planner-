import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDxXP4VNLy5nJlERHlht1mWZiGSSu00w54",
  authDomain: "adaptive-ui-trip-planner.firebaseapp.com",
  projectId: "adaptive-ui-trip-planner",
  storageBucket: "adaptive-ui-trip-planner.firebasestorage.app",
  messagingSenderId: "559568718364",
  appId: "1:559568718364:web:b92d46ceb25d0671f3add9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
