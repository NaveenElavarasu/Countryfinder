import React, { Component } from "react";
import { connect } from "react-redux";
import { searchcountry, getallcountry
} from "../actions/assetAction";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    // state
    this.state = {
      loading: false,
    };
  }

  handleChange(e) {
    // console.log(e);
    var name = e.target.value;
    this.setState({
        loading: true
    });
    if(name.length >= 1){
    this.props.searchcountry(name).then(res=>{
        // console.log(res)
        this.setState({
            loading: false
        })
    });
} else {
    this.setState({
        country: []
    })
    this.getallcountries()
}
  }
 
  
  componentWillMount() {
    this.getallcountries()
  }

  getallcountries(){
    this.setState({
      loading: true
  })
      this.props.getallcountry().then(res =>{
        //   console.log(res)
        this.setState({
          loading: false
      })
      })
  }
 
 
  render() {
    const { loading } = this.state;
    
    return (
        <form className="d-flex">
          {loading ?
          <div class="spinner-grow spinner-grow-sm text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
       : null}
        <input className="form-control me-2" type="search" placeholder="Search Country Ex: IN" aria-label="Search" onChange={(e) => this.handleChange(e)} />
      </form>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { country: state.country };
}
export default connect(
  mapStateToProps,
  { searchcountry, getallcountry }
)(SearchBox);
