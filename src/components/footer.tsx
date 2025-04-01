import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Footer(){
    return (
        <div className='h-fit flex mt-5 w-full footer flex-col lg:flex-row md:px-5 lg:px-10 items-center' style={{color:"var(--darkcharcoal)"}}>
            <div>
                <p className='small text-center md:text-left'>LIVE Test application developed by Full-Stack Developer <strong>Ashley Stith</strong>, <a href='https://atozionwebdesign.com' target='_blank'>A To Zion Web Design, LLC</a></p>
            </div>
            <div className='grow flex justify-end mt-5 lg:mt-0'>
                
                    <p className="large"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></p>
                    <p className="large"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></p>
                    <p className="large"><a href="https://github.com/atozionwebdesign/todoapp-prod" target="_blank"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a></p>
                
            </div>
            
        </div>
    )
}