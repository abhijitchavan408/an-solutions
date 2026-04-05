"use client";

import { useEffect } from "react";
import { db } from "../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Test() {
  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, "appointments"));
      console.log(snapshot.docs.map(doc => doc.data()));
    };

    fetchData();
  }, []);

  return <div>Check console 🔍</div>;
}