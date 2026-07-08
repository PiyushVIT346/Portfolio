import React, { useState, useEffect } from 'react';
import '../Styles/Badges.css';

export const Badges = () => {
    // State to store Codeforces data
    const [cfProfile, setCfProfile] = useState(null);

    // Fetch Codeforces data on component mount
    useEffect(() => {
        const handle = 'piyush.23bai10346';
        
        fetch(`https://codeforces.com/api/user.info?handles=${handle}`)
            .then(response => response.json())
            .then(data => {
                if (data.status === 'OK') {
                    setCfProfile(data.result[0]);
                }
            })
            .catch(error => console.error("Error fetching Codeforces data:", error));
    }, []);

    const leetcodeBadges = [
        { name: 'LeetCode Pandas', imgUrl: 'https://assets.leetcode.com/static_assets/others/Introduction_to_Pandas.gif' },
        { name: 'LeetCode 50 Days code', imgUrl: 'https://assets.leetcode.com/static_assets/marketing/2024-50.gif' },
        { name: 'LeetCode November Batch', imgUrl: 'https://assets.leetcode.com/static_assets/public/images/badges/2024/gif/2024-11.gif' },
        { name: 'LeetCode June Batch', imgUrl: 'https://assets.leetcode.com/static_assets/marketing/6.gif' },
        { name: 'LeetCode 75 Days', imgUrl:'https://assets.leetcode.com/static_assets/others/LeetCode_75.gif'},
        { name: 'SQL 50', imgUrl:'https://assets.leetcode.com/static_assets/others/Top_SQL_50.gif'},
        { name: 'Data Navigator', imgUrl: 'https://assets.leetcode.com/static_assets/others/Quest_data.gif'}
    ];

    const hackerrankBadges = [
        { name: 'HackerRank Problem Solving', imgUrl: 'https://hrcdn.net/fcore/assets/badges/problem-solving-ecaf59a612.svg' },
        { name: 'HackerRank CPP', imgUrl: 'https://hrcdn.net/fcore/assets/badges/cpp-739b350881.svg' },
        { name: 'HackerRank Java', imgUrl: 'https://hrcdn.net/fcore/assets/badges/java-9d05b1f559.svg' },
        { name: 'HackerRank Python', imgUrl: 'https://hrcdn.net/fcore/assets/badges/python-f70befd824.svg' },
    ];

    // Add your AWS Credly Badges here
    const awsBadges = [
        { 
            name: 'AWS Certified AI Practitioner', 
            imgUrl: 'https://images.credly.com/size/680x680/images/4d4693bb-530e-4bca-9327-de07f3aa2348/image.png' 
        },
        { 
            name: 'AWS Cloud Quest: Cloud Practitioner - Training Badge', 
            imgUrl: 'https://images.credly.com/size/680x680/images/30816e43-2550-4e1c-be22-3f03c5573bb9/blob' 
        },
        {
            name: 'AWS Cloud Quest: Generative AI Practitioner - Training Badge Badge',
            imgUrl: 'https://images.credly.com/size/680x680/images/15fa08e6-ca73-4fa3-94ed-c36f7f157313/blob'
        },
        {
            name: 'AWS Cloud Quest: Solutions Architect - Training Badge',
            imgUrl: 'https://images.credly.com/size/680x680/images/320bfb8f-e722-41b9-a70a-c3fb07402981/blob'
        }
    ];

    return (
        <div className="badges-container">
            {/* Codeforces Profile Section */}
            <div className="badge-section">
                <h3>Codeforces Profile</h3>
                <div className="badge-list">
                    {cfProfile ? (
                        <a 
                            href={`https://codeforces.com/profile/${cfProfile.handle}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="cf-card"
                        >
                            <img src={cfProfile.titlePhoto} alt={`${cfProfile.handle} avatar`} className="cf-avatar" />
                            <div className="cf-info">
                                <h4>{cfProfile.handle}</h4>
                                <p>Rating: <span className="cf-highlight">{cfProfile.rating || 'Unrated'}</span></p>
                                <p>Rank: <span className="cf-highlight">{cfProfile.rank || 'Unrated'}</span></p>
                            </div>
                        </a>
                    ) : (
                        <p className="loading-text">Loading Codeforces stats...</p>
                    )}
                </div>
            </div>

            {/* AWS Badges Section */}
            <div className="badge-section">
                <h3>AWS Certifications</h3>
                <div className="badge-list">
                    {awsBadges.map((badge, index) => (
                        <div className="badge-item" key={index}>
                            <img src={badge.imgUrl} alt={badge.name} className="badge-img" />
                            <p>{badge.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="badge-section">
                <h3>LeetCode Badges</h3>
                <div className="badge-list">
                    {leetcodeBadges.map((badge, index) => (
                        <div className="badge-item" key={index}>
                            <img src={badge.imgUrl} alt={badge.name} className="badge-img" />
                            <p>{badge.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="badge-section">
                <h3>HackerRank Badges</h3>
                <div className="badge-list">
                    {hackerrankBadges.map((badge, index) => (
                        <div className="badge-item" key={index}>
                            <img src={badge.imgUrl} alt={badge.name} className="badge-img" />
                            <p>{badge.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};