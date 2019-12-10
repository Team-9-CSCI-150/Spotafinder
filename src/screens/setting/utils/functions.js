import Firebase from '../../../configs/firebase';

function sign_up() {
    Firebase.auth().signOut()
    .then(() => {
        alert('You have sign out!');
    })
    .catch((error) => {
        alert(error);
    })
}

function displaying() {
    return new Promise((resolve) => {
        var currUser = Firebase.auth().currentUser.uid;
        Firebase.firestore().collection('users').get().then((query) => {
            query.forEach((doc) => {
                if (currUser == doc.id) {
                    resolve(doc.data());
                    return;
                }
            })
        })

    });
}

export default {
    sign_up,
    displaying
}