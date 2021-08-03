import React from 'react'
import {Link } from "react-router-dom"
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket,user }, dispatch ] = useStateValue();
    const login=()=>{
        if(user){
        auth.signOut();
        }
    }


    console.log(basket);
    return (
        <nav className="header">
        <Link to="/">
            <img className="header__logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwhRFb4AOUyRXMA5ma5Cmxt7Y3Wowm5tBJyg&usqp=CAU"
            alt=" "/>
            </Link>
            <div className="header__search">
            <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">

                <Link to={!user && "/login"} className="header__link">
                <div onClick={login} className="header__option">
                    <span className="header__optionLineOne">Hello {user?.email}</span>
                    <span className="header__optionLineTwo">{user ? 'sign out ': 'sign in'}</span>
                    </div>
                </Link>
                {/* 2 */}
                <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Return</span>
                    <span className="header__optionLineTwo">& order</span>
                    </div>
                </Link>
                {/* 3 */}
                <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                        <span className="header__optionLineTwo header__basketCount" > {basket?.length} </span>
                    </div>
                </Link>




            </div>



        </nav>
        
    )
}

export default Header
