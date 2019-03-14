import React from 'react'

import Menu from './Navigations/Menu'
import Header from './Header'
import Books from './Books'
import NavBar from './Navigations/NavBar'
import About from './About'
import Footer from './Footer/index'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      menu: { open: false }
    }
  }

  toggleMenu = () => {
    this.setState(state => ({
      menu: { open: !state.menu.open }
    }))
  }

  render() {
    return (
      <div id="page-wrap">
        <Menu
          pageWrapId="page-wrap"
          isOpen={this.state.menu.open}
          toggleMenu={this.toggleMenu}
        />
        <NavBar toggleMenu={this.toggleMenu} />
        <Header title="ReactJS Academy" />
        <Books />
        <About />
        <Footer />
      </div>
    )
  }
}

export default App
