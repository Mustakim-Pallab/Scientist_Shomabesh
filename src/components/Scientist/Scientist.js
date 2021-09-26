import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import './Scientist.css'

const Scientist = (props) => {

    const {name, country, field, numberOfPapers,  honourium} = props.scientist;
    console.log(props.scientist.image);

    return (
        <div className="col-md-6 col-lg-4 my-3">
            <div className="card">
                <img src={props.scientist.image} className="card-img-top scientist-img" alt="Contains a scientist"/>
                    <div className="card-body card-bg">
                        <h5 className="card-title scientist-name">{name}</h5>
                        <p className='card-text scientist-details'>Country: {country}</p>
                        <p className='card-text scientist-details'> Field of Contribution: {field}</p>
                        <p className='card-text scientist-details'> Number of Papers: {numberOfPapers}</p>
                        <p className="card-text scientist-details">honourium : $ {honourium}M / Lecture</p>
                        <button id="hire-button" onClick={() => props.handleHireBtn(props.scientist)} className="btn btn-primary hire-btn mt-2 px-3 py-2"><FontAwesomeIcon icon={faPlusCircle} className='mr-2' />Hire Scientist</button>
                        
                    </div>
            </div>
        </div>
    );
};

export default Scientist;