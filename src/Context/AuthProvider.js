import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserName = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  const logOut = () => {
    return signOut(auth);
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUsers(currentUser);
      console.log("Current users:", currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  const authInfo = {
    users,
    loading,
    createUser,
    updateUserName,
    logOut,
    signIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
