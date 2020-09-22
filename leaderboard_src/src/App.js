import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch('https://api.airtable.com/v0/appXK3obBAJyNBrhI/User?api_key=keynLGHM8Jor40KNX&sort%5B0%5D%5Bfield%5D=AvailableFunds&sort%5B0%5D%5Bdirection%5D=desc&maxRecords=15')
    .then((resp) => resp.json())
    .then(data => {
       this.setState({ users: data.records });
    }).catch(err => {
      // Error :(
    });
  }


  render() {
    return (
      <div class="container" style={{width:600, margin:50}}>
        <table>
          {this.state.users.map(item => <LeaderboardItem {...item.fields} /> )}  
        </table>
      </div>
    );
  }
}

export default App;

const LeaderboardItem = ({Username, AvailableFunds}) => (
  <tr>
    <td><b>{Username}</b></td>
    <td align="right">{AvailableFunds.toLocaleString()}</td>
  </tr>
);