function sign_up(firbase, router, firstName, lastName, email, password) { 
    firbase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            firbase.auth().currentUser.sendEmailVerification()
                .then(() => {
                    alert('Just send a verify email to ' + email);
                    firbase.firestore()
                        .collection('users').doc(firbase.auth().currentUser.uid)
                            .set({  
                                first_name: firstName,
                                last_name: lastName,
                                email: email,
                                password: password,
                            }).catch((error) => {
                                alert(error.message);
                            });
                    router.navigation('Login', {Login: 'Login'});
                });
        })
        .catch((error) => {
            alert(error.message);
        })
}

export default {
    sign_up
}