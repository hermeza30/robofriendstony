import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';



export default class App extends Component{

    constructor(){
        super();
        this.state={
            robots,
            searchField:''
        }
    }
    onSearchChange=(event)=>{
        this.setState({searchField:event.target.value})
    }
    render(){
        const filteredRobots=this.state.robots.filter(
            x=>x.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase())
            );
        return (
    
            <div className="tc">
                <h1>RobotFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
            
            )
        
    }
 }
