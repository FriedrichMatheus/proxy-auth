#!/usr/bin/python3
import sys
import os
import requests
import logging

logging.basicConfig(level=logging.DEBUG)

logging.debug("Iniciando o script auth.py")

API_URL = os.environ['API_URL'] 

def check_credentials(username, password):
    logging.debug(f"Usuário: {username}, Senha: {password}")

    try:
        response = requests.post(API_URL, json={"username": username, "password": password}, timeout=5)
        
        logging.debug(f"Response: {response.status_code}")
        
        try:
            response_data = response.json() 
            logging.debug(f"Body: {response_data}")
        except ValueError:
            logging.error("Resposta não é um JSON válido.")
            response_data = {}

        if response.status_code == 200 and response_data.get("authenticated") == True:
            return True
        else:
            return False
    except requests.exceptions.RequestException as e:
        logging.error(f"Erro na requisição: {e}")
        return False

while True:
    line = sys.stdin.readline().strip()
    logging.debug(f"Dados de entrada recebidos: {line}")
    if not line:
        break
    user, password = line.split(" ", 1)
    if check_credentials(user, password):
        logging.debug("OK")
        sys.stdout.write('OK\n')
    else:
        logging.debug("ERR")
        sys.stdout.write('ERR\n')
    sys.stdout.flush()