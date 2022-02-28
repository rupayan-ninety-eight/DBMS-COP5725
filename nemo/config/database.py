# import psycopg2
# DB_HOST = "localhost"
# DB_NAME = "Crime_LA"
# DB_USER = "postgres"
# DB_PASS = "Pass@1037"
# # DATABASE_URL = f"postgresql://postgres:Pass@1037@localhost:5432/Crime_LA"

# # Connect to your postgres DB
# conn = psycopg2.connect(
#     dbname = DB_NAME,
#     user = DB_USER,
#     password = DB_PASS,
#     host = DB_HOST
# )

import cx_Oracle

ip = 'oracle.cise.ufl.edu'
port = 1521
SID = 'orcl'


cx_Oracle.init_oracle_client(lib_dir=r"C:\instantclient-basic-windows.x64-21.3.0.0.0\instantclient_21_3")


dsn_tns = cx_Oracle.makedsn(ip, port, SID)
conn = cx_Oracle.connect(user="rupayan.das", password="Wenger98", dsn=dsn_tns)


def close_db_connection():
    conn.close()
