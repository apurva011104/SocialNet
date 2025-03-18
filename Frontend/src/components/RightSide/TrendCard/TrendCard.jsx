import React from 'react';
import './TrendCard.css';
import {Trends} from '../../data/TrendData.js';

const TrendCard = () => {
  return (
    <div className='trend-card'>
        <h2>What's happening?</h2>
        <div className="trends">
          {Trends.map((trend)=>{
            return(
              <div className="trend">
                <p className="trend-name">#{trend.name}</p>
                <p className="trend-posts">{trend.posts} posts</p>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default TrendCard
