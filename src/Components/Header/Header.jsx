import React from 'react'
import './Header.css'
import { Plus } from "phosphor-react";
import { UserPlus } from "phosphor-react";
import Avatar from '@mui/material/Avatar';

const Header = () => {
  return (
    <div className='container-header'>
        <h2 className='logo-header'>Pocoyo</h2>

    <div className='User-header'>

        <Plus className='plus-header' size={20}/>

            <div className='accuont-header'>
                <Avatar className='avatar-header'><UserPlus size={20} /></Avatar>
                    <div className='infoUser-header'>
                        <h5 className='name-header fi'>Sign up</h5>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Header