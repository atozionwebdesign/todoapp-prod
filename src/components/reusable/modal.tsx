// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Modal(props:any){
    
    if(!props.isOpen){
        return null;
    }
    return (
        
        <div className="absolute inset-0 flex justify-center items-center bg-gray-900/50 z-50 backdrop-blur-[2px] transition-opacity duration-300">
          <div className="flex w-screen h-screen items-center justify-center p-5 md:p-10">
            <div className="flex w-fit max-h-full relative p-5" style={{backgroundColor: 'var(--darkcharcoal)'}}>
            <button
              onClick={props.onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 large"
            >
              &times;
            </button>
                {props.children}
            </div>
            
          </div>
        </div>
      );
}