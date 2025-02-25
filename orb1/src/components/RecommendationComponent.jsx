import React from "react";
import { useNavigate } from "react-router-dom";
import "./RecommendationComponent.css";

const RecommendationComponent = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/recommendation"); 
    };

    return (
        <div className="recommendation-component">
            <div className="recommendation-card">
                <h2>Personalized Learning Recommendations</h2>
                <p>
                    Discover tailored resources to accelerate your learning journey! Our 
                    recommendation system provides a curated list of textbooks, YouTube 
                    channels, and websites based on your interests and topics of study.
                </p>
                <p>
                    Simply enter a topic, and we'll suggest the best resources to help you 
                    master the subject.
                </p>
                <button className="recommendation-button" onClick={handleRedirect}>
                    Explore Recommendations
                </button>
            </div>
        </div>
    );
};

export default RecommendationComponent;
