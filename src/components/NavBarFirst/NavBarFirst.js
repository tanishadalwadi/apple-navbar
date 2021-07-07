import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AiFillApple, AiOutlineSearch, AiOutlineShopping } from "react-icons/ai";
import './NavBarFirst.css';
import { useState } from "react"
import { Link } from "react-router-dom"
import NavBarSecond from '../NavBarSecond/NavBarSecond'
import SearchBar from '../SearchBar/SearchBar'

const NavBarFirst = () => {
    const [bgColor, setBgColor] = useState("#333") // for changing the background of second level Nav
    const [show, setShow] = useState(false)
    const [search, setSearch] = useState(false) //state of visibilty of links

    function handleSearch () {
        setShow(prev => !prev) 
        setSearch(true)
    }
    return (
        <nav>
            <div className="firstNav" style={{backgroundColor:bgColor}}>
            <ul>
                <li style={{visibility:search ? 'hidden' : 'visible'}}><Link to="/" onClick={()=> setBgColor("#333")}><AiFillApple size={20}/></Link></li>
                <li style={{visibility:search ? 'hidden' : 'visible'}}><Link to="/mac"onClick={()=> setBgColor("#333")}>Mac</Link></li>
                <li style={{visibility:search ? 'hidden' : 'visible'}}><Link to="/ipad" onClick={()=> setBgColor("#333")}>iPad</Link></li>
                <li style={{visibility:search ? 'hidden' : 'visible'}}><Link to="/iphone" onClick={()=> setBgColor("#0a0a0a")}>iPhone</Link></li>
                <li style={{visibility:search ? 'hidden' : 'visible'}}><Link to="/watch" onClick={()=> setBgColor("#333")}>Watch</Link></li>
                <li style={{visibility:search ? 'hidden' : 'visible'}}><Link to="/tv" onClick={()=> setBgColor("#0a0a0a")}>TV</Link></li>
                <li style={{visibility:search ? 'hidden' : 'visible'}}><Link to="/music" onClick={()=> setBgColor("#333")}>Music</Link></li>
                <li style={{visibility:search ? 'hidden' : 'visible'}}><Link to="/support" onClick={()=> setBgColor("#333")}>Support</Link></li>
                <li><Link to='/search' onClick={handleSearch}><AiOutlineSearch size={20}/></Link></li>
                <SearchBar show={show} setShow={setShow} setSearch={setSearch}/>
                <li><AiOutlineShopping size={20}/></li>
            </ul>
            </div>
        </nav>
    )
}

export default NavBarFirst
