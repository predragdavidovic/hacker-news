import React from 'react';
// import moment from 'moment'
import './style/style.css'

function Item(item) {
    const shortDate = item.created_at.substring(0,10);
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(item.comment_text, 'text/html');
    return(
        <article className="Story" key={item.id}>
            <div className="Story_container">
                <div className="Story_data">
                    <div className="Story_meta">
                        <span>
                            <a href={item.url}>{item.points} points</a>
                        </span>,
                        <span className="Story_separator">|
                        </span>
                        <span>
                            <a href={item.url}>
                                <span>pg</span>
                            </a>
                        </span>
                        <span className="Story_separator">|</span>
                        <span>
                            <a href={item.url}>{shortDate}</a>
                        </span>
                        <span className="Story_separator">|</span>
                        <span className="Story_link">
                            <a href={item.url}>by</a>
                        </span>
                        <span className="Story_separator">|</span>
                        <span className="Story_link">on: 
                            <a href={item.url}>
                                <span>{item.story_title}</span>
                            </a>
                        </span>
                        <div className="Story_comment">
                            <div dangerouslySetInnerHTML={{__html: htmlDoc.body.innerHTML}}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Item;