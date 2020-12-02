import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchBar } from '../../components';
// import { getResult } from '../../actions';

class Home extends Component {
    render() {
         return (
         <>
         <h1>Welcome</h1>
         Enter username:
                 <SearchBar />
        </>
         )
     }    
}
export default Home;

// class Home extends Component {

//     getResult = username => this.props.getResult(username);
    
//     componentDidMount(){    
//         this.props.getResult(username)
//     }
    
//     renderResult = () => this.props.loading ? <p>Loading . . .</p> : <Result repoList={this.props.repoList}/>




//     render() {
//         return (
//         <>
//         <h1>Welcome</h1>
//         Enter username:
//                 <SearchBar getResult={getResult}/>

//                 <h1>{this.props.username}</h1>

//                 { this.props.error ? <p>Oops there's been an error! {this.props.error}</p> : this.renderResult() }
//         </>
//         );
//     }
// }

// export const mSTP = state => ({
//     repoList: state.repoList,
//     username: state.username,
//     loading: state.loading,
//     error: state.error
// });

// export default connect(mSTP, { getResult })(Home);