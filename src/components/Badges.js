import React from 'react';
import '../Styles/Badges.css';  // Import CSS file

export const Badges = () => {
    // Replace with actual image URLs or badge data
    const leetcodeBadges = [
        { name: 'LeetCode Pandas', imgUrl: 'https://assets.leetcode.com/static_assets/others/Introduction_to_Pandas.gif' },
        { name: 'LeetCode 50 Days code', imgUrl: 'https://assets.leetcode.com/static_assets/marketing/2024-50.gif' },
        { name: 'LeetCode November Batch', imgUrl: 'https://assets.leetcode.com/static_assets/public/images/badges/2024/gif/2024-11.gif' },
    ];

    const hackerrankBadges = [
        { name: 'HackerRank Probem Solving', imgUrl: 'https://hrcdn.net/fcore/assets/badges/problem-solving-ecaf59a612.svg' },
        { name: 'HackerRank CPP', imgUrl: 'https://hrcdn.net/fcore/assets/badges/cpp-739b350881.svg' },
        { name: 'HackerRank Java', imgUrl: 'https://hrcdn.net/fcore/assets/badges/java-9d05b1f559.svg' },
        { name: 'HackeRank Python', imgUrl: 'https://hrcdn.net/fcore/assets/badges/python-f70befd824.svg' },
    ];

    return (
        <div className="badges-container">
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

