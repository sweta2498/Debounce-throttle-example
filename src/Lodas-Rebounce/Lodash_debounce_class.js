import React from 'react'
import { debounce } from "lodash";

class Lodash_Debounce_class extends React.Component {
    state = {
      isLoading: false,
      inputValue: "",
      debouncedMessage: ""
    };
  
    debounceTest = debounce(val => {
      this.setState({
        isLoading: false,
        debouncedMessage: `I think you've typed ${val.length} characters`
      });
    }, 3000);
  
    testDebounce = event => {
      const { target: { value } } = event;
      this.setState({
        isLoading: true,
        inputValue: value
      });
  
      this.debounceTest(value);
    
    };
  
    render() {
      return ( 
        <React.Fragment><br/>
             <h3>lodash to Debounce With Class Component</h3>
          <input
            onChange={this.testDebounce}
            placeholder="Type here to test"
            value={this.state.inputValue}
          />
          <p className="message">
            {this.state.isLoading ? "🤔 - hmm" : this.state.debouncedMessage}
          </p>
        </React.Fragment>
      );
    }
  }
  
  export default Lodash_Debounce_class;
  