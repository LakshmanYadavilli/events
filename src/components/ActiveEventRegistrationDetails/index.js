// Write your code here
const ActiveEventRegistrationDetails = props => {
  const {status} = props
  return (
    <div className="p2">
      {status === '' && (
        <p>click on an event, to view its registration details</p>
      )}
      {status === 'YET_TO_REGISTER' && (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png "
            alt="yet to register"
          />
          <button type="button">Register Now</button>
        </div>
      )}
      {status === 'REGISTERED' && (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
            alt="registered"
          />
          <p>You have already registered for the event</p>
        </div>
      )}
      {status === 'REGISTRATIONS_CLOSED' && (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
            alt="registrations closed"
          />
          <p>registrations are closed now!</p>
        </div>
      )}
    </div>
  )
}
export default ActiveEventRegistrationDetails
