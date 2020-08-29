import React, {Component} from 'react';

export default class App extends Component{
    constructor(){
        super()
        this.state={
            info: []
        }
    }
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
                .then(data => this.setState({
                    info: data
                }))
    }


    render(){
        return(
            <div>Testing</div>
        )
    }

}
