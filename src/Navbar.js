import React from "react";
import styled from "styled-components";
const Nav = styled.div`   
width: 100%;
height: 70px;
background-color: #00cccc;
display: flex;
justify-content: space-between`;

const Title = styled.div`
font-family: Arial, sans-serif;
font-size: 30px;
text-transform: uppercase;
margin: 10px;
margin-left: 20px
`
const Cartcontainer = styled.div`position: relative`;

const Cartimg = styled.img`  width: 60px;
marginRight: 20px`;

const Cartcount = styled.span`
top: -10;
position: absolute;

`
class Navbar extends React.Component {

    render() {
        const { cartcount } = this.props;
        return (
            <>
                <Nav >
                    <Title>Movie App</Title>
                    <Cartcontainer>
                        <Cartimg src="https://cdn-icons-png.flaticon.com/128/6737/6737614.png" alt="cartbutton" style={styles.cartImg}></Cartimg>
                        <Cartcount style={styles.cartCount}>{cartcount}</Cartcount>
                    </Cartcontainer>
                </Nav>

            </>
        )
    }
}

export default Navbar;

const styles = {
    nav: {
        width: "100%",
        height: 70,
        background: "#00cccc",
        display: "flex",
        justifyContent: "space-between"
    },

    Title: {
        fontFamily: "Arial, sans-serif",
        fontSize: "30px",
        textTransform: "Uppercase",
        margin: "10px",
        marginLeft: "20px"

    },
    cartContainer: {
        position: "relative"
    },
    cartCount: {

        top: -10,
        position: "absolute",
        left: 50


    },
    cartImg: {
        width: "60px",
        marginRight: "20px",

    }
}