import logging
import util

ariodump_ng = util.which('airodump-ng')
aircrack_ng = util.which('aircrack-ng')
airmon_ng = util.which('airmon-ng')

# airodump-ng -w myOutput --output-format csv mon0
# command to write output to a .csv file