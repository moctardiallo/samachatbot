from flask_restful import Resource, request

from samachatter.utilisateur.ecoute import Ecoute
from samachatter.utilisateur.memoire import Memoire
from samachatter.utilisateur.repond import repond


class Destinataire(Ecoute):
    def __init__(self, *args, **kwargs):
        super(Destinataire, self).__init__(*args, **kwargs)
        self.memoire = Memoire()

    def repond(self):
        message = self.memoire.retire()
        return repond(message)

    def memorise(self, message):
        self.memoire.ajoute(message)
