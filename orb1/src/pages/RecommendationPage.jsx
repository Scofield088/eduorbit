import React, { useState } from "react";
import "./RecommendationPage.css";

const recommendations = {
  "Machine Learning": [
    { type: "Book", name: "Hands-On Machine Learning with Scikit-Learn and TensorFlow", url: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/" },
    { type: "Website", name: "Kaggle", url: "https://www.kaggle.com" },
    { type: "YouTube", name: "3Blue1Brown's Neural Networks Series", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9KDpFZDwUgle1HXp6_8" },
  ],
  "Web Development": [
    { type: "Book", name: "Eloquent JavaScript", url: "https://eloquentjavascript.net/" },
    { type: "Website", name: "freeCodeCamp", url: "https://www.freecodecamp.org" },
    { type: "YouTube", name: "Traversy Media", url: "https://www.youtube.com/c/TraversyMedia" },
  ],
  "Data Science": [
    { type: "Book", name: "Python for Data Analysis", url: "https://wesmckinney.com/book/" },
    { type: "Website", name: "Towards Data Science", url: "https://towardsdatascience.com" },
    { type: "YouTube", name: "StatQuest with Josh Starmer", url: "https://www.youtube.com/c/joshstarmer" },
  ],
  "Mathematics": [
    { type: "Book", name: "The Art of Problem Solving", url: "https://artofproblemsolving.com/" },
    { type: "Website", name: "Brilliant.org", url: "https://www.brilliant.org" },
    { type: "YouTube", name: "Numberphile", url: "https://www.youtube.com/user/numberphile" },
  ],
  "Java": [
    { type: "Book", name: "Effective Java", url: "https://www.oreilly.com/library/view/effective-java/9780134686097/" },
    { type: "Website", name: "Java Code Geeks", url: "https://www.javacodegeeks.com" },
    { type: "YouTube", name: "Java Brains", url: "https://www.youtube.com/user/koushks" },
  ],
  "Python": [
    { type: "Book", name: "Automate the Boring Stuff with Python", url: "https://automatetheboringstuff.com/" },
    { type: "Website", name: "Real Python", url: "https://realpython.com" },
    { type: "YouTube", name: "Corey Schafer", url: "https://www.youtube.com/c/Coreyms" },
  ],
  "Cybersecurity": [
    { type: "Book", name: "The Web Application Hacker's Handbook", url: "https://www.amazon.com/Web-Application-Hackers-Handbook-Exploiting/dp/1118026470" },
    { type: "Website", name: "OWASP", url: "https://owasp.org" },
    { type: "YouTube", name: "Hak5", url: "https://www.youtube.com/c/hak5" },
  ],
  "Artificial Intelligence": [
    { type: "Book", name: "Artificial Intelligence: A Modern Approach", url: "https://www.pearson.com" },
    { type: "Website", name: "AI OpenAI Blog", url: "https://openai.com/blog/" },
    { type: "YouTube", name: "Lex Fridman AI Podcasts", url: "https://www.youtube.com/c/lexfridman" },
  ],
  "Database Management": [
    { type: "Book", name: "Database System Concepts", url: "https://www.db-book.com/" },
    { type: "Website", name: "SQLZoo", url: "https://sqlzoo.net" },
    { type: "YouTube", name: "The Net Ninja - SQL Tutorials", url: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9jLYyp2Sg6A4UAqBfFQhkxO" },
  ],
  "Operating Systems": [
    { type: "Book", name: "Operating System Concepts", url: "https://www.os-book.com/" },
    { type: "Website", name: "TutorialsPoint - OS", url: "https://www.tutorialspoint.com/operating_system/index.htm" },
    { type: "YouTube", name: "Gate Smashers OS Series", url: "https://www.youtube.com/playlist?list=PLbRMhDVUMnge8FhrlYmbYEx7fi2OQl_0T" },
  ],
  "Computer Networks": [
    { type: "Book", name: "Computer Networking: A Top-Down Approach", url: "https://www.pearson.com/store/p/computer-networking-a-top-down-approach/P100000855320" },
    { type: "Website", name: "Cisco Networking Academy", url: "https://www.netacad.com/" },
    { type: "YouTube", name: "Neso Academy - Networking", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRhX6r2uhhlubuF5QextdCSM" },
  ],
  "C Programming": [
    { type: "Book", name: "The C Programming Language", url: "https://www.pearson.com/store/p/the-c-programming-language/P100000853919" },
    { type: "Website", name: "GeeksforGeeks C Programming", url: "https://www.geeksforgeeks.org/c-programming-language/" },
    { type: "YouTube", name: "Programming Knowledge C Tutorials", url: "https://www.youtube.com/playlist?list=PL920DB4FB0904F4AC" },
  ],
  "Cloud Computing": [
    { type: "Book", name: "Cloud Computing Concepts, Technology & Architecture", url: "https://www.amazon.com/Cloud-Computing-Concepts-Technology-Architecture/dp/0133387526" },
    { type: "Website", name: "AWS Cloud Training", url: "https://aws.amazon.com/training/" },
    { type: "YouTube", name: "Google Cloud Platform Tutorials", url: "https://www.youtube.com/user/googlecloudplatform" },
  ],
  // Continue adding additional topics similarly...
};

const RecommendationPage = () => {
  const [topic, setTopic] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const lowercasedTopic = topic.toLowerCase();
    const recs = Object.entries(recommendations).find(([key]) => key.toLowerCase() === lowercasedTopic)?.[1] || [];
    setResults(recs);
  };

  return (
    <div className="recommendation-page">
      <h1>Recommendation System</h1>
      <input
        type="text"
        placeholder="Enter a topic (e.g., Machine Learning)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <button onClick={handleSearch}>Get Recommendations</button>
      <div className="results">
        {results.length > 0 ? (
          results.map((rec, index) => (
            <div key={index} className="recommendation">
              <p>
                <strong>{rec.type}:</strong>{" "}
                {rec.url ? (
                  <a href={rec.url} target="_blank" rel="noopener noreferrer">
                    {rec.name}
                  </a>
                ) : (
                  rec.name
                )}
              </p>
            </div>
          ))
        ) : (
          <p className="rec">No recommendations found for the entered topic.</p>
        )}
      </div>
    </div>
  );
};

export default RecommendationPage;
