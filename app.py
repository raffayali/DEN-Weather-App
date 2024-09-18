# from flask import Flask, request, jsonify
# import requests

# app = Flask(__name__)

# # Your OpenWeatherMap API key
# API_KEY = 'cd0ff8df267f151775c465fa3539052b'
# BASE_URL = 'http://api.openweathermap.org/data/2.5'

# @app.route('/weather', methods=['GET'])
# def get_weather():
#     city = request.args.get('city')
#     if not city:
#         return jsonify({'error': 'City parameter is required'}), 400

#     try:
#         response = requests.get(f'{BASE_URL}/weather', params={
#             'q': city,
#             'appid': API_KEY,
#             'units': 'metric'
#         })
#         response.raise_for_status()
#         return jsonify(response.json())
#     except requests.exceptions.HTTPError as err:
#         return jsonify({'error': str(err)}), response.status_code

# @app.route('/forecast', methods=['GET'])
# def get_forecast():
#     city = request.args.get('city')
#     if not city:
#         return jsonify({'error': 'City parameter is required'}), 400

#     try:
#         response = requests.get(f'{BASE_URL}/forecast', params={
#             'q': city,
#             'appid': API_KEY,
#             'units': 'metric'
#         })
#         response.raise_for_status()
#         return jsonify(response.json())
#     except requests.exceptions.HTTPError as err:
#         return jsonify({'error': str(err)}), response.status_code

# if __name__ == '__main__':
#     # app.run(debug=True)
#  app.run(host='0.0.0.0', port=5000, debug=True)