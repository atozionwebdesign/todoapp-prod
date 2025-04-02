"use client"
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name, setName] = useState<string>('');
  const router = useRouter();

  function handleNameSave(){
    if (name.length > 0){
      if(typeof window !== undefined){
        sessionStorage.setItem('initial', name.substring(0,1));
        sessionStorage.setItem('username', name);
      }
    
    router.push('/todos');
    }
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className="flex flex-col items-center justify-center w-screen min-h-screen text-center" >
          <h1 style={{color:'var(--darkcharcoal)', fontWeight:'bold'}}>Hi, What is your name?</h1>
          <div>
            <form className="flex flex-col">
              <input name="usernameInput" value={name} onChange={(e) => {setName(e.target.value)}} className={`input- mb-3 ${styles.formInput}`} style={{color:'var(--lighttaupe)'}}></input>
              <button type="button" onClick={handleNameSave} className={`${styles.primaryBtn} clickable`}>SAVE</button>  
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}