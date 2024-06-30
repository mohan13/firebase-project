"use client";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export class AuthService {
  firebaseConfig = {
    apiKey: "AIzaSyDbOuaQUJpZ85-HCRVIFBOLyLLehuBjJEM",
    authDomain: "pkr-job.firebaseapp.com",
    projectId: "pkr-job",
    storageBucket: "pkr-job.appspot.com",
    messagingSenderId: "639973779202",
    appId: "1:639973779202:web:5bbf4f50c11fe1861e041b",
  };

  app = initializeApp(this.firebaseConfig);
  auth = getAuth(this.app);

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password,
        name,
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await signInWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    return await signOut(this.auth);
  }
}

const authService = new AuthService();
export default authService;
