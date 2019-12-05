import pyrebase
from random import seed
from random import randint
import time
import csv


class updateOccupancy:
	def __init__(self, EEdb, Ldb):
		self.EEdb = EEdb
		self.Ldb = Ldb
	
	def send(self):
		
		
		ee281occ = randint(0,20)
		ee283occ = randint(0,20)
		lfloor1 = randint(0,100)
		lfloor2 = randint(0,100)
		print('ee281: ' + str(ee281occ))
		print('ee283: ' + str(ee283occ))
		EEdata = {"Engineering East/rooms/EE281":{"occupancy": ee281occ},
			"Engineering East/rooms/EE283":{"occupancy": ee283occ}}
		self.EEdb.update(EEdata)
		Ldata = {"Library/floors/1":{"occupancy": lfloor1},
			"Library/floors/2":{"occupancy": lfloor2}}
		self.Ldb.update(Ldata)

class configureDB:
	def __init__(self, EEdb, Ldb):
		self.EEdb = EEdb
		self.Ldb = Ldb
	
	def config(self):
		config = {
		  "apiKey": "AIzaSyAzclOJusoyXpvyB9GHpk4_3ddwtOm-36w",
		  "authDomain": "spotifinder-c42a6.firebaseapp.com",
		  "databaseURL": "https://spotafinder-c42a6.firebaseio.com/",
		  "storageBucket": "spotifinder-c42a6.appspot.com"
		}

		firebase = pyrebase.initialize_app(config)
		self.EEdb = firebase.database()
		self.Ldb = firebase.database()

		
		
    


def countDevices():
	i = 0
	flag = False
	with open('testDec2.csv',newline='') as csvfile:
		cr = csv.DictReader(csvfile)
		for row in cr:
			for j in row.items():
				if flag:
					i = i + 1
				if j[1][0] == 'Station MAC':
					flag = True
		return i



def main():
	c = configureDB('eedb', 'ldb')
	c.config()
	o = updateOccupancy(c.EEdb, c.Ldb)
	seed(1)
	while True:
		o.send()
		time.sleep(5)
		

if __name__ == '__main__':
	main()

	
#class with each csv index
