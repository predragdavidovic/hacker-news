import React from 'react';
import moment from 'moment'
import './style/style.css'

function Item(item) {
        const dateArray = [];
        const date = new Date(item.time*1000);
        dateArray.push(date.getFullYear(), date.getMonth(), date.getDate());
    return(
        <article className="Story">
            <div className="Story_container">
                <div className="Story_data">
                    <div className="Story_meta">
                        <span>
                            <a href={item.url}>{item.score} points</a>
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
                            <a href={item.url}>{moment(dateArray).fromNow(true)}</a>
                        </span>
                        <span className="Story_separator">|</span>
                        <span className="Story_link">
                            <a href={item.url}>by</a>
                        </span>
                        <span className="Story_separator">|</span>
                        <span className="Story_link">on: 
                            <a href={item.url}>
                                <span>{item.by}</span>
                            </a>
                        </span>
                        <div className="Story_comment">
                            <span>
                                <p>
                                    {item.title}
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Item;