import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardLIst";
import SearchBox from "../components/SearchBox";
import "../containers/App.css";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import { requestRobots, setSearchField } from "../actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { robots, searchField, isPending, onSearchChange } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>

        <SearchBox searchChange={onSearchChange} />

        <Scroll>
          <ErrorBoundary>
            {isPending ? (
              <h1>Loading...</h1>
            ) : (
              <CardList robots={filteredRobots} />
            )}
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
