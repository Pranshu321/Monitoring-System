# -*- coding: utf-8 -*-
"""model.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1tMqd3GhcSuBo4HKKrJd1QA6546FSHcG6
"""

!pip install scikit-learn

import pandas as pd
from sklearn.ensemble import RandomForestRegressor as rfr
from sklearn.metrics import mean_absolute_error as mae
from sklearn.model_selection import train_test_split as tts

path= '/content/sample_data/processes_info.csv'

data=pd.read_csv(path)

data.describe()

data.columns

model=rfr(random_state=1)
data.head()

features_list=['cpu_percent', 'memory_percent']
features = data[features_list]
predict=data.anomally
predict.head()

x_train_full, x_valid_full, y_train, y_valid = tts(features, predict, train_size=0.8, test_size=0.2, random_state=0)

model.fit(x_train_full,y_train)

model.predict(x_valid_full)

