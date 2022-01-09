import React from 'react'
import opensea from './opensea.svg';
import './OSHeader.css';
import SearchIcon from '@mui/icons-material/Search';
import WalletIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ProfileIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuIcon from '@mui/icons-material/Menu'

export default function OSHeader() {
    return (
        <div className='OSHeader'>
            <div className='OSHeader-div Logo'>
                <img className='OSHeader-img' src={opensea} alt="logo" />
                <b className='OSHeader-b'> OpenSea </b>
                
                
            </div>
            <div className='OSHeader-div SearchBar'>
                <SearchIcon className='OSHeader-search'></SearchIcon>
                <input className='OSHeader-input' type='text' placeholder='Search items, collections, and accounts'></input>
            </div>

            <div className='OSHeader-div RightMenu'>
            
            <div className='OSHeader-div Menu1'>
                <ul className='OSHeader-ul'>
                    <li>Explore</li>
                    <li>Stats</li>
                    <li>Resources</li>
                    <li>Create</li>
                </ul>
            </div>
            <div className='OSHeader-div Menu2'>           
                <ProfileIcon className='OSHeader-icon'></ProfileIcon>
                <WalletIcon className='OSHeader-icon'></WalletIcon>
            </div>
            <div className='OSHeader-div Hamburger'>
                <MenuIcon className='OSHeader-icon'></MenuIcon>
            </div>
            
            </div>

        </div>
    )
}
