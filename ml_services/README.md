# ML Service for Adaptive Learning System

This service provides the machine learning component for the Adaptive Learning System, implementing K-means clustering for user profiling and course recommendations.

## Setup

1. Create a virtual environment:
```bash
python -m venv venv
```

2. Activate the virtual environment:
- Windows:
```bash
venv\Scripts\activate
```
- Unix/MacOS:
```bash
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

## Project Structure

- `app.py`: Flask application with API endpoints
- `model/`
  - `train.py`: Script for training the K-means model
  - `predict.py`: Functions for making predictions
- `data/`: Directory for training data

## Usage

1. Create sample data:  
```bash
python create_sample_data.py
```

2. Train the model:
```bash
python model/train.py
```

3. Run the Flask application:
```bash
python app.py
```


## API Endpoints

- `GET /health`: Health check endpoint
- `POST /predict`: Get predictions and recommendations
  - Input: JSON with user preferences and skills
  - Output: Cluster assignment and course recommendations

## Data Format

The prediction endpoint expects JSON data in the following format:
```json
{
    "skills": ["python", "data_analysis"],
    "interests": ["machine_learning", "web_development"],
    "time_commitment": 10,
    "experience_level": "beginner"
}
``` 