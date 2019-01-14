from flask_restful import Resource, request

from samachatter.utilisateur.ecoute import Ecoute
from samachatter.utilisateur.conversation import Conversation
from samachatter.utilisateur.repond import repond


class Destinataire(Ecoute):
    def __init__(self, *args, **kwargs):
        super(Destinataire, self).__init__(*args, **kwargs)
        self.conversation = Conversation()

    def repond(self):
        message = self.conversation.retire()
        return repond(message)

    def memorise(self, message):
        self.conversation.ajoute(message)
