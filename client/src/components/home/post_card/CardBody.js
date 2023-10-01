import React from 'react'

const CardBody = ({ post }) => {
    return (
        <div className='card_body'>
            <div className="card_body-content">
                <span>{post.content}</span>
            </div>
        </div>
    )
}

export default CardBody
