import React, { useEffect, useState } from "react";
export default function ShowData(params) {

    const[data,setData]=useState([0])
    let[update,setUpdate]=useState(0)
    
    
    const getCovidData = () => {
        fetch("https://data.covid19india.org/data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.statewise[5]);
        setData(data.statewise[37])
      });
    }
    
    useEffect(()=>{
        getCovidData()
    },[])



  return (
    <>
    <h1 className="live">
        <span className="liveRed"></span>Live
      </h1>
      <h1 className="heading">COVID-19 CORONAVIRUS TRACKER</h1>

      <div className="Data-Container">
        <div className="country">
          <h2 className="dataHeading">
            <span className="small">Our</span> State
          </h2>
          <div className="CovData">
            {data.state}
          </div>
        </div>
        <div className="recovered">
          <h2 className="dataHeading">
            <span className="small">Total</span> Recovered
          </h2>
          <div className="CovData">
            {data.recovered}
          </div>
        </div>
        <div className="confirmed">
          <h2 className="dataHeading">
            <span className="small">Total</span> confirmed
          </h2>
          <div className="CovData">
            {data.confirmed}
          </div>
        </div>
        <div className="death">
          <h2 className="dataHeading">
            <span className="small">Total</span> death
          </h2>
          <div className="CovData">
            {data.deaths}
          </div>
        </div>
        <div className="active">
          <h2 className="dataHeading">
            <span className="small">Total</span> Active
          </h2>
          <div className="CovData">
            {data.active}
          </div>
        </div>
        <div className="updated">
          <h2 className="dataHeading">
            <span className="small">Last</span> update
          </h2>
          <div className="CovData">
            {data.lastupdatedtime}
          </div>
        </div>
      </div>
    </>
  );
}
