function sign_in(firebase, router, email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            if (firebase.auth().currentUser.emailVerified) {
                router.navigation('Home', {Home: 'Home'});
            }
            else {
                alert(email + ' has not been verified');
            }
        })
        .catch(function(error) {
            alert(error.message);
        });
}

export default {
    sign_in
}