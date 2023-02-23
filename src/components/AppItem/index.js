// Write your code here
import './index.css'

const AppItem = props => {
  const {appsList} = props
  // eslint-disable-next-line
  const {appName, imageUrl} = appsList

  return (
    <>
      <li className="list-items-container">
        <img src={imageUrl} className="app-icon" alt={appName} />
        <p className="app-name">{appName}</p>
      </li>
    </>
  )
}

export default AppItem
