// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsList, clickTabBtn, isActive} = props
  const {tabId, displayText} = tabsList

  const onClickTabItem = () => {
    clickTabBtn(tabId)
  }

  const activeTabBtnName = isActive ? 'active-tab-btn' : 'not-active-btn'
  return (
    <li className="list-item-container">
      <button
        type="button"
        onClick={onClickTabItem}
        className={`tab-btn ${activeTabBtnName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
