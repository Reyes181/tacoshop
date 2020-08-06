import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyBapJMssO-WolzGB0Mf1_AK7gMetfauhKo",
    authDomain: "taco-shop-b47af.firebaseapp.com",
    databaseURL: "https://taco-shop-b47af.firebaseio.com",
    projectId: "taco-shop-b47af",
    storageBucket: "taco-shop-b47af.appspot.com",
    messagingSenderId: "710743021663",
    appId: "1:710743021663:web:eef54195607c306d3b23ea",
    measurementId: "G-VNLRFTXNL7"
};
firebase.initializeApp(firebaseConfig);
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;
}

export const addCollectionAndDocs = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc(obj.title);
        batch.set(newDocRef, obj);
    })

    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.map(doc => {
        return {
            id: doc.id,
            title: doc.title,
            routeName: encodeURI(doc.title.toLowerCase()),
            items: doc.items,
        }
    });
    
    return transformedCollection
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsuscribe = auth.onAuthStateChanged(userAuth => {
            unsuscribe();
            resolve(userAuth);
        }, reject)
    })
}

export const checkUserVerified = (userAuth) => {
    let userResult = [];

    let user = userAuth.emailVerified
    
    if(user){
        userResult.push({message: 'Email verified', verified: true})
    } else {
        userResult.push({message: 'Email not verified', verified: false})
    }

    return userResult
}

export const sendVerification = async (userAuth) => {
    let user = userAuth;
    let resultMessage = []; 
    await user.sendEmailVerification().then(function() {
        resultMessage.push({message:'Email has been sent to verify', success: true})
    }).catch(function(error) {
       console.log(error)
       resultMessage.push({message: 'An error occured, failed to send email', success: false})
    });
    
    return resultMessage
}

export const updateCurrentUserInfo = async (collectionKey, userId, userCredential) => {
    const userRef = firestore.collection(collectionKey).doc(userId);
    
    const {displayName, email} = userCredential;

    
    await userRef.set({
        displayName: displayName,
        email: email
    });

    return userRef;
};

export const addPurchaseHistory = async (collectionKey, userId, purchaseHistory) => {
    const collectionRef = firestore.collection(collectionKey);

    return await collectionRef.add({
        userId: userId,
        purchaseHistory: purchaseHistory
    });
};

export const getUserPurchase = async (collectionKey, currentId) => {
    const purchaseRef = firestore.collection(collectionKey).where('userId', '==', currentId)
    
    let purchaseArray = [];
    await purchaseRef.get().then(function(querySnapshot) {
        
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            purchaseArray.push(doc.data().purchaseHistory)
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    
    return purchaseArray
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

const firebaseDB = firebase.database();
export const firebasePromotions = firebaseDB.ref('promotions');
export const firebaseMessages = firebaseDB.ref('messages');
export const firebaseShop = firebaseDB.ref('shop');


export default firebase;