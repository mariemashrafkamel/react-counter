import React, { Component } from 'react';
import Counter from './counterComponent';
class Counters extends Component {
    state = {
        counters: [
            { id: 1, value:1 },
            { id: 2, value:1 },
            { id: 3, value:0 },
            { id: 4, value:0 },
        ]

    };
    handleDelete = counterId => {
        /* this.setState({count:this.state.count + 1}) */
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters: counters});
        console.log('here',counterId) 
      }
    render() {
        return (
            <div>
                {this.state.counters.map(counter => 
                <Counter key={counter.id} 
                counter={counter}
                selected 
                onDelete= {this.handleDelete}
                >
                 <h4>Counter Number {counter.id}</h4>
                </Counter>) }
            </div>
        );
    }

}
export default Counters;