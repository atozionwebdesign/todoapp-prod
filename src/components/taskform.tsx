/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState} from "react";
import { updateTask, createTask } from "@/app/services/todos";
import styles from "../app/page.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from "./reusable/form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

export default function TaskForm(props:any){
    const formType = props.formType;
    let task;

    if (formType == "update"){
        task = props.task;
    } else {
        task = {
            title: '',
            start_date: new Date(),
            end_date: new Date(), 
            details: ''
        }
    }

    const id = task.id;
    const [startDate, setStartDate] = useState(new Date(task.start_date));
    const [endDate, setEndDate] = useState(new Date(task.end_date));
    const [title, setTitle] = useState(task.todo);
    const [details, setDetails] = useState(task.details);

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    
    function range(last: number) {
        const result = [];
        const date = new Date();
        const end = date.getFullYear();
        for (let i = end; i >= last; i--) {
          result.push(i);
        }
        return result;
    }

    const years = range(2020);

    function handleSubmit(){
        
        const updatedTodo = {
            todo: title,
            start_date: startDate,
            end_date: endDate,
            details: details
        };

        if(formType == 'update'){
            updateTask(id, updatedTodo)
        } else{
            createTask(updatedTodo)
        }

       
    }

    return (
        <>
            {
                task
                    ? <Form onSubmit={handleSubmit} onCancel={props.onCancel}>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="floating_title" id="floating_title" className={`${styles.formInput} peer`} placeholder=" " value={title || ''} onChange={(e) => setTitle(e.target.value)}/>
                            <label htmlFor="floating_title" className="text-(--dimgray) peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-(--charcoal) peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group ">
                            <textarea name="floating_details" id="floating_details" className={`${styles.formInput} peer w-full h-full min-h-[75px]`} placeholder=" " value={details || ''} onChange={(e) => setDetails(e.target.value)}/>
                            <label htmlFor="floating_details" className="text-(--dimgray) peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-(--charcoal) peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Details</label>
                        </div>
                        <div className="relative z-0 w-full mb-10 group gap-2 justify-items-center grid grid-cols-11 h-fit">
                            <div className="col-span-5 px-2 formCalendar">
                                <DatePicker
                                    renderCustomHeader={({
                                        date,
                                        changeYear,
                                        changeMonth,
                                        decreaseMonth,
                                        increaseMonth,
                                    }) => (
                                        <div
                                        className="calendar-dd"
                                        >
                                        <button onClick={decreaseMonth} type="button" className="mr-5">
                                            {"<"}
                                        </button>
                                        <select
                                            value={date.getFullYear()}
                                            onChange={({ target: { value } }) => changeYear(parseInt(value))}
                                            className="mr-2"
                                        >
                                            {years.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                            ))}
                                        </select>

                                        <select
                                            value={months[date.getMonth()]}
                                            onChange={({ target: { value } }) =>
                                            changeMonth(months.indexOf(value))
                                            }
                                        >
                                            {months.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                            ))}
                                        </select>

                                        <button onClick={increaseMonth} type="button" className="ml-5">
                                            {">"}
                                        </button>
                                        </div>
                                    )}
                                    selected={startDate}
                                    onChange={(date) => {if(date) setStartDate(date)}}
                                    className={`${styles.formInput} ${styles.calendarInput} text-center`}
                                    value={String(startDate.toLocaleDateString())}
                                />
                            </div>
                            <div className="col-span-1 justify-center items-center flex">
                                <p style={{color:'var(--dimgray)'}} >
                                    <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon>
                                </p>
                                
                            </div>  
                            <div className="col-span-5 px-2 formCalendar">
                                <DatePicker
                                    renderCustomHeader={({
                                        date,
                                        changeYear,
                                        changeMonth,
                                        decreaseMonth,
                                        increaseMonth,
                                    }) => (
                                        <div
                                        className="calendar-dd"
                                        >
                                        <button onClick={decreaseMonth} type="button" className="mr-5">
                                            {"<"}
                                        </button>
                                        <select
                                            value={date.getFullYear()}
                                            onChange={({ target: { value } }) => changeYear(parseInt(value))}
                                            className="mr-2"
                                        >
                                            {years.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                            ))}
                                        </select>

                                        <select
                                            value={months[date.getMonth()]}
                                            onChange={({ target: { value } }) =>
                                            changeMonth(months.indexOf(value))
                                            }
                                        >
                                            {months.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                            ))}
                                        </select>

                                        <button onClick={increaseMonth} type="button" className="ml-5">
                                            {">"}
                                        </button>
                                        </div>
                                    )}
                                    selected={endDate}
                                    onChange={(date) => {if(date) setEndDate(date)}}
                                    className={`${styles.formInput} ${styles.calendarInput} text-center`}
                                    value={String(endDate.toLocaleDateString())}
                                />
                            </div> 
                        </div>
                        
                    </Form>
                    : <p>Loading...</p>
            }
        </>
    )
}