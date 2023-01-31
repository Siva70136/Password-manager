import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'
import PasswordItem from '../passwordItem'

class passwordManager extends Component {
  state = {
    passwordList: [],
    isShow: false,
    websiteInput: '',
    userNameInput: '',
    passwordInput: '',
    searchItem: '',
  }

  onWebsite = event => {
    this.setState({
      websiteInput: event.target.value,
    })
  }

  onUserName = event => {
    this.setState({
      userNameInput: event.target.value,
    })
  }

  onPassword = event => {
    this.setState({
      passwordInput: event.target.value,
    })
  }

  addPassword = event => {
    event.preventDefault()
    const {websiteInput, userNameInput, passwordInput} = this.state
    const newPasswordItem = {
      id: v4(),
      website: websiteInput,
      userName: userNameInput,
      password: passwordInput,
    }

    this.setState(prevState => ({
      websiteInput: '',
      userNameInput: '',
      passwordInput: '',
      passwordList: [...prevState.passwordList, newPasswordItem],
    }))
  }

  onDelete = id => {
    const {passwordList} = this.state

    const filterSet = passwordList.filter(each => each.id !== id)

    this.setState({
      passwordList: filterSet,
    })
  }

  onSearch = event => {
    this.setState({
      searchItem: event.target.value,
    })
  }

  show = () => {
    this.setState(prevState => ({
      isShow: !prevState.isShow,
    }))
  }

  renderNoPassword = () => (
    <div className="noPassword-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-password"
      />
      <p className="no-password-text">No Passwords</p>
    </div>
  )

  renderPassword = searchResult => {
    const {isShow} = this.state

    return searchResult.map(each => (
      <PasswordItem
        item={each}
        key={each.id}
        isShow={isShow}
        onDelete={this.onDelete}
      />
    ))
  }

  render() {
    const {
      websiteInput,
      userNameInput,
      passwordInput,
      passwordList,

      searchItem,
    } = this.state

    const searchResult = passwordList.filter(each =>
      each.website.toLowerCase().includes(searchItem.toLowerCase()),
    )

    console.log(passwordList)
    console.log(searchResult)

    return (
      <div className="app-container">
        <div className="comment-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="logo"
          />
          <div className="data-container">
            <div className="">
              <form className="form" onSubmit={this.addPassword}>
                <h1 className="heading">Add New Password</h1>

                <div className="input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="icon"
                  />

                  <input
                    type="text"
                    className="name-box box"
                    placeholder="Enter Website"
                    onChange={this.onWebsite}
                    value={websiteInput}
                  />
                </div>
                <div className="input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="icon"
                  />

                  <input
                    type="text"
                    className="name-box box"
                    placeholder="Enter Username"
                    onChange={this.onUserName}
                    value={userNameInput}
                    id="title"
                  />
                </div>
                <div className="input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="icon"
                  />

                  <input
                    type="password"
                    className="name-box box"
                    placeholder="Enter Password"
                    onChange={this.onPassword}
                    value={passwordInput}
                  />
                </div>
                <div className="add-button">
                  <button type="submit" className="button">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="img"
            />
          </div>

          <div className="add-container">
            <div className="button-container">
              <div className="your-passwords">
                <h1 className="head">Your Passwords</h1>
                <p className="count">{passwordList.length}</p>
              </div>

              <div className="search-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="icon"
                />

                <input
                  type="search"
                  className="name-box box"
                  placeholder="Search"
                  onChange={this.onSearch}
                />
              </div>
            </div>
            <hr className="line" />
            <div className="show-password">
              <input
                type="checkbox"
                className="checkbox"
                onClick={this.show}
                id="search"
              />
              <label className="swd" htmlFor="search">
                Show passwords
              </label>
            </div>
            <ul className="password-items">
              {searchResult.length === 0 || passwordList.length === 0
                ? this.renderNoPassword()
                : this.renderPassword(searchResult)}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default passwordManager
