import React from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';

const LikeButton = ({ isLike, handleLike, handleUnLike }) => {
    return (
        <>
            {
                isLike
                    ? <FavoriteIcon style={{ color: "red" }} className="i" onClick={handleUnLike} />
                    : <FavoriteBorderOutlinedIcon className="i" onClick={handleLike} />
            }
        </>
    )
}

export default LikeButton
