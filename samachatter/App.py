from samachatter import app, api

from samachatter.utilisateur.parle.destinataire import Destinataire
from samachatter.bot import Bot

api.add_resource(Bot, '/destinataire')

if __name__ == '__main__':
    app.run(debug=True)
