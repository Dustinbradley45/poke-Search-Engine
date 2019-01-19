import React from 'react';


const Footer = (props) => { 
    return (
        <footer className='Footer__component'>
            <p className='Placeholder'>{props.Placeholder}</p>
            <p className='Copyright'>{props.Copyright}</p>
        </footer>
    )
}

export default Footer;