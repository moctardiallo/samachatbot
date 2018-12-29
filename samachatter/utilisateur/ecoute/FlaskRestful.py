from flask_restful import Resource, request

from samachatter.utilisateur.ecoute.message import tu_as_dit


class Ecoute(Resource):
    def __init__(self, *args, **kwargs):
        super(Ecoute, self).__init__(*args, **kwargs)
        self.message = ""

    def post(self):
        message = tu_as_dit(request.get_json())
        print(message)
        self.memorise(message)
        return self.repond()

    def repond(self):
        pass

    def memorise(self, message):
        pass
