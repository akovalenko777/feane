import ActionsLine from "../components/ActionsLine";
import BookSection from "../components/BookSection";
import Counters from "../components/Counters";
import LazyVideo from "../components/LazyVideo";
import Modal from "../components/Modal";
import Mytabs from "../components/MyTabs";
import WeAre from "../components/WeAre";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

export default function HomePage(){
  const [isOpen, setIsOpen] = useState(false)

  const faqList = [
    {
      question: "Lorem ipsum dolor sit?",
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora hic minus obcaecati doloribus doloremque suscipit autem maiores quam incidunt modi reprehenderit similique aperiam aliquid ea aliquam perferendis nam, nisi quis!'
    },
    {
      question: 'What harsh truths do you prefer to ignore?',
      answer: 'Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.'
    },
    {
      question: 'Is free will real or just an illusion?',
      answer: 'In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non.'
    }
  ]

  return <>
    <div className="container">
      <h1>Home</h1>
      <ActionsLine />
      <button type="button">Hello!!!!</button>      
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eos facilis sunt cumque eligendi, unde consequatur? Totam repellendus doloribus excepturi impedit, repudiandae aliquam soluta ut aspernatur sequi dolore, beatae fugit!</p>
      <br />
      <br />
      <ul>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem ipsum dolor sit.</li>
      </ul>
      <hr />
      <Accordion>
        {faqList.map((item, index)=>(
          <AccordionItem key={index}>
              <AccordionItemHeading>
                  <AccordionItemButton>
                      {item.question}
                  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                  <p>
                      {item.answer}
                  </p>
              </AccordionItemPanel>
          </AccordionItem>
        ))}
            
        </Accordion>
      <button type="button" className="btn btn-warning" onClick={()=>{setIsOpen(true)}}>More info</button>
      <Mytabs />
      <br />
      <Counters />
      <br />
      <LazyVideo code="DYLy-VEnZ0Q"/>
      <LazyVideo code="vniFyewLgJc"/>
    </div>
    <Modal title="Modal title here" isOpen={isOpen} onClose={()=>{setIsOpen(false)}} size="large">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio id nulla dolores est? Consequuntur, magnam aliquid? Sit sint quos quae eos aut, quam quisquam, porro, quaerat delectus adipisci ratione autem?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi vero, temporibus quis nam voluptatem, quae aliquid, cumque eum cum aliquam nobis est a magni vitae aspernatur architecto rem nihil aut.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio id nulla dolores est? Consequuntur, magnam aliquid? Sit sint quos quae eos aut, quam quisquam, porro, quaerat delectus adipisci ratione autem?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi vero, temporibus quis nam voluptatem, quae aliquid, cumque eum cum aliquam nobis est a magni vitae aspernatur architecto rem nihil aut.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio id nulla dolores est? Consequuntur, magnam aliquid? Sit sint quos quae eos aut, quam quisquam, porro, quaerat delectus adipisci ratione autem?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi vero, temporibus quis nam voluptatem, quae aliquid, cumque eum cum aliquam nobis est a magni vitae aspernatur architecto rem nihil aut.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio id nulla dolores est? Consequuntur, magnam aliquid? Sit sint quos quae eos aut, quam quisquam, porro, quaerat delectus adipisci ratione autem?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi vero, temporibus quis nam voluptatem, quae aliquid, cumque eum cum aliquam nobis est a magni vitae aspernatur architecto rem nihil aut.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio id nulla dolores est? Consequuntur, magnam aliquid? Sit sint quos quae eos aut, quam quisquam, porro, quaerat delectus adipisci ratione autem?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi vero, temporibus quis nam voluptatem, quae aliquid, cumque eum cum aliquam nobis est a magni vitae aspernatur architecto rem nihil aut.</p>
    </Modal>
    <WeAre />
    <BookSection />
  </>
}
