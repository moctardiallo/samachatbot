from samachatter.utilisateur.parle.destinataire import Destinataire


class Bot(Destinataire):
    def __init__(self, *args, **kwargs):
        super(Bot, self).__init__(*args, **kwargs)

    def repond(self):
        message = self.memoire.retire()
        message["tu_as_dit"] = "" + message["tu_as_dit"]
        return message
