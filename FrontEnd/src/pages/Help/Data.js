import Q1 from "../../file/Question1.pdf";
import Q5a from "../../file/Question5_01.pdf";
import Q5b from "../../file/Question5_02.pdf";
import Q6 from "../../file/Question6.pdf";
import Q7a from "../../file/Question7_01.pdf";
import Q7b from "../../file/Question7_02.pdf";
import Q7c from "../../file/Question7_03.pdf";
import Q8a from "../../file/Question8_01.pdf";
import Q8b from "../../file/Question8_02.pdf";

export const Data = [
  {
    question: 'My First Class 1 machine is not cooling?',
    answer: 'The machine has overheated and requires the reset button to be pushed.',
    link: <a href={Q1} target="_blank" type="application/pdf" rel="noreferrer">First Class 1 Reset after Overheating</a>
  },
  {
    question: 'How does a slush machine work?',
    answer: "The machine is operating at -3 degrees Celsius, by having a product with a minimum of 14% sugar and continuous agitation the machine will shave the loosely bonded ice crystals to form a slush.",
    link: <iframe src="https://www.youtube.com/embed/UgfACPnSziI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  },
  {
    question: 'Can I put ordinary soft drinks into my slush machine?',
    answer: 'No. It is not recommended to use any product other than one that is especially formulated for the machines.'
  },
  {
    question: 'Can I put alcohol into my machine?',
    answer: 'Yes. Alcohol does not freeze so you can add it to any slush product without upsetting the mix ratio (usually 4:1).'
  },
  {
    question: 'My Bigbiz 2 machine is not chilling, all the lights are flashing?',
    answer: 'The machine has overheated and popped the cutout. The reset button is on the front of the machine behind the left hand side drip tray.',
    link: <a href={Q5a} target="_blank" type="application/pdf" rel="noreferrer">BigBiz Reset after Overheating</a>,
    link2: <a href={Q5b} target="_blank" type="application/pdf" rel="noreferrer">Keep the lint filter clean</a>
  },
  {
    question: 'First Class 2 or 3 not freezing?',
    answer: 'Requires the reset button pushed.',
    link: <a href={Q6} target="_blank" type="application/pdf" rel="noreferrer">Reset after Overheating First Class 2 and 3</a>
  },
  {
    question: 'Cleaning and operation instructions for the first class machines?',
    link: <a href={Q7a} target="_blank" type="application/pdf" rel="noreferrer">First Class Dismantle, Cleaning and Reassemble</a>,
    link2: <a href={Q7b} target="_blank" type="application/pdf" rel="noreferrer">Operation of "First Class" machine</a>,
    link3: <a href={Q7c} target="_blank" type="application/pdf" rel="noreferrer">First Class machine description</a>
  },
  {
    question: 'Cleaning and operation of the BigBiz machines?',
    link: <a href={Q8a} target="_blank" type="application/pdf" rel="noreferrer">Operation of "BigBiz" machine</a>,
    link2: <a href={Q8b} target="_blank" type="application/pdf" rel="noreferrer">BigBiz Dismantle, Cleaning and Reassemble</a>
  }
];