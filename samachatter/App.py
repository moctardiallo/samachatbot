from samachatter import app, api

from samachatter.utilisateur.parle.destinataire import Destinataire
from samachatter.bot import Bot

from samachatter import db

db.create_all()

api.add_resource(Destinataire, '/destinataire')
api.add_resource(Bot, '/destinataire/bot')


if __name__ == '__main__':
    app.run(debug=True)
