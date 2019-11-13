import React, { Component } from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
// import ReactDOM from 'react-dom';
// import InputRange from 'react-input-range'
import PriceRange from '../components/PriceRange';
import axios from '../axios';
import config from "../config";
import MainContent from "../components/MainContent";


export default class ShopScreen extends Component {
    state = {
        mers: []
    };

    componentDidMount() {
        axios
            .get(config.rootPath + "/api/merchandise" + this.props.location.search)
            .then(data => {
                // console.log(data.data.data);
                this.setState({ mers: data.data.data });
                // console.log(this.state);
            })
            .catch(error => console.log(error));
    }

    render() {

        return (
            <div>
                <NavBar
                    username={this.props.username}
                    onLogin={this.props.onLogin}
                />
                {/* {this.state.images.length > 0 ? 
                    <Product img={this.state.images[0]}/> : ""} */}
                <h2>Filter by</h2>
                <div className="row">
                    <div className="filter col-2">
                        <div className="accordion" id="accordionExample">
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link " type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Collection
                                        </button>
                                    </h2>
                                </div>

                                <div id="collapseOne" className={`collapse ${!window.location.search || window.location.search.indexOf('types=') > -1 ? 'show' : ''}`} aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <ul className="list-filter">
                                            <li><a href="/shop">All</a></li>
                                            <li><a href="/shop?types=Coats and Jackets">Coats and Jackets</a></li>
                                            <li><a href="/shop?types=T-Shirts">T-Shirts</a></li>
                                            <li><a href="/shop?types=Shirts">Shirts</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Price
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseTwo" className={`collapse ${window.location.search.indexOf('minPrice=') > -1 ? 'show' : ''}`} aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <PriceRange price={this.props.location.search} />
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Size
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseThree" className={`collapse ${window.location.search.indexOf('size=') > -1 ? 'show' : ''}`} aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <ul className="list-filter">
                                            <li><a href="/shop?size=S">S</a></li>
                                            <li><a href="/shop?size=M">M</a></li>
                                            <li><a href="/shop?size=L">L</a></li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-10">
                        <MainContent mer={this.state.mers} />
                    </div>
                    <div className="container text-center col-3">
                        <ul className="pagination ">
                            <li className="page-item"><a className="page-link" href="/shop?page=1">Previous</a></li>
                            <li className="page-item"><a className="page-link" href="/shop?page=1">1</a></li>
                            <li className="page-item"><a className="page-link" href="/shop?page=2">2</a></li>
                            <li className="page-item"><a className="page-link" href="/shop?page=3">3</a></li>
                            <li className="page-item"><a className="page-link" href="/shop?page=3">Next</a></li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
