import os

class airsweep(object):
    def __init___(
        self,
        file_prefix='capture'
    ):
    def __enter__(self):
        LOG.info("starting monitor mode on {}".format(self.adapter))