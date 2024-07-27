import React from 'react';
import './App.css';
import Props from './Props'
import ParentChild from './ParentChild';
import Destructuring from './Destructuring';
import ClickHandler from './ClickHandler';
import ChildParent from './ChildParent';
import ConditionalRendering from './ConditionalRendering';
import ListRendering from './ListRendering';
import StylingCSS from './StylingCSS';
import FormHandling from './FormHandling';
import FragmentDemo from './FragmentDemo';
import Table from './Table';

function Welcome () {

  const greetParent = () => {
    alert('Hello Parent')
  }

  return (
    <div>
      <ParentChild />
      <Props name='Mojjam'/>
      <Props name='Jenifer'>
        <p>I have 3 children</p>
      </Props>
      <Destructuring name='Edwin' hobby='Music' />
      <ClickHandler />
      <ChildParent onClick={greetParent}/>
      <ConditionalRendering />
      <ListRendering />
      <StylingCSS primary={false} />
      <FormHandling />
      <FragmentDemo />
      <Table />
    </div>
  );
}

export default Welcome;
