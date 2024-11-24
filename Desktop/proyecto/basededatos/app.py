from flask import Flask,request,jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS
from config import config

ap = Flask(__name__)
CORS(ap)
con = MySQL(ap)

if __name__ == '__main__':
    ap.config.from_object(config['development'])
    ap.run(host='0.0.0.0', port=5000,)