import React from 'react';

// 方法一
// function Clock(props) {
//   return (
//     <div>time</div>
//   )
// }

// 方法二 es6
class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }

  componentWillMount() {
    console.log('1')
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000)
    console.log('2')
  }

  componentWillReceiveProps(newProps) {
    console.log('3')
  }

  shouldComponentUpdate(newProps, newState) {
    console.log('4')
    return true
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('5')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('6')
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    console.log('7')
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>{this.state.date.toLocaleTimeString()}</div>
    )
  }
}


export default Clock
