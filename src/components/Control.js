import React, { Component } from 'react';

class Control extends Component{
    constructor(props){
      super(props);
      this.state={
        mode:this.props.mode
      }
    }

    render() {
      console.log('Control render');
      console.log(this.state.mode);
      if(this.props.mode === "welcome"){
        return(
          <ul>
            <li><a href="/create" onClick={function(e){
              e.preventDefault();
              this.props.onChangeMode('create');
            }.bind(this)}>create</a></li>
          </ul>
        )
      } else {
        return(
          <ul>
            <li><a href="/create" onClick={function(e){
              e.preventDefault();
              this.props.onChangeMode('create');
            }.bind(this)}>create</a></li>
  
            <li><a href="/update" onClick={function(e){
              e.preventDefault();
              this.props.onChangeMode('update');
            }.bind(this)}>update</a></li>
  
            <li><input onClick={function(e){
              e.preventDefault();
              this.props.onChangeMode('delete');
            }.bind(this)}type="button" value="delete"></input></li>
        </ul>
        );
    }

    }
}

export default Control;