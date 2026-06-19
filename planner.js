import { auth } from "./auth.js";

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

console.log("planner.js loaded");

onAuthStateChanged(auth, (user) => {

    console.log("Current user:", user);

    if (user) {

        document.getElementById("userEmail")
            .textContent = `Welcome, ${user.email}`;

    }

});