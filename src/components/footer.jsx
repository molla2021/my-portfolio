import React from 'react'
import './footer.css';
import { ReactComponent as Piclog } from './images/fot.svg';

const Footer = () => {
    return (
        <div className='foter' id='footer' >



            <div className='touch' >
                <h2 className='touchtext' >Don’t be a stranger</h2>
                <h3 className='touchtext2' >just say hello.</h3>
                <p style={{ width: '100%' }} >Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                <p  >Need help?</p>
                <span className="far fa-envelope"  >{'   '}moget994@gmail.com</span>
                <p className='mt2'  >Feel like talking ?</p>

                <span className="fab fa-whatsapp "  >{'   '}   +251985236959</span>
                <p className='mt2'  > Want to Hire me?</p>
                <span className="fab fa-linkedin"     >{'         '} www.linkedin.com/in/molla-molla-a9b810208</span>







                <div className='row' >

                    <p  >
                        &copy;{new Date().getFullYear()} Moget Portfolio 
                    </p>

                    <p >
                        Made with<span role="img" aria-label="heart">❤️ </span> by MOGET
                    </p>
                </div>
            </div>

            < Piclog className='picl' />

        </div>
    )
}

export default Footer;
