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
    return new Promise();
}

export default {
    sign_up
}