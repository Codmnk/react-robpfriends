import React, { Component } from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import Scroll from './Scroll'
import './App.css'


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    onSearchChange = (event)=>{
        this.setState({searchfield: event.target.value})
        
    }

    componentDidMount(){
        const users = fetch('https://jsonplaceholder.typicode.com/users')
         .then(response=>{ return response.json() })
         .then(users => {this.setState({ robots: users })})
        
    }

    render(){
        const filterRobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        if(this.state.robots.length < 1){
            return <h1> Loading.. </h1>
        }else{
            return (
                <div className='tc'>
                    <h1 className='f2'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filterRobots} />
                    </Scroll>
                </div>
                
            )
        }
        
    }
    
}

export default App