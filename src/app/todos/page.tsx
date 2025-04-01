/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { getTasks, getTaskById, deleteTask } from "@/app/services/todos";
import LeftNav from "@/components/leftnav";
import styles from "@/app/page.module.css";
import Tasks from "@/components/tasks";
import Modal from "@/components/reusable/modal";
import TaskForm from "@/components/taskform";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import About from "@/components/about";
import Footer from "@/components/footer";

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
  

  useEffect(() => {
  
    getTasks().then(res => {
      setTasks(res);
      setFilteredTasks(res);
      const t = todayTasks(res);
      setCount({all: res.length, today:t.length})
      if(typeof window !== undefined){
        const username = sessionStorage.getItem('username');
        const i = sessionStorage.getItem('initial');
        if(username){
            setName(username);
        }
        if(i){
            setInitial(i);
        }
    }
    });
  },[])


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
    <div className={`${styles.page}`}>
      <main className={styles.main}>
        <div className='flex flex-col md:flex-row min-h-screen'>
          <div className="p-2 small">
            <LeftNav filter = {fV} setFilter = {setFilter} count={count} handleNewBtn = {handleNewBtn} username={name} initial = {initial}/>
          </div>
          <div className="p-5 grow flex flex-col" style={{backgroundColor:'var(--charcoal)', color: 'var(--lighttaupe)'}}>
            <div className="grow">
              <p className="justify-self-center" style={{color:'var(--taupe)'}}>NOTE: This is a LIVE TEST application. Feel free to test all CRUD functionality. <strong>ALL taskings are stored and visible to all until you delete them!</strong></p>
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
            
              <Footer />
            
          </div>
        </div>    
      </main>
    </div>
  );
}