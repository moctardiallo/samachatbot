import requests

from bs4 import BeautifulSoup

fb = requests.get('https://web.facebook.com/groups/1618790341747413/').text

page = BeautifulSoup(fb, 'lxml')

print(page.prettify())
