import { MoreVert } from "@mui/icons-material"
import "./post.css"
import axios from "axios";
import { useEffect, useState } from "react";
import {format} from "timeago.js"
import {Link} from "react-router-dom"



export default function Post({post}) {
    const [user,setUser]=useState({});
    const [like,setLike]= useState(post.likes.length)
    const [isLiked,setIsLiked]= useState(false)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    useEffect(() => {
        const fetchUser = async () => {
    
          const res = await axios.get(`/users?userId=${post.userId}`)
          setUser(res.data)
        }
        fetchUser();
      }, [post.userId])

    const likeHandler =()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to={`profile/${user.username}`}>
                    <img className="postProfileImg" src={user.profilePicture|| PF+"person/noAvatar.png"}/>
                    <span className="postUsername">{user.username}</span>
                    <span className="postDate">{format(post.createdAt)}</span>
                    </Link>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">
                    {post?.desc}
                    <img className="postImg" src={PF+post.img} alt="" />
                </span>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src={`${PF}like.png`} onClick={likeHandler} alt="" />
                    <img className="likeIcon" src={`${PF}heart.png`} onClick={likeHandler} alt="" />
                    <div className="postlikeCounter">{like} people like this</div>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} Comments</span>
                </div>
            </div>
        </div>

    </div>
  )
}

