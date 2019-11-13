import React, { Component } from 'react';
import NavBar from "../components/NavBar";
import axios from '../axios'
import Footer from "../components/Footer";
import config from "../config";

export default class HomeScreen extends Component {
    state = {
        merchandises: []

    };

    componentDidMount() {
        axios
            .get(config.rootPath + "/api/merchandise")
            .then(data => {
                console.log(data.data);
                this.setState({
                    merchandises: data.data
                });
            })
            .catch(err => console.error(err));
    }
    render() {

        return (
            <div>
                <NavBar
                    username={this.props.username}
                    onLogin={this.props.onLogin}
                />
                <div className="row">
                    <div className="col-4 shopping1">
                        <a>
                            <div className="shopping2">
                                <p className="shopping3" >
                                    Introducing Your
                                    New Workout Wardrobe
                                </p>

                                <a href="/shop">
                                    <button className="shopping4">
                                        Start Shopping
                                    </button>
                                </a>
                            </div>
                        </a>
                    </div>
                    <div className="col-8 " >
                        <img className="imgHome" src="https://images.unsplash.com/photo-1556452577-546c26ca6e66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80" alt="" />
                    </div>
                </div>
                <div>
                    <p></p>
                </div>
                <div className="row">
                    <div className="col-4" >
                        <a href="/about" >
                            <img className="images" src="https://images.pexels.com/photos/878358/pexels-photo-878358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                        </a>
                    </div>
                    <div className="col-4">
                        <a href="/shop">
                            <img className="images" src="https://images.pexels.com/photos/1254502/pexels-photo-1254502.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt=""/>
                        </a>
                    </div>
                    <div className="col-4">
                        <a href="#">
                            <img className="images" src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="text-center textHome">
                    <p>
                        LATEST ARRIVALS
                    </p>
                </div>
                <div className="row">
                    <div className="col-3">
                        <a href="/merchandise/5dca71c440ae4e0c98a3342f">
                            <img className="images1" src="https://i.imgur.com/1B28o5M.jpg" alt=""/>
                        </a>
                    </div>
                    <div className="col-3">
                        <a href="/merchandise/5dca707f40ae4e0c98a33419">
                            <img className="images1" src="https://i.imgur.com/oB2yYlG.jpg" alt=""/>
                        </a>
                    </div>
                    <div className="col-3">
                        <a href="/merchandise/5dca71e040ae4e0c98a33431">
                            <img className="images1" src="https://i.imgur.com/hfSfzmN.jpg" alt=""/>
                        </a>
                    </div>
                    <div className="col-3">
                        <a href="/merchandise/5dca723040ae4e0c98a33437">
                            <img className="images1" src="https://i.imgur.com/LWCjUBw.jpg" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="text-center textHome2">
                    <p>FOLLOW US ON</p>
                    <p>INSTAGRAM</p>
                </div>
                <Footer />
            </div>
        )
    }
}
