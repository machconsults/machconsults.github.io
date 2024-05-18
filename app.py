from flask import Flask, request, jsonify, render_template
import tensorflow as tf
import numpy as np

app = Flask(__name__)

# Load the trained model
model = tf.keras.models.load_model('path_to_your_model')

# Tokenizer for preprocessing text
tokenizer = tf.keras.preprocessing.text.Tokenizer()
with open('C:/Users/Pule/Downloads/Lubula/Data Science/Projects/Portfolio projects/html5up-aerial Mach/assets/models/tokenizer_config.json', 'r') as f:
    tokenizer_config = f.read()
tokenizer = tf.keras.preprocessing.text.tokenizer_from_json(tokenizer_config)

# Dummy response function using TensorFlow.js model
def generate_response(user_input):
    try:
        user_input = [user_input]
        user_input_seq = tokenizer.texts_to_sequences(user_input)
        user_input_padded = tf.keras.preprocessing.sequence.pad_sequences(user_input_seq, maxlen=MAX_SEQUENCE_LENGTH, padding='post')
        prediction = model.predict(user_input_padded)
        predicted_class = np.argmax(prediction, axis=-1)
        # You can have a predefined set of responses based on predicted_class
        response = "Your response based on predicted class"
        return response
    except Exception as e:
        app.logger.error(f"Error generating response: {e}")
        return "Sorry, there was an error processing your request."

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    try:
        user_input = request.json.get('message')
        app.logger.debug(f"Received user input: {user_input}")
        response = generate_response(user_input)
        app.logger.debug(f"Generated response: {response}")
        return jsonify({'response': response})
    except Exception as e:
        app.logger.error(f"Error in chat endpoint: {e}")
       
