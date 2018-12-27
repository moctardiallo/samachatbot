

class Memoire(object):
    def __init__(self, *args, **kwargs):
        super(Memoire, self).__init__(*args, **kwargs)
        self.data = {}

    def retire(self):
        return self.data["message"]

    def ajoute(self, message):
        self.data["message"] = message
