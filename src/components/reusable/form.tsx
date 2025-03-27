/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "./button";
import styles from "@/app/page.module.css";

export default function Form(props: any){  

    return(
        <form className="w-full mx-auto h-full ">
            <div className="w-full h-full">            
                {props.children}
                <div className="absolute right-3 bottom-3">
                    <Button onClick={props.onCancel} type='button' className={`${styles.secondaryBtn}`}>CANCEL</Button>
                    <Button onClick={props.onSubmit} type='submit' className={`${styles.primaryBtn}`}>SAVE</Button>
                </div>
                
            </div>
        </form>
    )
}