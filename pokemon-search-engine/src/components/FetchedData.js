


class PokeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSelection: [],
        }
    }

    componentDidMount(props) {
        this.fetchMyData();
    }

    async fetchMyData() {
        const apiData = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto/', {
            params: {
                method: 'GET',
                dataType: 'json'
            }
        })
        
        this.setState({
            data: apiData
        })     

        console.log(this.state.data.apiData)
    } catch(error) {
        console.log(error);
    }

   
            
    render() {
        return (
            <h2>Hello</h2>


        )
    }
}

