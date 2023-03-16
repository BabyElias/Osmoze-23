import React, { useEffect, useState } from 'react'
import { collection, doc, getDocs } from 'firebase/firestore'
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Cards from '../components/eventscard'
import db from '../firebase/config'
import { async } from '@firebase/util'
const events = () => {

  const [type, setType] = useState("1");
  const [icon, setIcon] = useState(false);
  const [docData, setDocData] = useState([]);

  useEffect(() => {
    ;(async () => {
      const collectionReference = collection(db, "Events");
      const snaps = await getDocs(collectionReference);
      const docs = snaps.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      setDocData(docs);
    })()
  }, [])

  function handleEventClick(eventType) {
    // alert("it works :)");
    setType(eventType);
  }
  return (
    <div>
    <Navbar />
    
  <div
    class="title"
  >
    
      <h1
        class="head"
      >
        Exciting Pool Of Events

        {/* <span class="sm:block"> Increase Conversion. </span> */}
      </h1>

      {/* <p class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p> */}

      <div class="nav">
        <a
          onClick={(e) => handleEventClick("1")}
          
          onMouseEnter={(e) => setIcon(true)}
          onMouseLeave={(e) => setIcon(false)}
          class="nav-items"
          href="#"
          
        >
         
            <div class="hover">&#9632;</div> ALL EVENTS   
        </a>
        <a 
          onClick={(e) => handleEventClick("1")}
          onMouseEnter={(e) => setIcon(true)}
          onMouseLeave={(e) => setIcon(false)}
          class="nav-items"
          href="#"
        >
          <div class="hover">&#9632;</div>PRE EVENTS
        </a>
        <a
          onClick={(e) => handleEventClick("2")}
          onMouseEnter={(e) => setIcon(true)}
          onMouseLeave={(e) => setIcon(false)}
          class="nav-items"
          href="#"
        >
          <div class="hover">&#9632;</div>BIG-4
        </a>
        <a
          onClick={(e) => handleEventClick("3")}
          onMouseEnter={(e) => setIcon(true)}
          onMouseLeave={(e) => setIcon(false)}
          class="nav-items"
          href="#"
        >
          <div class="hover">&#9632;</div>CORE
        </a>
        <a
          onClick={(e) => handleEventClick("4")}
          onMouseEnter={(e) => setIcon(true)}
          onMouseLeave={(e) => setIcon(false)}
          class="nav-items"
          href="#"
        >
          <div class="hover">&#9632;</div>SPORTS
        </a>
        <a
          onClick={(e) => handleEventClick("5")}
          onMouseEnter={(e) => setIcon(true)}
          onMouseLeave={(e) => setIcon(false)}
          class="nav-items"
          href="#"
        >
          <div class="hover">&#9632;</div>ABRACADABRA
        </a>
      
    </div>
  </div>

<Cards type={type} docs={docData} />
<Footer/>
</div>
  )
}

export default events