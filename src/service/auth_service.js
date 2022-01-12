import { app } from "./firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

class AuthService {
  login(providerName) {
    const auth = getAuth();
    if (providerName === "Google") {
      const authProvider = new GoogleAuthProvider();
      signInWithPopup(auth, authProvider);
    } else if (providerName === "Github") {
      const authProvider = new GithubAuthProvider();
      signInWithPopup(auth, authProvider);
    }
  }
}

export default AuthService;
