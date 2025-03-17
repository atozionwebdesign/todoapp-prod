/* eslint-disable @typescript-eslint/no-explicit-any */

import styles from "../app/page.module.css";
import Form from "next/form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCalendarCheck, faCalendarWeek, faListCheck, faCalendarDays, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function LeftNav(props: any){
  
  const count = props.count;
  const filter = props.filter;

  const handleFilters = (e) => { 
    props.setFilter(e.target.id);
  }

  return(
    <div style={{color: 'var(--darkcharcoal)'}} >
      <div className="flex w-full mb-2">
        <div className="flex-none content-center">
          <div className={styles.logo}>
          </div>
        </div>
        <div className="grow pl-1 content-center">
          <p className="font-bold large">Username</p>
          <p>Acct message</p>
        </div>
      </div>
      <Form action="/search" className="mb-3 mt-3 grow flex">
        <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        <input name="query" className="grow search" placeholder="Search"></input>
      </Form>
      <div onClick={props.handleNewBtn} id="new" className="filter-div clickable">
        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>New Task
      </div>
      <div onClick={handleFilters} id="today" className={(filter == 'today') ? 'selected-filter clickable' : 'filter-div clickable'}>
        <FontAwesomeIcon icon={faCalendarCheck}></FontAwesomeIcon>Today
        <span className="small-count"><sup>{count.today}</sup></span>
      </div>
      {/* <div>
        <FontAwesomeIcon icon={faCalendarWeek}></FontAwesomeIcon>Next 7 Days
        <span className="small-count">Num</span>
      </div> */}
      <div onClick={handleFilters} id="all" className={(filter == 'all') ? 'selected-filter clickable' : 'filter-div clickable'}>
        <FontAwesomeIcon icon={faListCheck}></FontAwesomeIcon>All My Tasks
        <span className="small-count"><sup>{count.all}</sup></span>
      </div>
      <div className="mb-2 filter-div clickable">
        <FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon>View Calendar
      </div>
    </div>
  )
}