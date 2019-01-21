A wolof chatbot

**_Pre-installation_**

```
node
npm

python3.6
pipenv
```

**_Installation_**

```
git clone https://github.com/moctardiallo/samachatbot.git

cd samachattbot

npm install
pipenv install
```

At the command line:

```
open ~/.bashrc in an editor

Add the following lines:

# Samachatbot
export SAMACHATBOT_PATH=your/project/path/samachatbot
export PYTHONPATH=$PYTHONPATH:SAMACHATBOT_PATH

Replace your/project/path with the folder you cloned the repo into
```

**_Start_**

```
Assuming you already are in the project root directory

yarn start
pipenv run python samachatter/App.py

```
