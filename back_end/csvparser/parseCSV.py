import pandas as pd
import csv

data = pd.read_csv("/Users/Vince/Documents/GitHub/Spotafinder/back_end/csvparser/outputSniffASME-01.csv", error_bad_lines=False)

print(data.head)