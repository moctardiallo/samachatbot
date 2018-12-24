from samachatter import app, api
from flask_restful import Resource, request


class Messages(Resource):
    def __init__(self, *args, **kwargs):
        super(Messages, self).__init__(*args, **kwargs)
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


api.add_resource(Messages, '/messages')

if __name__ == '__main__':
    app.run(debug=True)
