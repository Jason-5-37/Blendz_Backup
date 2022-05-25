import React, { useState } from 'react';
import { Data } from './Data';
import { AccordionSection, Wrap, Dropdown} from "./style";
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const Help = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#fff', size: '25px' }}>
      <AccordionSection>
        <h1>FREQUENTLY ASKED QUESTION</h1>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h2>{item.question}</h2>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}<br></br>
                    {item.link}<br></br>
                    {item.link2}<br></br>
                    {item.link3}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        <p>Need more help? <span><a href='/contactus'>Contact Us</a></span></p>
        <p><a href='/payment'>Payment</a></p>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Help;