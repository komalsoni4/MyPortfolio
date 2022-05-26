import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpeg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Komal Kumari</a></h1>
              <span className="email"><i className="icon-mail"></i> sanjanakumari1242@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/profile.php?id=100050648141010" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
              
                <li><a href="https://www.instagram.com/komalsoni502/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/dbarochiya/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/komalsoni4" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://www.behance.net/gallery/128397501/My-portfolio" target="_blank" rel="noopener noreferrer"><i className="icon-behance"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                
                  Thanks  for visiting my site
              </small></p>
              <p><small>
               Have a great day !!
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
