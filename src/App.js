// import logo from './logo.svg';
import './App.css';
import SearchBox from "./component/searchbox";
import CountryResults from "./component/countryresults";

function App() {
  return (
    <div className="body-wrapper">
      <nav className="navbar navbar-light sticky-top bg-white shadow-sm mb-3">
  <div className="container-fluid">
    <a className="navbar-brand"> <i class="uil uil-map"></i> Country Finder</a>
    <SearchBox />
  </div>
</nav>

<CountryResults />

   </div>
  );
}

export default App;
