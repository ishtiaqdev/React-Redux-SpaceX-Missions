import React, { Component} from 'react';
import { connect } from 'react-redux';
import HistoryList from '../components/history-list';
import { fetchHistories } from '../actions/history-actions';

class HistoryListPage extends Component {

  componentDidMount() {
    this.props.fetchHistories();
  }

  render() {
    console.log(this.props.histories)
    return (
      <div>
        <h1>List of Histories</h1>
        <HistoryList histories={this.props.histories} errors={this.props.errors}/>
      </div>
    )
  }
}

// Make histories array available in props
function mapStateToProps(state) {
  return {
      histories: state.historyStore.histories,
      loading: state.historyStore.loading,
      errors: state.historyStore.errors
  }
}

export default connect(mapStateToProps, {fetchHistories})(HistoryListPage);
