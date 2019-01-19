import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import PokeCard from './components/PokeCard.js';
import Footer from './components/Footer.js';
import FilterBar from './components/FilterBar.js';

//put on components that may need to fetch info (Import axios from ‘axios’);
class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            typeSelect: null
        }
    }
        
   onFilterSubmit = (typeSelect) => {
       console.log(typeSelect)
    
        this.setstate({
            typeSelect: typeSelect
        });
    }    


    render() {
        return(
            <div className='App__Component'>
                <Header Title='Pokemon'
                    Subtitle='Game'
                    // filterSearchTypes='' 
                    onFilterSubmit={this.onFilterSubmit}
                    
                    />
                <PokeCard pokeName='pikachu'
                    pokeDescription='electric'
                />
                <Footer Placeholder='This is a placeholder'
                Copyright='Copyright 2019'/>
            </div>
        )
    }
}

export default App;


