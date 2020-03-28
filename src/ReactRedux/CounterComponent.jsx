import React from "react";
import {bindActionCreators} from "redux";
import {addNumber, reduceNumber} from "./counterActions";
import { connect } from "react-redux";

class CounterComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number: 0,
            count: 0,
        };

        this.onChangNumber = this.onChangNumber.bind(this);
    }

    onChangNumber(e){
        this.setState({
            number: e.target.value
        });
    }

    render (){
        const {count, addNumber, reduceNumber} = this.props;
        const { number } = this.state;
        return (
            <div>
                <p>result is: {count}</p>
                <input type="text" value={number} onChange={this.onChangNumber}></input>
                <button type="button" onClick={() => {
                    addNumber(number)
                }}>+</button>
                <button type="button" onClick={() => {
                    reduceNumber(number)
                }}>-</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    count: state.counter.count,
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({addNumber, reduceNumber}, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);