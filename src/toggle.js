import React from 'react'

class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleBtn: true,
      name: 'Hello world'
    }
    this.click = this.handleClick.bind(this)
  }

  handleClick() {
    // this.setState({
    //   isToggleBtn: !this.state.isToggleBtn
    // })
    this.setState(prevState => ({
      isToggleBtn: !prevState.isToggleBtn
    }))
  }

  preventPop(name, e) {
    e.preventDefault()
    alert(name)
  }


  render() {
    return (
      <div>
        <button onClick={this.click}>
          {this.state.isToggleBtn ? 'ON' : 'OFF'}
        </button>
        <button onClick={this.preventPop.bind(this, this.state.name)}>
          Click me
        </button>
      </div>
    )
  }
}

export default Toggle
