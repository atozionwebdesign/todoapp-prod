import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

export default function About(){
    return(
        <div className='flex-1 max-h-full overflow-y-auto'>
            <p className="large font-bold mb-5 text-center" style={{color: 'var(--midblue)'}}>
                {"'The bad news is time flies. The good news is that you are the pilot.'"}
            </p>
            <p style={{color: 'var(--lighttaupe)'}}>This is a simple tasking application built using Nextjs with a Node server and MySQL database.  API routes are created for all CRUD methods. The front-end is customized using Tailwindcss.</p>
            <p className="mt-5 mb-3 "><strong>Developed By:</strong> Senior Full-Stack Developer, Ashley Stith</p>
            <p className="font-bold mt-5 mb-3 mx-auto text-center md:text-left large" style={{color:'var(--gray)'}}>TECH STACK:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="grid-cols-1">
                    <p style={{color: 'var(--gray)'}} className='mx-auto text-center md:text-left'>Front-end:</p>
                    <ul style={{listStyleType: 'circle'}} className="small ml-5">
                        <li>Nextjs framework</li>
                        <li>Tailwindcss</li>
                        <li>Fontawesome</li>
                        <li><strong>Languages:</strong> HTML, CSS, Typescript, Javascript</li>
                    </ul>
                </div>
                <div className="grid-cols-1">
                    <p style={{color: 'var(--gray)'}} className='mx-auto text-center md:text-left'>Back-end:</p>
                    <ul style={{listStyleType: 'circle'}} className="small ml-5">
                        <li>Node.js </li>
                        <li>MySQL</li>
                        <li>AWS</li>
                        <li><strong>Languages:</strong> Typescript, Javascript, MySQL</li>
                    </ul>
                </div>
            </div>
            <p style={{color: 'var(--gray)'}} className="mt-3 mx-auto text-center md:text-left">RESTFUL APIs:</p>
                <ul style={{listStyleType: 'circle'}} className="small ml-5">
                    <li><strong>C</strong>reate a task</li>
                    <li><strong>R</strong>ead task by ID or Read ALL tasks</li>
                    <li><strong>U</strong>pdate a task by ID</li>
                    <li><strong>D</strong>elete a task by ID</li>
                </ul>
            <p className="font-bold mt-5 mb-3 mx-auto text-center md:text-left large" style={{color:'var(--gray)'}}>DEPLOYMENT DETAILS:</p>
            <p>Application deployed via SSH client on an Amazon Elastic Compute Cloud (EC2) virtual server instance. Code repository managed and stored on the Github repository linked below.</p>
            <p className="mt-5 mb-3 text-center xlarge"><a style={{color: 'var(--lightblue)'}} href="https://github.com/atozionwebdesign/todoapp-prod" target="_blank"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a></p>
        </div>
    )
}