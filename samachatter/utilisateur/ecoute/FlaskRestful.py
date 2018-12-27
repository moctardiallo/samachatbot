from flask_restful import Resource, request


class Ecoute(Resource):
    def __init__(self, *args, **kwargs):
        super(Ecoute, self).__init__(*args, **kwargs)
        self.message = ""

    def post(self):
        message = request.get_json()
        self.memorise(message)
        return self.repond()

    def repond(self):
        pass

    def memorise(self, message):
        pass
