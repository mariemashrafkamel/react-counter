import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count : this.props.counter.value,
        tags: ['tag1', 'tag2', 'tag3'],
        
      } ;
      styles = {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'red'
      };

   /*  constructor(){
      super();
      this.handleIncrement = this.handleIncrement.bind(this);
    }
    handleIncrement(){
     //this.state.count++;
     this.setState({ count: this.state.count+1 }); 
    } */
    handleIncrement =() => {
      //this.state.count++;
      this.setState({ count: this.state.count+1 }); 
     };
    
      renderTags(){
        if(this.state.tags.length === 0) {
          return <p> There are no tags</p>
        }
        return <ul> {this.state.tags.map(tag => <li key={tag} >{tag}</li>) }</ul>

      }
    render() { 
      let classes = this.getBadge();
      console.log("props", this.props);


        //React.createElement('div') 
        // mynf3sh a2ol class = '' 3shan JSX byt7wl l plain js 
        //w el class da atribute fel js mynf3sh asmeh nfs el asm
        /* <h1 >{this.state.count}</h1> 
                 <span className= { this.getBadge() } style={{ color: 'red' }}> Hello There</span>
                 <span style = { this.styles } className="badge badge-primary m-2">{this.formatCount()}</span>

                 <button style = {{fontSize: 20}} className="btn btn-secondary btn-sm">Increment</button>
                 <button className="m-2" >Decrement</button>
                 <ul> 
                  {this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}
                  </ul>
                   */
        return <div>
          {this.props.children}
           <span >{this.formatCount()}</span>
                {this.renderTags()}
                <button style = {{fontSize: 20}} className="btn btn-secondary btn-sm" onClick={this.handleIncrement}>Increment</button>
                <button className="btn btn-danger btn-sm m-2" 
                    onClick={() => this.props.onDelete(this.props.counter.id)}>
                      Delete
                </button>
                </div>;
    }
    getBadge() {
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
  }

    formatCount(){
        return this.state.count === 0? 'Zero' : this.state.count;
    }
}
 
export default Counter