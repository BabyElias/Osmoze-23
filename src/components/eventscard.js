import React from 'react'
import Card from './../components/eventscardhelper';
import data from './../../data/data';


const eventscard = (props) => {

  const type = props.type

  return (
    <div className="bg-[#FFFFFF]">
    <div className="grid grid-cols-3 gapx-8 gapy-12 py-6">
      {data.events.map((item) => {
        if(type==="10"){
            return (
              <div>
                <Card
                  key={item.id}
                  name={item.name}
                  image={item.image}
                  designation={item.designation}
                  review={item.review}
                />
              </div>
            );
          }
          else if (item.type === type) {
            return (
              <div>
                <Card
                  key={item.id}
                  name={item.name}
                  image={item.image}
                  designation={item.designation}
                  review={item.review}
                />
              </div>
            );
          }
          else {
            return (
              <></>
            );
          }
        })}
      </div>
    </div>
  )
}

export default eventscard