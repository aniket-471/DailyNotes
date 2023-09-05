import React, {useState} from "react";
function CreateArea(props) {

    const [Item, setitem]=useState({
        title:'',
        content:''
    })

    function createitem(event){
        const {name, value}=event.target
        setitem(preval=>{
            return {...preval, [name]:value}
        })
        
    }

  

    function submitnote(event){
      props.onAdd(Item)
      setitem({title:'', content:''})
      event.preventDefault()
    }

  return (
    <div>
      <form>
        <input onChange={createitem} value={Item.title} name="title" placeholder="Title" />
        <textarea onChange={createitem} value={Item.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={submitnote} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea 
