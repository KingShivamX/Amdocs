import pandas as pd
import numpy as np
import random
import os

# Define possible values for each feature
SKILLS = ['python', 'java', 'javascript', 'html', 'css', 'sql', 'data_analysis', 
          'machine_learning', 'web_development', 'mobile_development']

INTERESTS = ['web_development', 'mobile_apps', 'data_science', 'machine_learning',
            'cloud_computing', 'devops', 'cybersecurity', 'game_development']

EXPERIENCE_LEVELS = ['beginner', 'intermediate', 'advanced']

def generate_user_profile():
    """Generate a single user profile with random but realistic data"""
    # Random number of skills (2-5)
    num_skills = random.randint(2, 5)
    skills = random.sample(SKILLS, num_skills)
    
    # Random number of interests (1-3)
    num_interests = random.randint(1, 3)
    interests = random.sample(INTERESTS, num_interests)
    
    # Random time commitment (2-20 hours per week)
    time_commitment = random.randint(2, 20)
    
    # Random experience level
    experience_level = random.choice(EXPERIENCE_LEVELS)
    
    return {
        'skills': ','.join(skills),
        'interests': ','.join(interests),
        'time_commitment': time_commitment,
        'experience_level': experience_level
    }

def create_sample_dataset(num_users=1000):
    """Create a sample dataset with specified number of users"""
    users = []
    for _ in range(num_users):
        users.append(generate_user_profile())
    
    # Convert to DataFrame
    df = pd.DataFrame(users)
    
    # Get the correct path for saving
    current_dir = os.path.dirname(os.path.abspath(__file__))
    data_dir = os.path.join(os.path.dirname(current_dir), 'data')
    
    # Create data directory if it doesn't exist
    os.makedirs(data_dir, exist_ok=True)
    
    # Save to CSV
    output_path = os.path.join(data_dir, 'user_profiles.csv')
    df.to_csv(output_path, index=False)
    print(f"Created sample dataset with {num_users} users")
    print(f"Saved to: {output_path}")
    print("\nFirst few records:")
    print(df.head())
    
    return df

if __name__ == "__main__":
    create_sample_dataset() 