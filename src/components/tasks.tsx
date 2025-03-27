/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "@/app/page.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

export default function Tasks(props: any){
    const today = props.today;
    const tasks = props.tasks;

    const paragraph = document.querySelector('p');
    paragraph?.setAttribute('data-taskid', 'custom value');

    const handleTaskDiv = (e:any) => {
        const id = e.target.getAttribute('data-taskid');
        props.handleTaskDiv(id);
        return id;
    }

    const handleDeleteBtn = (e: any) => {
        const id = e.target.getAttribute('data-taskid');
        props.handleDeleteBtn(id);
        return id;
    }

    return (
        <div>
            <p className="large text-center font-bold" style={{color:'var(--darkcharcoal)'}}>
            {today}</p>
            <p className='xlarge' style={{color:'var(--darkcharcoal)', fontWeight: 'bold'}}>TASKS</p>
            <p style={{color:'var(--darkcharcoal)'}}><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>Click on a task below to edit it</p>
            <div className={styles.tasksContainer}>
                {
                    tasks.map((task:any) => {
                        return (
                            <div key={task.id} className={`${styles.taskDiv} relative flex w-full`} >
                                <div onClick={handleTaskDiv} className="grow clickable">
                                    <p data-taskid = {task.id} className="large font-bold">{task.todo}</p>
                                    <p data-taskid = {task.id} className="small" style={{color:"var(--taupe)"}}>{task.start_date}</p>
                                    <p data-taskid = {task.id} className="small mt-2">{task.details}</p>
                                </div>
                                <div className="w-[1em] h-[1.5em]">
                                    <p data-taskid = {task.id} className="absolute right-0 top-5 -mr-[calc(var(--spacing) * 5)] clickable" onClick={handleDeleteBtn}>
                                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                    </p>
                                </div>
                            </div>
                        )  
                    })
                }  
            </div> 
        </div>
    );
}