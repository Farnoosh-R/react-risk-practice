const DiagramBox = () => {

     const data = JSON.parse(localStorage.getItem("form"))
        console.log(data);

    return (

       <>
        <h1>Diagram</h1>
        {data?.map((item) => {
            return(
                <div key={item.id}>{item.firstOperand}</div>
            )
        })}
       </>
        
    )
}
export default DiagramBox;