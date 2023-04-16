import React from 'react'

function Footer() {
  const date = new Date().getFullYear();

  return (
    <div className='footer'><a href="https://github.com/SalamanderCtesiphon/" class="footer-link">
    <h5>Seamus Quixiote  &#169;  <a href="https://www.theodinproject.com/" class="footer-link"> The Odin Project</a>  <span id="currentYear">{date}</span> </h5>
    </a>`</div>
  )
}

export default Footer