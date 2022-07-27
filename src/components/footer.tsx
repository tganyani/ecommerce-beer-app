import * as React from 'react'
import '../styles/footer.scss'

import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export  function Footer(){

    return (
        <div className="footer">
            <a href="https://github.com/cblessi25" > <GitHubIcon className='footer-icon'/></a>
            <a href="mailto:cblessi@mail.ru" ><EmailIcon className='footer-icon'/></a>
            <p>&copy; 2022</p> 
        </div>
    )
}
