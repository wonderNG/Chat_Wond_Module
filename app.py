from flask import Flask, render_template, url_for, request, redirect, jsonify, make_response
from flask_mysqldb import MySQL
import mysql.connector

#create a flask application instance
app = Flask(__name__)

#create a connection object
cnx = mysql.connector.connect(user='wondnet', password='w02der_DB', host='localhost', database='im_database')

app.static_folder = 'static/'
app.static_url_path = 'static/'

@app.route('/')
def index():
    text = request.args.get('logo_text')
    #create a cursot object
    cursor = cnx.cursor()
    
    #execute a query
    query =  'SELECT * FROM im_database.users'
    cursor.execute(query)

    #fetch the results
    results = cursor.fetchall()

    #close the cursor object
    cursor.close()

    #render the results inn the index.html file as users table
    return render_template('index.html', users = results)

#run the application


# Fill the conversation header
@app.route('/conversation/fill_header', methods=["POST"])
def fill_header():
    
    try:
        request_data = request.get_json() #retrieves the JSON data from the request body.
        chat_list__userName = request_data['chat_list__userName']
        
        cursor = cnx.cursor()
        
        query = "SELECT * FROM users WHERE user_name = %s"
        cursor.execute(query, (chat_list__userName,))

        
        print(query)
        results = cursor.fetchone()
        cursor.close()
        
        #process the retrieved data within results
        if results:
            user_name = results[0][1]  # Assuming the user name is in the second column of the results

            response_data ={
                "user_name": user_name
            }
            return jsonify(response_data), 200
        else:
            return jsonify({"message": "User not found"}), 404
    except Exception as e:
        print(e)
        return jsonify({"message": "Error occurred"}), 500



if __name__ == "__main__":
    app.run(debug=True)

"""
@app.route('/insert', methods = ['POST'])
def insert():    
    if request.method == "POST":
        name = request.form['name']
        email = request.form['email']

        cursor = mysql.connection.cursor()
        cursor.execute("INSERT INTO table (col1, col2) VALUES (%s, %s)", (val1, val2))
        mysql.connection.commit()

        return redirect(url_for('index'))

#define a route that fetches data of search input in index.html
@app.route('/searchUser', methods = ['POST'])
def searchUser():
    if request.method == "POST":
        user_toSearch = request.form['user_toSearch']
        user_current = request.form['user_current']
        cursor = cnx.cursor()
        
        query =  'SELECT * FROM users WHERE user_first_name LIKE %s OR user_last_name LIKE %s AND user_name NOT LIKE %s'

        cursor.execute(query[user_toSearch, user_toSearch, user_current])
        results = cursor.fetchall()
        cursor.close()

    return redirect(url_for('index'))
"""