import React from 'react';
import Row from './N-row/N-row';
import requests from './requests';
import "./App.css"
import Banner from './Banner/Banner';
import Nav from './Header/Header';
function App() {
  return (
    <div className='App'>
      <Nav/>
      <Banner />
    <Row title="Trending Now"  fetchUrl={requests.fetchTrending} largeRow={true} /> 
    <Row title="Top Rated"  fetchUrl={requests.fetchTopRatedMovies}/> 
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/> 
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/> 
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/> 
    <Row title="Romance Movies"  fetchUrl={requests.fetchRomanceMovies}/> 
    <Row title="Documentaries Movies"fetchUrl={requests.fetchDocumentaries}/>  
    </div>
  );
}

export default App;
