import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from 'react-bootstrap/Modal';

class CountryResults extends Component {
  constructor(props) {
    super(props);
    // state
    this.state = {
      country: [],
      visible: false,
      activecountry: ""
    };
  }

  componentWillReceiveProps(prevProps, nextProps) {
    if (prevProps.country !== this.props.country) {
      console.log(prevProps.country, this.props.country)
      this.setState({
        country: prevProps.country.length !== undefined ? prevProps.country : [],
      });
    }
  }


setactivecountry = (country) =>{
  console.log(country)
    this.setState({
        activecountry: country,
        visible: true
    })
}

onClose= () =>{
    this.setState({
        activecountry: "",
        visible: false
    })
}


  render() {
    const { country, activecountry, visible } = this.state;
    // console.log(this.props.country.length)
    return (
        <div className="container-fluid">

 <p>Showing  {country.length} results</p>
 {country.length === 0 ?
  <div className="card mb-3">
      
          <div className="card-body text-center">
            <h5 className="card-title" >No results found</h5>
            <p className="card-text mb-0">Try searching with different country names.</p>
       </div>
    </div>
    :

 <div className="row">
 {country.map((c, index) => (
        <div className="col-md-4 col-sm-6 col-12" key={index}>
        <div className="card mb-3 countrycard" onClick={() => this.setactivecountry(c)}>
      <div className="row g-0">
        <div className="col-md-4 mx-auto">
          <img src={c.flag} alt={c.name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title" title={c.name}>{c.name}</h5>
            <p className="card-text mb-0">{c.capital}</p>
          </div>
        </div>
      </div>
      <div className="paddlr-15">
      <p className="card-text mb-0"><small className="text-muted">Population</small></p>
            <h4>{c.population}</h4>
      </div>
    </div>
        </div>
    
   ))}
    </div>
  }

    <Modal show={visible} onHide={() => this.onClose()}>
        <Modal.Header closeButton>
          <Modal.Title>{activecountry.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src={activecountry.flag} alt={activecountry.name} className="modalflag" />
        <p>Capital</p>
         <h5> {activecountry.capital}</h5>
         
<p>Region: </p>
<h5>{activecountry.region}</h5>

<p>Sub-Region: </p>
<h5>{activecountry.subregion}</h5>

<p>Native name: </p>
<h5>{activecountry.nativeName}</h5>

<p>Population</p>
 <h5> {activecountry.population}</h5>
</Modal.Body>
      </Modal>
 
</div>
 
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { country: state.country };
}
export default connect(
  mapStateToProps,
  { }
)(CountryResults);
