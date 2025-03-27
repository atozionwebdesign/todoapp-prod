/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Button({ children, onClick, type, disabled = false, className } : any) {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={className}
      >
        {children}
      </button>
    );
  }