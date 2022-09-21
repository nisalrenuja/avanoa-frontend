import React from 'react';

export default function list({info, upcoming}) {
  return (
      <ul>
          {iterate(info, upcoming)}
      </ul>
  );
}

function iterate(data, flag){
    if (!data) return;
    const bgColor = flag ? { backgroundColor : "#ffe66d"} : {};
    return (
        <>
            {
                data.map( (person, index) => {
                   
                    return (
                        <li key={index}>
                            <div className="flex" style={bgColor}>
                                <img src={person.img} alt="img" />
                                <div className="Titel">
                                    <h3 className='Description'>{person.Description}</h3>
                                    <h5 className="Time">{Old(person.Time)} time</h5>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </>
    )
}

// how old the person is
function Old(personTime){
    let year = new Date(personTime).getFullYear();
    let currentYear = new Date().getFullYear();
    
    let age = currentYear - year;
   return age;
}