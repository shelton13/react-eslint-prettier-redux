import React from "react";
import {createStore, combineReducers, bindActionCreators} from "redux";

const INCREASE_NUMBER = "INCREASE_NUMBER";
const REDUCE_NUMBER = "REDUCE_NUMBER";

const initialState = {
  count: 0,
};

function countReducer(state = initialState, actions) {
  switch (actions.type) {
    case INCREASE_NUMBER:
      return {
        ...state,
        count: state.count + parseInt(actions.number, 10),
      };
    case REDUCE_NUMBER:
      return {
        ...state,
        count: state.count - parseInt(actions.number, 10),
      };
    default:
      return state;
  }
}

function increaseNumber(number) {
  return {
    type: INCREASE_NUMBER,
    number,
  };
}

function reduceNumber(number) {
  return {
    type: REDUCE_NUMBER,
    number,
  };
}

const store = createStore(countReducer);

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      number: 1,
    };
    this.onChangeNumber = this.onChangeNumber.bind(this);
  }

  componentDidMount() {
    store.subscribe(() => {
      console.log(store.getState());
      this.setState({
        count: store.getState().count,
      });
    });
  }

  onChangeNumber(event) {
    this.setState({
      number: event.target.value,
    });
  }
  render() {
    const {count, number} = this.state;
    return (
      <div>
        <p>
          the current result is:&nbsp;&nbsp;
          {count}
        </p>
        <input type="text" value={number} onChange={this.onChangeNumber} />
        <input
          type="button"
          onClick={() => {
            store.dispatch(increaseNumber(number));
          }}
          value="+"
        />
        <input
          type="button"
          onClick={() => {
            store.dispatch(reduceNumber(number));
          }}
          value="-"
        />
      </div>
    );
  }
}
export default Counter;
