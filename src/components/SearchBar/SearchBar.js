import React , { useRef, useEffect} from 'react'
import { useSpring, animated} from 'react-spring'
import { ImCross } from "react-icons/im";
import './SearchBar.css'


const SearchBar = ({show, setShow, setSearch}) => {
 const handleClose = ()=>{
    setShow(prev => !prev)
    setSearch(false)
 }

 const animation = useSpring({
     config:{
         duration: 250
     },
     opacity: show ? 1 : 0, 
     transform : show ? `translateX(0%)` : `translateX(-100%)`
 })
    return ( 
    <> 
    {show ? (
        <div show={show} className="search" style={animation}>
            <input type="text" class="searchTerm" placeholder="Search apple.com?" label="Search apple.com?"/><ImCross onClick={()=>handleClose()} size={15}/>
            
       </div>
       
    ): null}
    </>
    )
}

export default SearchBar
