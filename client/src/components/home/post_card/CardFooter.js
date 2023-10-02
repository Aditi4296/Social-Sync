import React from 'react'
import { Link } from 'react-router-dom'
import Send from '../../../images/send.svg'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';

const CardFooter = ({post}) => {
    return (
        <div className="card_footer">
            <div className="card_icon_menu">
                <div>
                    <FavoriteBorderOutlinedIcon className="i" />
                    <Link to={`/post/${post._id}`} className="text-dark">
                        <ChatBubbleOutlineRoundedIcon className="i" />
                    </Link>
                    <img src={Send} alt="Send" />
                </div>

                <BookmarkBorderRoundedIcon className="i" />
            </div>
            
            <div className="d-flex justify-content-between">
                <h6 style={{padding: '0 34px', cursor: "pointer"}}>
                    {post.likes.length}
                </h6>
                <h6 style={{padding: '0 25px', cursor: "pointer"}}>
                    {post.comments.length} comments
                </h6>
            </div>
        </div>
    )
}

export default CardFooter
