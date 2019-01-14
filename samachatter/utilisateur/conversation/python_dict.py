

class Conversation(object):
    def __init__(self, *args, **kwargs):
        super(Conversation, self).__init__(*args, **kwargs)
        self.data = {"message": ""}

    def retire(self):
        return self.data["message"]

    def ajoute(self, message):
        self.data["message"] = message

    @property
    def message(self):
        return self.data["message"]
