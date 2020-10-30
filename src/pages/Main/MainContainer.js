import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import mainActions from "../../redux/main/mainActions";
import mainSelectors from "../../redux/main/mainSelectors";

import Main from "./Main";
import LS from "../../utils/LS";

class MainContainer extends Component {
  static propTypes = {
    pushFilterToState: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      })
    ),
    filter: PropTypes.string,
    isLoading: PropTypes.bool.isRequired,
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
  };

  componentDidMount() {
    const LsFilter = LS.restoreFromLS("filter");

    if (LsFilter) {
      this.props.pushFilterToState(JSON.parse(LsFilter));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { filter } = this.props;
    if (prevProps.filter !== this.props.filter) {
      LS.saveToLS("filter", this.props.filter);
      if (filter) {
        this.props.history.push({
          ...this.props.location,
          search: `filter=${filter}`,
        });
      } else {
        this.props.history.push({
          ...this.props.location,
          search: ``,
        });
      }
    }
  }

  render() {
    return (
      <div>
        <Main loading={this.props.isLoading} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filter: mainSelectors.stateFilter(state),
    contacts: mainSelectors.stateContacts(state),
    isLoading: mainSelectors.stateLoading(state),
  };
};

const mapDispatchToProps = {
  pushFilterToState: mainActions.pushFilterToState,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
