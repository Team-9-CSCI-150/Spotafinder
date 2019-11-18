import pyrebase
from random import seed
from random import randint
import time

class updateOccupancy:

	def __init__(self, EEdata, Libdata):
		self.EEdata = EEdata
		self.Libdata = Libdata
		
	def send(data):
		EEdb.update(data.EEdata)
		Ldb.update(data.Libdata)
		

    


config = {
  "apiKey": "AIzaSyAzclOJusoyXpvyB9GHpk4_3ddwtOm-36w",
  "authDomain": "spotifinder-c42a6.firebaseapp.com",
  "databaseURL": "https://spotafinder-c42a6.firebaseio.com/",
  "storageBucket": "spotifinder-c42a6.appspot.com"
}

firebase = pyrebase.initialize_app(config)
EEdb = firebase.database()
Ldb = firebase.database()

EEdata = {}
Libdata = {}
c = updateOccupancy(EEdata, Libdata)

seed(1)
for _ in range(10):
	
	ee281occ = randint(0,20)
	ee283occ = randint(0,20)
	lfloor1 = randint(0,100)
	lfloor2 = randint(0,100)

	c.EEdata = {"Engineering East/rooms/EE281":{"occupancy": ee281occ},
		"Engineering East/rooms/EE283":{"occupancy": ee283occ}}
	
	c.Libdata = {"Library/floors/1":{"occupancy": lfloor1},
		"Library/floors/2":{"occupancy": lfloor2}}
	c.send()
	time.sleep(5)
