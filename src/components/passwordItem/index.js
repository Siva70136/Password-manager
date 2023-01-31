import './index.css'

const PasswordItem = props => {
  const {item, onDelete, isShow, length} = props
  const {id, website, userName, password} = item

  const update = () => {
    onDelete(id)
  }
  console.log(length)

  return (
    <li className="item">
      <div className="container">
        <p className="name">{website}</p>
        <button
          type="button"
          onClick={update}
          className="delete-button"
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            className="delete"
            alt="delete"
          />
        </button>
      </div>
      <p className="date">{userName}</p>
      {isShow ? (
        <p className="pwd">{password}</p>
      ) : (
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
          alt="stars"
          className="stars"
        />
      )}
    </li>
  )
}

export default PasswordItem
