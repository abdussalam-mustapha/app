import React from 'react'


const Header = () => {
  return (
    <div className='header-section'>
        <section className="navbar">
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <nav className='navbar'>
        <ul>
            <li> <a href="#">Home</a> </li>
            <li> <a href="#">Buy Now</a> </li>
            <li> <a href="#">Cart</a> </li>
            <li> <a href="#">Contact</a> </li>
        </ul>
      </nav>
      </section>
      <section className="container">
        <h1>BUY THE BEST QUALITY ITEMS</h1>
         <p>Join the thousand that know quality</p>
         <button className="btn">Buy Now</button>
      </section>
    </div>
  )
}

export default Header
