import React from 'react'
import opensea from './opensea.svg';
import './OSHeader.css';

export default function OSHeader() {
    return (
        <div className='OSHeader'>
            <div className='OSHeader-div'>
                <img className='OSHeader-img' src={opensea} alt="logo" />
                <b className='OSHeader-b'> OpenSea </b>
                <input className='OSHeader-input' type='text' placeholder='Search OpenSea'></input>
            </div>
            <div className='OSHeader-div'>
                <ul className='OSHeader-ul'>
                    <li>Explore</li>
                    <li>Stats</li>
                    <li>Resources</li>
                    <li>Create</li>
                </ul>
            
            </div>
        </div>
    )
}
