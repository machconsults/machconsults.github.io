// Initialize TF-IDF object
const tfidf = new TfIdf();

// Add documents to the TF-IDF object
tfidf.addDocument("Mach Chatbot Data.txt");
tfidf.addDocument("Mach Chatbot Data.txt");

// Calculate inverse document frequency
tfidf.calculateInverseDocFreq();

// Example usage of TF-IDF
const documentToAnalyze = "User input or response to analyze";
const tfidfValues = tfidf.tfidf(documentToAnalyze);
console.log(tfidfValues); // Use the TF-IDF values for relevance or understanding
