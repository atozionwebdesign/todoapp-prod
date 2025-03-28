/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { getTasks, getTaskById, deleteTask } from "./services/todos";
import LeftNav from "@/components/leftnav";
import styles from "./page.module.css";
import Tasks from "@/components/tasks";
import Modal from "@/components/reusable/modal";
import TaskForm from "@/components/taskform";
import { useEffect, useState } from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import About from "@/components/about";

export default function Home() {
  const [tasks, setTasks] = useState();
  const [filteredTasks, setFilteredTasks] = useState()
  const [fV, setfV] = useState('all');
  const today = new Date();
  const optionsA: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', optionsA);
  const optionsB: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'};
  const [count, setCount] = useState({all: null, today: null});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [task, setTask] = useState({});
  const [formType, setFormType] = useState('update');
  const [name, setName] = useState<string>('');
  const [initial, setInitial] = useState('U');
  const [nameCaptured, setNameCaptured] = useState(false);

  useEffect(() => {
    getTasks().then(res => {
      setTasks(res);
      setFilteredTasks(res);
      const t = todayTasks(res);
      setCount({all: res.length, today:t.length})
    });
  },[])

  function handleNameSave(){
    if (name.length > 0){
    setInitial(name.substring(0,1))
    setNameCaptured(true);
    }
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormType('update');
  };

  function setFilter(f?: any) {
    setfV(f);
    handleFilter(f)
    return f;
  }

  const todayTasks = (t:any) => {
    const fT = t.filter((task:any) => new Date(formattedDate).toLocaleDateString('en-US', optionsB) == task.start_date);
    return fT;
  }

  const handleFilter = (filter: any) => {
   
    if(filter == 'today'){
        const fT = todayTasks(tasks);
        setFilteredTasks(fT);
        
    } else if (filter == "all"){
        setFilteredTasks(tasks);

    } else if (filter == 'about'){
      setFormType('about');
      setIsModalOpen(true);
    }
  }

  const handleTaskDiv = (id:any) => {
    getTaskById(id).then(res => {
      setTask(res[0]); 
    }).then(() => openModal())
  }

  const handleNewBtn = () => {
    setFormType('new');
    setTask({});
    openModal();
  }

  const handleDeleteBtn = (id:number) => {
    deleteTask(id).then(() => getTasks()).then(t => {
      setFilteredTasks(t);
      const todTasks = todayTasks(t);
      setCount({all: t.length, today:todTasks.length})
    });
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={"flex flex-col items-center justify-center w-screen min-h-screen " + (nameCaptured ? 'hidden': '')}>
          <h1 style={{color:'var(--darkcharcoal)', fontWeight:'bold'}}>Hi, What is your name?</h1>
          <div>
            <form className="flex flex-col"><input name="usernameInput" value={name} onChange={(e) => {setName(e.target.value)}} className={`input- mb-3 ${styles.formInput}`}></input><button type="button" onClick={handleNameSave} className={`${styles.primaryBtn} clickable`}>SAVE</button></form>
          </div>
        </div>
        <div className={(!nameCaptured ? 'hidden': 'md:flex min-h-screen')}>
          <div className="p-2 small">
            <LeftNav filter = {fV} setFilter = {setFilter} count={count} handleNewBtn = {handleNewBtn} username={name} initial = {initial}/>
          </div>
          <div className="grow p-5 min-h-screen" style={{backgroundColor:'var(--charcoal)', color: 'var(--lighttaupe)'}}>
            <p className="justify-self-center" style={{color:'var(--taupe)'}}>NOTE: This is a LIVE application. Feel free to test all CRUD functionality. <strong>ALL taskings are stored and visible to all until you delete them!</strong></p>
            <h1 className="font-bold text-xl justify-self-center">Hello, {name}</h1>
            
              <Modal isOpen={isModalOpen} onClose={closeModal}>
                {
                  formType == "about"
                    ? <About />
                    : <TaskForm task = {task} formType={formType} onCancel={closeModal}/>
                }
                
              </Modal>
            {
              (tasks && fV)
                ? <Tasks today={formattedDate} tasks={filteredTasks} handleTaskDiv={handleTaskDiv} handleDeleteBtn = {handleDeleteBtn} />
                : <p>Loading....</p>
            }
          </div>
        </div>    
      </main>
    </div>
  );
}