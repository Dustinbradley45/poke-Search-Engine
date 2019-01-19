import React, {Component} from 'react';

class FilterBar extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            typeSelect: " "
        }
}

    handleChange = (event) => {
        this.setState({
            typeSelect: event.target.value
        })
    }
    handleFormSubmit = (event) => {
        event.preventDefault()
        this.props.onFilterSubmit(this.state.typeSelect);

    }
    

// value = { this.state.typeSelect }
render() {
    console.log(this.state.typeSelect)
    return (
        <div className='filterSearchInput'>
                <form onSubmit={this.handleFormSubmit}>
                    <label className='visually-hidden' htmlFor='search'>
                        Search By Type:
                    </label>
                    <input
                        type='text'
                        placeholder='Search By Type'
                        id='search'
                        value={
                            this.state.typeSelect
                        }
                        onChange={
                            this.handleChange
                        }
                    />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
   
}


    
    
    









export default FilterBar;