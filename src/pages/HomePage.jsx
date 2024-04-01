import ActionsLine from "../components/ActionsLine";
import BookSection from "../components/BookSection";
import Counters from "../components/Counters";
import LazyVideo from "../components/LazyVideo";
import Modal from "../components/Modal";
import Mytabs from "../components/MyTabs";
import WeAre from "../components/WeAre";
import { useState } from "react";

export default function HomePage(){
  const [isOpen, setIsOpen] = useState(false)

  return <>
    <div className="container">
      <h1>Home</h1>
      <ActionsLine />
      <hr />
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