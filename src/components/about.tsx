export default function About(){

    return(
        <div>
            <p className="large font-bold mb-5 text-center" style={{color: 'var(--midblue)'}}>
                {"'The bad news is time fles. The good news is that you are the pilot.'"}
            </p>
            <p style={{color: 'var(--lighttaupe)'}}>This is a simple todo application built using Nextjs with a Node server and MySQL database.  API routes are created for all CRUD methods. The front-end is customized using Tailwindcss.</p>
            <p className="mt-5 mb-3 "><strong>Developed By:</strong> Senior Full-Stack Developer, Ashley Stith</p>
            <p className="font-bold mt-5 mb-3">TECH STACK:</p>
            <div className="grid grid-cols-2 gap-2">
                <div className="grid-cols-1">
                    <p style={{color: 'var(--lighttaupe)'}}>Front-end:</p>
                    <ul style={{listStyleType: 'circle'}} className="small ml-5">
                        <li>Nextjs framework</li>
                        <li>Tailwindcss</li>
                        <li>Fontawesome</li>
                        <li><strong>Languages:</strong> HTML, CSS, Typescript, Javascript</li>
                    </ul>
                </div>
                <div className="grid-cols-1">
                    <p style={{color: 'var(--lighttaupe)'}}>Back-end:</p>
                    <ul style={{listStyleType: 'circle'}} className="small ml-5">
                        <li>Node.js </li>
                        <li>MySQL</li>
                        <li><strong>Languages:</strong> Typescript, Javascript, MySQL</li>
                    </ul>
                </div>
            </div>
            <p style={{color: 'var(--lighttaupe)'}} className="mt-3">RESTFUL APIs:</p>
                <ul style={{listStyleType: 'circle'}} className="small ml-5">
                    <li><strong>C</strong>reate a task</li>
                    <li><strong>R</strong>a task by ID or Read ALL tasks</li>
                    <li><strong>U</strong>pdate a task by ID</li>
                    <li><strong>D</strong>elete a task by ID</li>
                </ul>
            
            <p className="mt-5 mb-3 text-center">View the <strong><a style={{color:'var(--lightblue)'}}>Github Repo</a></strong></p>
        </div>
    )
}