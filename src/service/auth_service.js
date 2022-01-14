import { app } from "./firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  getRedirectResult,
} from "firebase/auth";

class AuthService {
  constructor() {
    this.auth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }
  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return signInWithPopup(this.auth, authProvider);
  }

  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return this.googleProvider;

      case "Github":
        return this.githubProvider;

      default:
        throw new Error("not supported provider");
    }
  }

  onAuthChange(onUserChanged) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      onUserChanged(user);
    });
  }
  logout() {
    const auth = getAuth();
    auth.signOut();
  }
}

export default AuthService;
