import React,{ Component } from  'react';
import {CardList} from './Components/card-list/card-list.component';
import './App.css';
import {SearchBox} from './Components/search-box/search-box.component'

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters:[],searchField:''
    };
    
  }
  handleChange = (e)=>{
    this.setState({ searchField :e.target.value})

  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users =>this.setState({monsters : users}));
  }
  render(){
    const {monsters,searchField } = this.state;
    const filteredMonstoers = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return(

      <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
      placeholder = 'Search Monster'
      handleChange = {this.handleChange }
      />
      <CardList monsters={filteredMonstoers}></CardList>
        </div>
    );

  }

}

export default App;
