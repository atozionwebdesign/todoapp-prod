/* eslint-disable @typescript-eslint/no-explicit-any */

import styles from "../app/page.module.css";
// import Form from "next/form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendarCheck, faListCheck, faPlus, faBook } from '@fortawesome/free-solid-svg-icons';

export default function LeftNav(props: any){
  
  const count = props.count;
  const filter = props.filter;
  const username = props.username.toUpperCase();
  const initial = props.initial;

  const handleFilters = (e: any) => { 
    props.setFilter(e.target.id);
  }

  return(
    <div style={{color: 'var(--darkcharcoal)'}} >
      <div className="flex w-full mb-2">
        <div className="flex-none content-center">
          <div className={`${styles.logo} flex items-center justify-center`}>
            <p className="xlarge font-bold" style={{color:'var(--lightblue)'}}>{initial}</p>
          </div>
        </div>
        <div className="grow pl-1 content-center">
          <p className="font-bold large" >{username}</p>
          <p>MY TODO LIST</p>
        </div>
      </div>
      <div onClick={handleFilters} id="about" className="mb-2 filter-div clickable font-bold" style={{color:'var(--blue)'}}><FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
        LEARN ABOUT THE APP
      </div>
      
      <div className="flex flex-row md:flex-col">
        <div onClick={props.handleNewBtn} id="new" className="filter-div clickable">
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>New Task
        </div>
        <div onClick={handleFilters} id="today" className={(filter == 'today') ? 'selected-filter clickable' : 'filter-div clickable'}>
          <FontAwesomeIcon icon={faCalendarCheck}></FontAwesomeIcon>Today
          <span className="small-count"><sup>{count.today}</sup></span>
        </div>
        <div onClick={handleFilters} id="all" className={(filter == 'all') ? 'selected-filter clickable' : 'filter-div clickable'}>
          <FontAwesomeIcon icon={faListCheck}></FontAwesomeIcon>All Tasks
          <span className="small-count"><sup>{count.all}</sup></span>
        </div>
        {/* <div className="mb-2 filter-div clickable">
          <FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon>View Calendar
        </div> */}
      </div>
      
      
    </div>
  )
}