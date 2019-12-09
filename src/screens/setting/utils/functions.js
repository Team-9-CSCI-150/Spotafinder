import Firebase from '../../../configs/firebase';

function sign_up() {
    Firebase.auth().signOut()
    .then(() => {
        alert('You have sign out!');
    })
    .catch((error) => {
        alert('Something is wrong');
    })
}

function displaying() {
    return new Promise((resolve) => {
        var currUser = Firebase.auth().currentUser.uid;
        Firebase.firestore().collection('users').get().then((query) => {
            query.forEach((doc) => {
                if (currUser == doc.id) {
                    console.log(doc.data());
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