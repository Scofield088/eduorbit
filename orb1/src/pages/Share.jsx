import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Share.css";

const Share = () => {
  const [profileLinks, setProfileLinks] = useState({
    linkedin: "",
    leetcode: "",
    github: "",
    portfolio: "",
  });
  const [achievements, setAchievements] = useState("");
  const [roadmap, setRoadmap] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch all shared posts
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/api/share");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPost = {
        profileLinks,
        achievements,
        roadmap,
        suggestions,
      };
      await axios.post("/api/share", newPost);
      alert("Post shared successfully!");
      setProfileLinks({ linkedin: "", leetcode: "", github: "", portfolio: "" });
      setAchievements("");
      setRoadmap("");
      setSuggestions("");
    } catch (error) {
      console.error("Error sharing post:", error);
    }
  };

  return (
    <div className="share-page">
      <h1>Share Your Journey</h1>
      <form className="share-form" onSubmit={handleSubmit}>
        <div className="section">
          <h3>Share Your Profiles</h3>
          <input
            type="url"
            placeholder="LinkedIn Profile"
            value={profileLinks.linkedin}
            onChange={(e) =>
              setProfileLinks({ ...profileLinks, linkedin: e.target.value })
            }
          />
          <input
            type="url"
            placeholder="LeetCode Profile"
            value={profileLinks.leetcode}
            onChange={(e) =>
              setProfileLinks({ ...profileLinks, leetcode: e.target.value })
            }
          />
          <input
            type="url"
            placeholder="GitHub Profile"
            value={profileLinks.github}
            onChange={(e) =>
              setProfileLinks({ ...profileLinks, github: e.target.value })
            }
          />
          <input
            type="url"
            placeholder="Portfolio"
            value={profileLinks.portfolio}
            onChange={(e) =>
              setProfileLinks({ ...profileLinks, portfolio: e.target.value })
            }
          />
        </div>
        <div className="section">
          <h3>Share Your Achievements</h3>
          <textarea
            placeholder="Achievements"
            value={achievements}
            onChange={(e) => setAchievements(e.target.value)}
          ></textarea>
        </div>
        <div className="section">
          <h3>Share Your Roadmap</h3>
          <textarea
            placeholder="Roadmap"
            value={roadmap}
            onChange={(e) => setRoadmap(e.target.value)}
          ></textarea>
        </div>
        <div className="section">
          <h3>Ask or Provide Suggestions</h3>
          <textarea
            placeholder="Suggestions"
            value={suggestions}
            onChange={(e) => setSuggestions(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="share-btn">Share</button>
      </form>

      <h2>Shared Content</h2>
      <div className="posts">
        {posts.map((post, index) => (
          <div key={index} className="post">
            <h3>Profiles:</h3>
            <ul>
              {post.profileLinks.linkedin && (
                <li>
                  <a href={post.profileLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
              )}
              {post.profileLinks.leetcode && (
                <li>
                  <a href={post.profileLinks.leetcode} target="_blank" rel="noopener noreferrer">
                    LeetCode
                  </a>
                </li>
              )}
              {post.profileLinks.github && (
                <li>
                  <a href={post.profileLinks.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
              )}
              {post.profileLinks.portfolio && (
                <li>
                  <a href={post.profileLinks.portfolio} target="_blank" rel="noopener noreferrer">
                    Portfolio
                  </a>
                </li>
              )}
            </ul>
            <h3>Achievements:</h3>
            <p>{post.achievements}</p>
            <h3>Roadmap:</h3>
            <p>{post.roadmap}</p>
            <h3>Suggestions:</h3>
            <p>{post.suggestions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Share; 