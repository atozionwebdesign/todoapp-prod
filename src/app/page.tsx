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
  // const [calendarDate, setCalendarDate] = useState(new Date());
  

  useEffect(() => {
    getTasks().then(res => {
      setTasks(res);
      setFilteredTasks(res);
      const t = todayTasks(res);
      setCount({all: res.length, today:t.length})
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
    <div className={styles.page}>
      <main className={styles.main}>
        <div className="md:flex min-h-screen">
          <div className="p-2 small">
            <LeftNav filter = {fV} setFilter = {setFilter} count={count} handleNewBtn = {handleNewBtn}  />
          </div>
          <div className="grow p-5 min-h-screen" style={{backgroundColor:'var(--charcoal)', color: 'var(--lighttaupe)'}}>
            <h1 className="font-bold text-xl justify-self-center">Hello, Name</h1>
            
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
          {/* <div className="md:w-65 p-2 small justify-items-center">
            <div className="flex items-center">
              <div id="homeCalendar" className="mx-auto">
                <DatePicker
                  selected={calendarDate}
                  onChange={(date) => {if(date) setCalendarDate(date)}}
                  inline
                />
              </div>
            </div>
            
            
          </div> */}
        </div>    
      </main>
    </div>
  );
}