function get_users(firebase) {
    return new Promise((resolve) => {
        var array = []; 
        var currUser = firebase.auth().currentUser.uid;
        var users = firebase.firestore().collection('users');
        users.get().then((query) => {
            query.forEach((doc) => {
                if (currUser !== doc.id) {
                    array.push(doc.data());
                }
            })
            resolve(array);
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    });
}

export default {
    get_users
}