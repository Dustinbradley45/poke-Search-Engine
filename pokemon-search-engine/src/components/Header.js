import React from 'react';
import FilterBar from './FilterBar.js';


const Header = (props) => { 
    return (
    <header className='Header__Component'>
        <h1 className='Title'>{props.Title}</h1>
            <h3 className='Subtitle'>{props.Subtitle}</h3>
            <FilterBar 
                onFilterSubmit={props.onFilterSubmit}/>
    </header>
    )}


export default Header;