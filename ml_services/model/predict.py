import numpy as np
from sklearn.cluster import KMeans
import joblib
import pandas as pd
import os

def preprocess_data(data):
    """
    Preprocess the input data before making predictions
    """
    try:
        # Load the feature names
        feature_names = joblib.load('model/feature_names.pkl')
        
        # Load the experience level encoder
        le = joblib.load('model/experience_encoder.pkl')
        
        # Create a DataFrame with all possible features (initialized to 0)
        features_df = pd.DataFrame(0, index=[0], columns=feature_names)
        
        # Set skill features
        for skill in data.get('skills', []):
            if skill in feature_names:
                features_df[skill] = 1
                
        # Set interest features
        for interest in data.get('interests', []):
            if interest in feature_names:
                features_df[interest] = 1
        
        # Set time commitment
        features_df['time_commitment'] = data.get('time_commitment', 0)
        
        # Set experience level
        exp_level = data.get('experience_level', 'beginner')
        features_df['experience_level'] = le.transform([exp_level])[0]
        
        # Load the scaler
        scaler = joblib.load('model/scaler.pkl')
        
        # Scale the features
        X_scaled = scaler.transform(features_df)
        
        return X_scaled
        
    except Exception as e:
        print(f"Error in preprocessing: {str(e)}")
        raise e

def make_prediction(data):
    """
    Make predictions using the trained model
    """
    try:
        # Load the model
        model = joblib.load('model/kmeans_model.pkl')
        
        # Preprocess the data
        features = preprocess_data(data)
        
        # Make prediction
        cluster = model.predict(features)[0]
        
        # Get recommendations based on cluster
        recommendations = get_recommendations(cluster, data)
        
        return cluster, recommendations
        
    except Exception as e:
        print(f"Error in prediction: {str(e)}")
        raise e

def get_recommendations(cluster, user_data):
    try:
        current_dir = os.path.dirname(os.path.abspath(__file__))
        data_dir = os.path.join(os.path.dirname(current_dir), 'data')
        courses_file = os.path.join(data_dir, 'Courses.csv')
        
        courses_df = pd.read_csv(courses_file)
        
        level_mapping = {
            'beginner': ['Beginner Level', 'All Levels'],
            'intermediate': ['Intermediate Level', 'All Levels'],
            'advanced': ['Advanced Level', 'All Levels']
        }
        
        suitable_levels = level_mapping.get(user_data.get('experience_level', 'beginner'))
        filtered_courses = courses_df[courses_df['level'].isin(suitable_levels)]
        top_courses = filtered_courses.head(5)
        
        recommendations = []
        for _, course in top_courses.iterrows():
            recommendations.append({
                'title': course['course_name'],
                'url': course['course url'],
                'level': course['level']
            })
        
        return recommendations
        
    except Exception as e:
        print(f"Error: {str(e)}")
        return [] 