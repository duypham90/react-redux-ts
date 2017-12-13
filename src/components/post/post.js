import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreaters from '../../redux/actionCreater';
import ItemView from './_itemView';
import PlaceHolderLoadding from './_itemPlaceHolder';
import ErrorTemplate from '../layout/error';

class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            offset: 0,
            limit: 12,
            itemRepeat: 8    
        };
        this.handleLoadMore = this.handleLoadMore.bind(this);
    }

    componentDidMount(){
        this.makeRequest();
    }

    makeRequest = () => {
        const { offset, limit } = this.state;
        this.props.getNew(offset, limit);
    }

    handleLoadMore(){
        this.setState((prevState) => ({
            ...prevState, offset: prevState.offset + prevState.limit
        }), () => {
            this.makeRequest();
        });
    }

    showLoading() {
        const { isLoading } = this.props;
        const { itemRepeat } = this.state;
        if (isLoading) return <PlaceHolderLoadding itemRepeat={itemRepeat} />;
        return;
    }

    handleError() {
        const { error } = this.props;
        if (error) return <ErrorTemplate/>;
    }

    render() {
        const { arrNews } = this.props;
        return (
            <div className="row">
                <div className="list-items">
                    { this.handleError() }
                    <ItemView data={arrNews}/>
                    {this.showLoading()}
                </div>
                <div className="row" key="1">
                    <div className="btn-load-more">
                        <button onClick={this.handleLoadMore}>LOAD MORE</button>
                    </div>
                </div>      
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    arrNews: state.arrNews,
    isLoading: state.isLoading,
    error: state.error
});

export default connect(mapStateToProps, actionCreaters)(Post);
