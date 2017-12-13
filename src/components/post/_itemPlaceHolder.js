import React, { Component } from 'react'

class PlaceHolderLoadding extends Component {
    _item = (key) => {
        return <div className="wrap-item" key={key}>
            <div className="timeline-wrapper">
                <div className="timeline-item">
                    <div className="animated-background">
                        <div className="background-masker header-image"></div>
                        <div className="background-masker content-top"></div>
                        <div className="background-masker content-second-line"></div>
                        <div className="background-masker content-second-end"></div>
                        <div className="background-masker content-third-line"></div>
                        <div className="background-masker desc-first-line"></div>
                    </div>
                </div>
            </div>
        </div>;
    }
    item = () => {
        const { itemRepeat } = this.props;

        if (typeof itemRepeat === 'undefined') return;

        let i = 0, arrItem = [];
        for (; i < itemRepeat; i++) {
            arrItem.push(this._item(i));
        }
        
        return arrItem;
    }

    render() {
        return (
            this.item()
        )
    }
}

export default PlaceHolderLoadding;
