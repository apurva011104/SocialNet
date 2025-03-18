import React from 'react';
import './Post.css';
import Comment from '../../../img/comment.png';
import Share from '../../../img/share.png';
import Heart from '../../../img/like.png';
import NotLike from '../../../img/notlike.png';

const Post = ({data}) => {
    return (
        <div className='Post'>
            <div className='username'>
                <img src="" alt="" />
                <span>{data.username}</span>
            </div>
            <img className="post-image" src={data.img} alt=""/>
            <div className='reaction'>
                <div className='likes'>
                    <img src={data.liked?Heart: NotLike} alt=""/>
                    <span>{data.likes}</span>
                </div>
                <div className='comments'>
                    <img src={Comment} alt=""/>
                    <span>{data.commentCount}</span>
                </div>
                <img src={Share} alt=""/>
            </div>
            <div className='post-description'>
                <h5>{data.name}</h5>
                <p>{data.desc}</p>

            </div>
        </div>
    )
}

export default Post
