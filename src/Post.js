import React from 'react'
import PropTypes from 'prop-types'

function Post({id,title}){
    return(
        <div className="post">
            <div className="post_title">{title}</div>
            <img className="post_img" src={`https://source.unsplash.com/random?sig=${id}`}/>
        </div>
    )
}

Post.prototype = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
}

export default Post;