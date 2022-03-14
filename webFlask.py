# 2.將資料從MariaDB叫出來，並傳送到URL上
from flask import Flask
from flask import jsonify
from sqlalchemy import create_engine
import pandas as pd
import flask

engine = create_engine('mysql+pymysql://root:P@ssw0rd@localhost/mydb')

app = Flask(__name__)


# A.設定網址為家目錄的顯示內容-首頁
@app.route('/')
def main_page():
    return 'welcome to my host'


@app.route('/home')
def home():
    return flask.render_template('index.html')


@app.route('/manager')
def manager():
    return flask.render_template('manager.html')


@app.route('/investor')
def investor():
    return flask.render_template('investor.html')


@app.route('/loandata')
def loandata():
    return flask.render_template('loandata.html')


if __name__ == '__main__':
    app.debug = True
    app.run()
