from samachatter import app, api
from flask_restful import Resource


class Messages(Resource):
    def get(self):
        return {
            'messages': [{
                'id': 'user',
                'content': "hello from flask!"
            },
                {
                'id': 'flask',
                'content': 'Hello again from flask'
            }]
        }


api.add_resource(Messages, '/messages')

if __name__ == '__main__':
    app.run(debug=True)
