import React from "react";


class Moviecard extends React.Component {



    render() {


        const { title, plot, price, rating, stars, poster, favbut, cart } = this.props.movies;
        const { addstar, minusstar, addfav, incart } = this.props;
        console.log(this.props);
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="poster" src={poster} height={100} />
                    </div>

                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">{price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img alt="minus" className="str-btn" src="https://cdn-icons-png.flaticon.com/128/9146/9146915.png" onClick={() => { minusstar(this.props.movies) }} />
                                <img alt="star" className="stars" src="https://cdn-icons-png.flaticon.com/128/10134/10134048.png" />
                                <img alt="plus" className="str-btn" src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png" onClick={() => { addstar(this.props.movies) }} />

                                <span>{stars}</span>
                            </div>
                            {favbut ? <button className="favourite-btn" onClick={() => { addfav(this.props.movies) }}>favourite</button> : <button className="unfavourite-btn" onClick={() => { addfav(this.props.movies) }}>unfavourite</button>}

                            {cart ? <button className="cart-btn" onClick={() => { incart(this.props.movies) }}>add to cart</button> : <button className="recart-btn" onClick={() => { incart(this.props.movies) }}>remove from cart</button>}

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Moviecard;