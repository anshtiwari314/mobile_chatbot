import { useState, useEffect } from 'react';

function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function keyWithPrefix(key) {
    return key ? '_jcb_'+key : key;
}

function getLocalStorageOrDefault(key, defaultValue) {
  const stored = localStorage.getItem(keyWithPrefix(key));

  if (!stored) {
    return defaultValue;
  }
  
  return isJsonString(stored) ? JSON.parse(stored) : stored;
}





export function clearFromLocalStorage(keys) {
  keys.forEach((key) => localStorage.removeItem(keyWithPrefix(key)));
}


export default function useLocalStorage(key, defaultValue) {

  const [value, setValue] = useState( getLocalStorageOrDefault(key, defaultValue) );

  useEffect(() => {
    //console.log(`i am key %c ${key}`,"font-size:25px;color:orange")
    localStorage.setItem(keyWithPrefix(key), JSON.stringify(value));
  }, [key, value]);

  useEffect(() => {
    //console.log(`i am key %c ${key}`,"font-size:25px;color:orange")
		window.addEventListener('storage', (e) => {
      console.log(`i am key %c ${key}`,"font-size:25px;color:orange")

      if(keyWithPrefix(key) === e.key){
        setValue(JSON.parse(e.newValue))
      }
		 });

	}, []);

  return [value, setValue];
}

