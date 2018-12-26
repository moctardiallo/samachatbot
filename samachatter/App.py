from samachatter import app, api

from samachatter.utilisateur.parle.destinataire.FlaskRestful import Destinataire

api.add_resource(Destinataire, '/destinataire')

if __name__ == '__main__':
    app.run(debug=True)
