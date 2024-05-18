import pickle
from sklearn.feature_extraction.text import TfidfVectorizer

# Load the trained model and required components
with open('assets/models/sentence_list.pkl', 'rb') as file:
    sentence_list = pickle.load(file)
print(f"Loaded sentence list: {sentence_list}")

with open('assets/models/corpus.pkl', 'rb') as file:
    corpus = pickle.load(file)
print(f"Loaded corpus: {corpus}")

# Ensure corpus is a list of documents
if isinstance(corpus, str):
    corpus = [corpus]

# Initialize TF-IDF vectorizer
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(corpus)
print(f"TF-IDF matrix shape: {X.shape}")

# Test response generation
def generate_response(user_input):
    user_input_vec = vectorizer.transform([user_input])
    best_match_idx = (X * user_input_vec.T).toarray().argmax()
    return sentence_list[best_match_idx]

user_input = "hello"
response = generate_response(user_input)
print(f"Response to '{user_input}': {response}")
