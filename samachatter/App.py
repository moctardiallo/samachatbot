from samachatter import app, api

from samachatter.chatRoom.message.view.FlaskRestful import MessageView

api.add_resource(MessageView, '/message')

if __name__ == '__main__':
    app.run(debug=True)
