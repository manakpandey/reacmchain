def current_day():
    from datetime import datetime
    datetime_object = datetime.now()
    day1 = datetime_object.day
    day = int(day1)
    month1 = datetime_object.month
    month = int(month1)
    monthvalue = 0

    if month == 1:
        monthvalue = 0

    if month == 2:
        monthvalue = 31

    if month == 3:
        monthvalue = 60

    if month == 4:
        monthvalue = 91

    if month == 5:
        monthvalue = 121

    if month == 6:
        monthvalue = 152

    if month == 7:
        monthvalue = 182

    if month == 8:
        monthvalue = 213

    if month == 9:
        monthvalue = 244

    if month == 10:
        monthvalue = 274

    if month == 11:
        monthvalue = 305

    if month == 12:
        monthvalue = 335
    return monthvalue + day


def return_demand(input_array):
    import numpy as np
    import pandas as pd
    import pickle
    from sklearn import linear_model
    filename = 'ml/finalized_model.sav'
    day = current_day()
    # input_array = [[3,89]]
    df = pd.DataFrame.from_records(input_array)
    df[2] = [day]
    loaded_model = pickle.load(open(filename, 'rb'))
    return str(loaded_model.predict(df)[0][0])
