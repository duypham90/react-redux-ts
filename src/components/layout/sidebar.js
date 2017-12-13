import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../../styles/Navbar.css';

export default class SideBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            isFixed: false ,
            offsetTop: 100
        };
        this.fixedNavBar = this.fixedNavBar.bind(this)
    }

    fixedNavBar(){
        const { isFixed, offsetTop } = this.state;
        // window.scrollY > this.prev ? 
        // !isFixed && this.setState({ isFixed:true }) : isFixed && this.setState({ isFixed:false });
        window.scrollY > offsetTop ? 
        !isFixed && this.setState({ isFixed:true }) : isFixed && this.setState({ isFixed:false });
        this.prev = window.scrollY;
    }

    componentDidMount(){
        window.addEventListener('scroll',this.fixedNavBar);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.fixedNavBar);
    }

    render() {
        const classFixed = this.state.isFixed ? 'affix' : '';
        return (
            <nav className={"navbar nav-tick " + classFixed}>
                <div className="container">
                    <ul className="nav-menu">
                        <li><Link to="/">Trang chủ</Link></li>                    
                        <li><Link to="/cosplay">Cosplay</Link></li>
                        <li><Link to="/about">Nhân vật</Link></li>
                        <li><Link to="/topics">Tin tức anime</Link></li>
                        <li><Link to="/topics">Tin tức manga</Link></li>
                        <li><Link to="/topics">Văn hóa Nhật Bản</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
