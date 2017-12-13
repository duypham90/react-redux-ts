import React, { Component } from 'react'

export default class ItemView extends Component {
    render() {
        const { data } = this.props;
        return (
            data.map((item, i) =>
                <div className="wrap-item" key={i}>
                    <div className="item">
                        <div className="item-thumbnail">
                            <a href={item.slug}>
                                <img src={item.thumbnail} alt={item.title} />
                            </a>
                        </div>
                        <div className="item-title">
                            <a>{item.title}</a>
                        </div>
                        <div className="item-meta">
                            <span className="item-view">{item.views} lượt xem</span>
                            <span className="item-publish-date">{item.published_at}</span>
                        </div>                      
                        <div className="item-desc">
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            )
        )
    }
}
