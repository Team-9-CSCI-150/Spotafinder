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

export default {
    sign_up
}