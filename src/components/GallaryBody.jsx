function Body(props){

    const data = props.info

    return <div>
    {
      data.map(image=>{
        return(
          <div key={image.id} className="column">
            <img src={image.img} alt=""></img>
          </div>
        )
      })
    }
  </div>
}

export default Body