// Write your code here
const EventItem = props => {
  const {data, func} = props
  const {imageUrl, location, registrationStatus, name} = data
  const item = () => {
    func(registrationStatus)
  }

  return (
    <button type="button" onClick={item}>
      <li>
        <img src={imageUrl} alt={name} />
        <p>{name}</p>
        <p>{location}</p>
      </li>
    </button>
  )
}

export default EventItem
