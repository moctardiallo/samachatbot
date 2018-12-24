from samachatter import app, api

from samachatter.chatRoom.message.view.FlaskRestful import Message

api.add_resource(Message, '/message')

if __name__ == '__main__':
    app.run(debug=True)
