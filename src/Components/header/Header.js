import './Header.css';
import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';


const Header = () =>(
    <div>  
        <div className='header'>
            <div className='headerLeft'>       
                <Link to="/"><img className='header_icon' src="https://cdn-www.bluestacks.com/bs-images/GameTile_Movie_Plus.jpg"></img></Link>
                <Link className='headerLink' to="/movies/popular"><span>Popular</span></Link>
                <Link  className='headerLink'  to="/movies/top_rated"><span>Top Rated</span></Link>
                <Link  className='headerLink'  to="/movies/upcoming"><span>Upcoming</span></Link>
            </div>
        </div>
    </div>
);

export default Header;