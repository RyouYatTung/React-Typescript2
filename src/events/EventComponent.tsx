const EventComponent:React.FC = () => {
    const onChange =(event:React.ChangeEventHandler<HTMLInputElement>):void=>{
        console.log(event);
        
    }
  return (
    <input onChange={onChange} />
  )
}

export default EventComponent