import Firebase from '../../../configs/firebase';

function get_snitch() {
    return new Promise((resolve) => {
        var path = Firebase.database().ref().child('Engineering East').child('rooms');
        path.on('value', (snapshot) => {
            var rooms = []
            snapshot.forEach((snapChild) => {
                snapChild.forEach((snapGrandChild) => {
                    rooms.push({name: snapChild.key, occupany: snapGrandChild.val()})
                })
            });
            resolve(rooms);
        });
    });
}

export default {
    get_snitch
}
