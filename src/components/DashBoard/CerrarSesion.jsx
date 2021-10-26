import React from 'react'
import { app } from '../../firebase';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from 'react';

const auth = getAuth(app)

function useAuth() {
    const [currentUser, setCurrentUser] = useState(null);


    onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
            setCurrentUser(firebaseUser);
        }
        else {
            setCurrentUser(null);
        }
    });
    return currentUser
}



