import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchPosts} from "./postActions";
import {isEmpty} from "lodash";

class ListElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  render() {
    const {items, isFetching, fetchPosts} = this.props;
    console.log(isFetching);
    return (
      <div>
        <button onClick={() => fetchPosts()}>
          {isFetching ? "loading....." : "Request data"}
        </button>
        {!isEmpty(items) && !isFetching && (
          <ul>
            {items.map(item => {
              return <li key={item.id}>{item.title}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.post.items,
    isFetching: state.post.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPosts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListElement);