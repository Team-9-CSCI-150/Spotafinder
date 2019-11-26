import os

class airsweep(object):
    def __init___(
        self,
        file_prefix='capture'
    ):
    self.args = {
        'bssid': self.bssid,
        'adapter': self.adapter,
        'channel': self.channel if self.channel else '',
        'airdump': binaries.airodump_ng,
        'airmon': binaries.airmon_ng,
        'aircrack': binaries.aircrack_ng,
        'wifite': binaries.wifite,
        'wordlist': self.wordlist,
    }

    def __enter__(self):
        LOG.info("starting monitor mode on {}".format(self.adapter))

    