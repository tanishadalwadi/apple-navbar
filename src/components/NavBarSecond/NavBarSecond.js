import React from 'react'
import './NavBarSecond.css'


const NavBarSecond = ({products, bg}) => { 
    return (
        <div className="NavBottom" style={{backgroundColor:bg}}>
            <ul >
                {products.map((item)=> {
                    return (
                        <li key={item.id} >
                            {/* <img src={item.image} height="52px" width="54px" alt={item.name}></img>  */}
                            {/* to see this navbar with the icons please uncomment the above line (img tag).
                            The icons are not perfect but to get an idea on how it would look with icons. */}
                            <a href="#" className={bg==='#111113'? 'dark':'light'}>{item.name}</a>
                            <p class="isNew">{item.isNew?"New":""}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
    
}

export default NavBarSecond
