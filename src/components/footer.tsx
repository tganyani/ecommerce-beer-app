import * as React from 'react'
import '../styles/footer.scss'

import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export  function Footer(){

    return (
        <div className="footer">
            <a href="https://github.com/tganyani/ecommerce-beer-app"> <GitHubIcon className='footer-icon'/></a>
            <a href="mailto:tatendaganyani5@gmail.com" ><EmailIcon className='footer-icon'/></a>
            <p>tgb&copy; 2022</p> 
        </div>
    )
}
