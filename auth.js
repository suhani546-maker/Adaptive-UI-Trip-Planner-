
import { auth } from "./firebase-config.js";
export { auth };
import { onAuthStateChanged }
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

export function protectPage(
  redirectTo = "login.html"
) {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = redirectTo;
    }
  });
}