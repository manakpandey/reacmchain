# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""
"""This will run once to train the model the first time."""
import itertools
import numpy as np
import pandas as pd 
import pylab as pl
import pickle
df = pd.read_csv("C:/Users/Akshi/reacmchain/sales-analysis/inventory.csv")
from sklearn import linear_model
regr = linear_model.LinearRegression()
train_x = np.asanyarray(df[['ProductID','PriceReg','DayoftheYear']])
train_y = np.asanyarray(df[['ItemCount']])
regr.fit(train_x, train_y)
    
"""This model will be saved here."""
filename = 'finalized_model.sav'
pickle.dump(regr, open(filename, 'wb'))

def current_day():
   
    from datetime import datetime
    datetime_object = datetime.now()
    print(datetime_object)
    day1 = datetime_object.day
    day = int(day1)
    

    month1= datetime_object.month
    month = int(month1)
  
    if(month==1):
        monthvalue = 0

    if(month==2):
        monthvalue = 31

    if(month==3):
        monthvalue = 60

    if(month==4):
        monthvalue = 91

    if(month==5):
        monthvalue = 121

    if(month==6):
        monthvalue = 152

    if(month==7):
        monthvalue = 182

    if(month==8):
        monthvalue = 213

    if(month==9):
        monthvalue = 244

    if(month==10):
        monthvalue = 274

    if(month==11):
        monthvalue = 305

    if(month==12):
        monthvalue = 335
    return monthvalue + day

"""To retrain the model every time run the following function."""
def retrain_model(array_input):
    day=current_day()
    import itertools
    import numpy as np
    import pandas as pd 
    import pylab as pl
    import pickle
    df = pd.read_csv("C:/Users/Akshi/reacmchain/sales-analysis/inventory.csv")
    df2 = pd.DataFrame(df)
    df.append(df2,ignore_index = True)
    
    from sklearn import linear_model
    regr = linear_model.LinearRegression()
    train_x = np.asanyarray(df[['ProductID','PriceReg','DayoftheYear']])
    train_y = np.asanyarray(df[['ItemCount']])
    regr.fit(train_x, train_y)
    filename = 'finalized_model.sav'
    pickle.dump(regr, open(filename, 'wb'))
    
    df.to_csv("C:/Users/Akshi/reacmchain/sales-analysis/inventory.csv")
    
    return
array_input =  ([1,23,300,100],[2,34,200,122],[3,32,400,300],[4,67,233,100],[5,98,211,400])

retrain_model([array_input])

