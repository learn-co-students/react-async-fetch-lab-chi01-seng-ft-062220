import React from 'react';

class App extends React.Component {
    state = { 
        spacePeople: []
     }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
            //had to itterate into the array 
            // (({people})) gets into an array
            .then(({people}) => {
                this.setState({
                    spacePeople: people
                })
            })
    }

    render() { 
        return ( 
            <div>
                <h1>Space People</h1>
                <ul>
                    {this.state.spacePeople.map((person)=> <li key={person.name}>{person.name}</li>)}
                </ul>
            </div>
         );
    }
}
 
export default App;
