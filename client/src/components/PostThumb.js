import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';

const PostThumb = ({posts, result}) => {
    const { theme } = useSelector(state => state)

    if(result === 0) return <h2 className="text-center text-danger">No Post</h2>

    return (
        <div className="post_thumb">
            {
                posts.map(post => (
                    <Link key={post._id} to={`/post/${post._id}`}>
                        <div className="post_thumb_display">
                        <img src={post.images[0].url} alt={post.images[0].url} />
                        <div className="post_thumb_menu">
                            <FavoriteBorderOutlinedIcon style={{ color: "white" }} className="like" />{post.likes.length}
                            <ChatBubbleOutlineRoundedIcon style={{ color: "white" }} className="like" />{post.comments.length}
                        </div>
                            {/* {
                                post.images[0].url.match(/video/i)
                                ?<video controls src={post.images[0].url} alt={post.images[0].url}
                                style={{filter: theme ? 'invert(1)' : 'invert(0)'}} />

                                :<img src={post.images[0].url} alt={post.images[0].url}
                                style={{filter: theme ? 'invert(1)' : 'invert(0)'}} />
                            }

                            <div className="post_thumb_menu">
                                <i className="far fa-heart">{post.likes.length}</i>
                                <i className="far fa-comment">{post.comments.length}</i>
                            </div> */}
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default PostThumb