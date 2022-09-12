const CardTest = (props) => {
  return (
    <div>
      Title is:{props.title}
      <div>
        {props.description}
      </div>
    </div>
  )
}

export default CardTest