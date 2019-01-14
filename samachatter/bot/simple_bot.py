from samachatter.utilisateur.parle.destinataire import Destinataire
from samachatter.utilisateur.ecoute.message import j_ai_dit


class Bot(Destinataire):
    def __init__(self, *args, **kwargs):
        super(Bot, self).__init__(*args, **kwargs)

    def repond(self):
        message = j_ai_dit(self.conversation.message)
        return message
