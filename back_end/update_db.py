#updates database every 10 seconds with random data

import pyrebase
from random import seed
from random import randint
import time

config = {
  "apiKey": "AIzaSyAzclOJusoyXpvyB9GHpk4_3ddwtOm-36w",
  "authDomain": "spotifinder-c42a6.firebaseapp.com",
  "databaseURL": "https://spotafinder-c42a6.firebaseio.com/",
  "storageBucket": "spotifinder-c42a6.appspot.com"
}

firebase = pyrebase.initialize_app(config)
EEdb = firebase.database()
Ldb = firebase.database()

seed(1)
for _ in range(10):
    ee281occ = randint(0,20)
    ee283occ = randint(0,20)
    lfloor1 = randint(0,100)
    lfloor2 = randint(0,100)

    EEdata = {"Engineering East/rooms/EE281":{"occupancy": ee281occ},
        "Engineering East/rooms/EE283":{"occupancy": ee283occ}}
    EEdb.update(EEdata)
    Ldata = {"Library/floors/1":{"occupancy": lfloor1},
        "Library/floors/2":{"occupancy": lfloor2}}
    Ldb.update(Ldata)
    time.sleep(10)
    


