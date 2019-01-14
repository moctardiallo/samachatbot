from samachatter import db


class Conversation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    data = db.ARRAY(db.String())

    def __init__(self):
        self.messages = []

    def __str__(self):
        return str(self.message)

    def __repr__(self):
        return f"<Conversation {self.message}>"

    @property
    def message(self):
        return self.data[-1]

    def retire(self):
        return self.data[-1]

    def ajoute(self, message):
        self.messages.append(message)
        self.data = self.messages
