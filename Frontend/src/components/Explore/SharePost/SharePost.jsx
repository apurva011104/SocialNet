import React, {useState,useRef} from 'react';
import './SharePost.css';
import ProfileImage from '../../../img/aya.jpeg';


const SharePost = () => {
    const[image,setImage]=useState(null);
    const imageRef=useRef();

    const onImageChange=(event)=>{
        let img=event.target.files[0];
        if(event.target.files && img){
            setImage({
                image:URL.createObjectURL(img)
            });
        }
    }

    return (
        <div className='SharePost'>
            <div className='post'>
                <div className='share-thoughts'>
                    <img className='profile-image' src={ProfileImage} alt=""/>
                    <input className="thought" type="text" placeholder='What is happening?!'/>
                </div>
                {
                    image && (
                        <div className='preview-image'>
                            <i className="fa-solid fa-xmark" style={{color: "#74C0FC"}} onClick={()=>setImage(null)}></i>
                            <img src={image.image} alt=""/>
                        </div>
                    )
                }
            </div>
            <div className="share">
                <div class="share-options">
                    <div className='option' >
                        <i class="fa-regular fa-face-smile"></i>
                    </div>
                    <div className='option' onClick={()=>imageRef.current.click()} >
                        <i class="fa-regular fa-image" ></i>
                    </div>
                    <div className='option'>
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <div className='option'>
                        <i class="fa-regular fa-calendar"></i>
                    </div>
                </div>
                <button className='post-button'>Post</button>
                <div style={{display: "none"}}>
                    <input type='file' name='myImage' ref={imageRef} onChange={onImageChange}/>
                </div>
            </div>
        </div>
    )
}

export default SharePost
