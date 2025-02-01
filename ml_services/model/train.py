import pandas as pd
import numpy as np
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler, LabelEncoder
import joblib
import os

def load_and_preprocess_data():
    """
    Load and preprocess both user profiles and course data
    """
    # Ensure we're using the correct paths
    current_dir = os.path.dirname(os.path.abspath(__file__))
    data_dir = os.path.join(os.path.dirname(current_dir), 'data')
    
    # Load user profiles
    try:
        users_df = pd.read_csv(os.path.join(data_dir, 'user_profiles.csv'))
    except FileNotFoundError:
        print("User profiles not found. Please run create_sample_data.py first.")
        return None
        
    # Load course data
    try:
        courses_df = pd.read_csv(os.path.join(data_dir, 'courses.csv'))
    except FileNotFoundError:
        print("Course data not found.")
        return None
    
    # Preprocess user profiles
    # Convert skills and interests from comma-separated strings to binary columns
    skills_dummies = users_df['skills'].str.get_dummies(',')
    interests_dummies = users_df['interests'].str.get_dummies(',')
    
    # Convert experience level to numerical
    le = LabelEncoder()
    experience_encoded = le.fit_transform(users_df['experience_level'])
    
    # Save the label encoder for prediction
    joblib.dump(le, os.path.join(current_dir, 'experience_encoder.pkl'))
    
    # Combine all features
    X = pd.concat([
        skills_dummies,
        interests_dummies,
        users_df['time_commitment'],
        pd.Series(experience_encoded, name='experience_level')
    ], axis=1)
    
    return X, courses_df

def train_model(X, n_clusters=5):
    """
    Train the K-means clustering model
    """
    # Initialize and train the model
    kmeans = KMeans(n_clusters=n_clusters, random_state=42)
    kmeans.fit(X)
    
    # Save the model
    current_dir = os.path.dirname(os.path.abspath(__file__))
    joblib.dump(kmeans, os.path.join(current_dir, 'kmeans_model.pkl'))
    
    return kmeans

def main():
    """
    Main training pipeline
    """
    try:
        # Load and preprocess data
        print("Loading and preprocessing data...")
        X, courses_df = load_and_preprocess_data()
        
        if X is None:
            return
        
        # Scale features
        print("Scaling features...")
        scaler = StandardScaler()
        X_scaled = scaler.fit_transform(X)
        
        # Save the scaler for prediction
        current_dir = os.path.dirname(os.path.abspath(__file__))
        joblib.dump(scaler, os.path.join(current_dir, 'scaler.pkl'))
        
        # Train model
        print("Training model...")
        model = train_model(X_scaled)
        
        # Save feature names for prediction
        feature_names = X.columns.tolist()
        joblib.dump(feature_names, os.path.join(current_dir, 'feature_names.pkl'))
        
        print("Training completed successfully!")
        print(f"Model trained with {len(X)} user profiles")
        print(f"Number of clusters: {model.n_clusters}")
        
    except Exception as e:
        print(f"Error during training: {str(e)}")
        raise e

if __name__ == "__main__":
    main() 