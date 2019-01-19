import React from 'react';
import styles from '../styles/index.scss';


let PokeCard = (props) => {
    return (
        <div className='pokeCardContainer'>
            <div className='pokeCardContents'>
                <h3 className='pokeName'>{props.pokeName}</h3>
                <h4 className='pokeDescription'>{props.pokeDescription}</h4>
            </div>
        </div>
    )
}
    
  export default PokeCard 
   // {/* <FinalPokeCard */}
        // name={this.state.currentSelection.pokemonnmae}