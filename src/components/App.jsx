import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [Items, setitems]=useState([])

  function insertitem(Item){
    setitems(preval=>{
      return [...preval, Item]
    })
    
  }

  function deleted(id){
    setitems(preval=>{
      return Items.filter((item, index)=>{
        return id!==index
      })
    })
  }
  

  return (
    <div>
      <Header />
      <CreateArea onAdd={insertitem}/>
      {Items.map((item, index)=>{
        return <Note key={index} title={item.title} content={item.content} id={index} removeitem={deleted} />
      })}
      <Footer />
    </div>
  );
}

export default App;
