import React from "react";
import Moviecard from "./moviecard";
class Movielist extends React.Component {


    render() {
        console.log(this.props);
        const { movie, increasestar, decreasestar, fav, iscart } = this.props;

        return (
            <>

                {movie.map((movie) => {
                    return <Moviecard movies={movie} addstar={increasestar} minusstar={decreasestar} addfav={fav} incart={iscart} />
                })}


            </>
        )
    }
}

export default Movielist;