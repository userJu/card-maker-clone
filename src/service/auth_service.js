import firebase from "firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
class AuthService {
  login(providerName) {
    const authProvider = new [`${providerName}AuthProvider`]();
    const auth = getAuth();
    signInWithPopup(auth, authProvider);
  }
}

export default AuthService;
