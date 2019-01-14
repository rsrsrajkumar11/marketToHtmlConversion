import React, { Component } from 'react';
import './App.css';
import marked from 'marked'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      text:""
    }
    this.handleChange=this.handleChange.bind(this);
  }


  handleChange(event){
    // console.log(event.target);
    const {value,id} = event.target;
    // console.log(value,id);
    this.setState({
      text:value
    });

  }

  getMarkdownText() {
    var rawMarkup = marked(this.state.text, {sanitize: true,breaks:true});
    return { __html: rawMarkup };
  }

  render() {
    
    return (
      <div className="App">
        <textarea id="editor" 
          value={this.state.text} 
          onChange={this.handleChange}
          rows={15}
          cols={150}
          value={this.state.text}
        />
        <br/>
         <h1>Your page will look like:-</h1>
        <br/>
        <div id="preview" dangerouslySetInnerHTML={this.getMarkdownText() } />
      </div>
    );
  }

}



export default App;
