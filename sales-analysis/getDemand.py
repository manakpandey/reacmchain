# -*- coding: utf-8 -*-
"""
Created on Fri May 22 00:16:32 2020

@author: Akshi
"""

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

def return_demand(input_array):
    import itertools
    import numpy as np
    import matplotlib.pyplot as plt
    import pandas as pd 
    import pylab as pl
    from sklearn import linear_model
    day = current_day
    df=pd.DataFrame(input_array)
    df = pd.insert(2,[day,day,day,day,day])
 
    
    loaded_model = pickle.load(open(filename, 'rb'))
    return loaded_model.predict(df)


# data = input()
# print(return_demand(
#     []
# ))

print(return_demand([1,10]))