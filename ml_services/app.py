from flask import Flask, request, jsonify
from model.predict import make_prediction
import numpy as np

app = Flask(__name__)

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy"}), 200

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get data from request
        data = request.get_json()
        
        # Make prediction
        cluster, recommendations = make_prediction(data)
        
        return jsonify({
            "cluster": int(cluster),
            "recommendations": recommendations
        }), 200
        
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True, port=5000) 