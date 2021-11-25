import apache_log_parser
import sqlite3
import csv
from datetime import datetime

conn = sqlite3.connect("/var/lib/sqlite/afp.db")
cur = conn.cursor()

cur.execute(
    """CREATE TABLE IF NOT EXISTS logs ( \
      status INTEGER, \
      request_method TEXT, \
      request_url TEXT, \
      date TEXT \
    )"""
)

cur.execute("""SELECT MAX(date) FROM logs""")
maxDate = cur.fetchone()[0]
if maxDate:
    maxDate = datetime.strptime(maxDate, "%Y-%m-%d %H:%M:%S")

parser = apache_log_parser.make_parser('%h %l %u %t "%r" %>s %b')

logFile = "/var/log/apache2/access.log"
with open(logFile) as r:

    for line in r:
        log = parser(line)

        if maxDate:
            if maxDate >= log["time_received_datetimeobj"]:
                continue

        # Line below adds minimalistic date stamp column
        # in format that sqlite3 date functions can work with
        log["date"] = log["time_received_datetimeobj"].strftime("%Y-%m-%d %H:%M:%S")

        cur.execute(
            """INSERT INTO logs ( status,  request_method,  request_url,  date) \
                    VALUES (:status, :request_method, :request_url, :date)""",
            log,
        )

cur.close()

conn.commit()
conn.close()
