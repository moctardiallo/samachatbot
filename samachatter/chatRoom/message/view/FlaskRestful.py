from flask_restful import Resource, request


class Message(Resource):
    def __init__(self, *args, **kwargs):
        super(Message, self).__init__(*args, **kwargs)
        self.messages = {
            'messages': [
                {
                    'id': 'user',
                    'content': "hello from flask!"
                },
            ]
        }

    def get(self):
        return self.messages

    def post(self):
        message = request.get_json()
        return message
