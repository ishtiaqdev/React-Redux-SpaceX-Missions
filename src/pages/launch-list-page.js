import React, { Component} from 'react';
import Modal from 'react-modal';
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import LaunchList from '../components/launch-list';
import { SearchInput } from './search-input';
import { fetchLaunches, fetchSearchedLaunches, sendInformationToEndpoint } from '../actions/launch-actions';
import styled from 'styled-components';
 
const customStyles = {
  content : {
    top                   : '25%',
    left                  : '25%',
    transform             : 'translate(-17%, -17%)'
  }
};

// Create a Title component that'll render an <h1> tag with some styles, not completing it due to shortage of time.
// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
// `;

// Create a StyledElement that'll render a <h3> tag with some styles, not completing it due to shortage of time.
// const StyledElement = styled.h3`
//   padding: 4em;
//   background: papayawhip;
// `;

class LaunchListPage extends Component {

    constructor(props, context) {
        super(props, context);
        this.handleSearch = this.handleSearch.bind(this);

        this.state = {
            launches: this.props.launches,
            showModal: false,
            selectedLaunch: null
        };
        
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

  componentDidMount() {
    this.props.fetchLaunches();
  }

  handleSearch(search) {
    this.props.fetchSearchedLaunches(search);
  }

  handleOpenModal (i) {
    this.setState({ showModal: true, selectedLaunch: i });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  handleSendInformation(value) {
      this.props.sendInformationToEndpoint(value);
      document.getElementById("endpointData").innerText = "Data has been sent to endpoint successfully!";
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  renderModal = () => {
    // Check to see if there's a selected launch. If so, render it.
    if (this.state.selectedLaunch != null) {
      const launch = this.state.launches.filter(launch => { return launch.flight_number === this.state.selectedLaunch.flight_number });
      let launchInfo = launch.length > 0 ? launch[0] : null;
      return (
        <div>
          <br />
          <h2 style={{marginTop: 0}}>Mission Name: </h2><b>{launchInfo.mission_name}</b>
          <h4 style={{marginBottom: 0}}>Launch Year: </h4>{launchInfo.launch_year}
          <Button style={{marginLeft: 50}} onClick={() => this.handleSendInformation(launchInfo.launch_year)}>Send it to an endpoint</Button>
          <div id="endpointData" style={{color: "green"}}></div>
          <h4 style={{marginBottom: 0}}>Details: </h4>{launchInfo.details}
        </div>
      );
    }
  }

  render() {
    // eslint-disable-next-line
    this.state.launches = this.props.launches;
    return (
      <div>
        <div>
            <SearchInput
              onSearch={this.handleSearch}
              placeholder="Search by mission name or date ..."
            />
        </div>
        <h1>List of Launches</h1>
        <LaunchList launches={this.props.launches} isSearched={this.props.isSearched} errors={this.props.errors} onClick={this.handleOpenModal}/>
        
        <Modal isOpen={this.state.showModal} onRequestClose={this.handleCloseModal} contentLabel="Launch Information Modal" style={customStyles}>
            <Button style={{float: 'left'}} negative onClick={this.handleCloseModal}>Close</Button>

            <h1 style={{marginTop: 0, marginLeft: 100}}>SpaceX Launch Information Modal</h1>
            
            <div>{this.renderModal()}</div>
        </Modal>
      </div>
    )
  }
}

// Make launches array available in props
function mapStateToProps(state) {
  return {
    launches: state.launchStore.launches,
    isSearched: state.launchStore.isSearched,
    errors: state.launchStore.errors
  }
}

export default connect(mapStateToProps, {fetchLaunches, fetchSearchedLaunches, sendInformationToEndpoint})(LaunchListPage);
