# -*- coding: utf-8 -*-


# !pip install scikit-learn

import pandas as pd
from sklearn.ensemble import RandomForestRegressor as rfr
from sklearn.metrics import mean_absolute_error as mae
from sklearn.model_selection import train_test_split as tts

path = 'Server\processes_info.csv'

data=pd.read_csv(path)

data.describe()

data.columns

model=rfr(random_state=1)
data.head()

features_list=['cpu_percent', 'cpu_times_user', 'cpu_times_system', 'memory_percent', 'memory_info_rss', 'memory_info_vms', 'num_threads', 'disk_usage']
features = data[features_list]
predict=data.anomally
predict.head()

x_train_full, x_valid_full, y_train, y_valid = tts(features, predict, train_size=0.8, test_size=0.2, random_state=0)

model.fit(x_train_full,y_train)

model.predict(x_valid_full)

