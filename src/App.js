import React from 'react';
import './App.css'
import { SearchBox } from './components/search-box/search-box.component';
import { CardList } from './components/card-list/card-list.component';


class App extends React.Component{
  constructor(){
    super();
    this.state = { 
      monsters: [],
      searchField:''

    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))

  }

  onSearchChange = event => {
    console.log(event.target.value)
    const {name, value} = event.target
    this.setState({
      [name]:value
    })

    // {
    //   {
    //     name: name;
    //     value: Arjun
    //   }
    //   {
    //     name: age;
    //     value:23
    //   }
      
    // }
  } 

  render(){
    const {monsters, searchField} = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monster's App is working!!!</h1>
        <SearchBox onSearchChange={this.onSearchChange}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
