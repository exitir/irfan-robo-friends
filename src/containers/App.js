import React from 'react';
// import { robots } from './robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

// const App = () => {
//     return (
//         <div className='tc'>
//             <h1>RoboFriends</h1>
//             <SearchBox />
//             <CardList robotsParam={robots} />
//         </div>
//     );
// }

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));

    }


    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });

        // console.log('filterrobot list', filteredRobots)
        // console.log(event.target.value);
        // console.log(this);
        // console.log(robots);
    }

    render() {
        const filteredRobots = this.state.robots.filter(
            robot => {
                return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            }
        )

        if (this.state.robots.length === 0) {
            return <h1>loading.....</h1>;
        }
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchchange={this.onSearchChange} />
                <Scroll>
                    <CardList robotsParam={filteredRobots} />
                </Scroll>
            </div>
        );
    };
}

export default App;