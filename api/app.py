from flask import Flask, request
from ml.getDemand import return_demand
from ml.retrain import retrain_model

app = Flask(__name__)


@app.route('/getDemand', methods=['POST'])
def get_demand():
    pid = request.form['pid']
    price = request.form['price']
    return return_demand([[pid, price]])


@app.route('/retrain', methods=['GET'])
def retrain():
    retrain_model([[5, 98, 211, 400]])
    return "ok"


if __name__ == '__main__':
    app.run()
