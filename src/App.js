import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Router, Switch, Route } from './routing';
import Home from './components/Home';
import Pokemon from './components/Pokemon';

class App extends Component {
  state = {
    selectedPokemon: null
  };
  selectPokemon = selectedPokemon => {
    this.setState({
      selectedPokemon
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Home {...props} selectPokemon={this.selectPokemon} />
              )}
            />
            <Route
              path="/pokemon"
              render={props => (
                <Pokemon
                  {...props}
                  selectedPokemon={this.state.selectedPokemon}
                />
              )}
            />
          </Switch>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    padding: 50
  }
});

export default App;