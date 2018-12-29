class Message:
    # message is a dict object with a key 'j_ai_dit'
    def __init__(self, message):
        self.message = message

    def recu(self):
        self.message["tu_as_dit"] = self.message.pop("j_ai_dit")
        return self.message

    def reponse(self):
        self.message["j_ai_dit"] = self.message.pop("tu_as_dit")
        return self.message


def j_ai_dit(message):
    message["j_ai_dit"] = message.pop("tu_as_dit")
    return message


def tu_as_dit(message):
    message["tu_as_dit"] = message.pop("j_ai_dit")
    return message
