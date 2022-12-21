import { useObject } from 'react-firebase-hooks/database';
import React, { useState, useRef, useEffect } from "react";
import firebaseApp from "../../firebase/clientApp";

import { getDatabase, ref, child, get } from "firebase/database";
import { async } from '@firebase/util';

const Gallery = () => {
  const [isLoading, setIsLoading] = useState(true);
  const snapshot = useRef(null);
  const error = useRef(null)

  const getValue = async () => {
    try {
      const dbRef = ref(getDatabase(firebaseApp));
      const dbGet = await get(child(dbRef, 'artworks'));
      const dbValue = dbGet.val();
      snapshot.current = dbValue;
    } catch (e) {
      console.log(e)
      error.current = e.message
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getValue();
  }, [])

  if (isLoading) {
    return <div>Fetching Data...</div>
  }

  const data = snapshot.current;

  return (
    <div>
      <p>Hello</p>
      {
        data.map((item) => {
          return (
            <li key={item.id}>
              <p>Name: {item.name}</p>
              <p>description: {item.description}</p>
              <p>url: {item.url}</p>
            </li>
          )
        })
      }
    </div>
  );
}

export default Gallery;