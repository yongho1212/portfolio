import { useEffect } from "react";
export function useDebounce(callback: any, delay:number) {
    useEffect(() => {
      const handler = setTimeout(callback, delay);
  
      return () => clearTimeout(handler);
    }, [callback, delay]);
  }