import React from 'react'
import './Nav.css'
import Showdata from './Showdata'
const MainPage = () => {
  return <>
   <div className='topMiddleBox'>
    <div className='TMBI'>
      <div>
        <p>Supplier</p>
        <div>
          <h2>East coast  fruits <br/>
            & vegetables</h2>
        </div>
      </div>
      <div>
        <p>Shipping Date</p>
        <div>
          <h2>Thu, Feb 12     </h2>
        </div>
      </div>
      <div>
        <p>Total </p>
        <h2>$ 1,02,002.33</h2>
      </div>
      <div>
        <p>Category</p>
        <div className='images'>
          <img src="https://img.icons8.com/?size=50&id=vOHNEerSEP2D&format=png"/>
          <img src="https://img.icons8.com/?size=50&id=Q5EYWYvUwOzF&format=png"/>
          <img src="https://img.icons8.com/?size=50&id=01fLHPk4i70R&format=gif"/>
          <img src="https://img.icons8.com/?size=50&id=m7AJ9aZ3wVWa&format=png"/>
          <img src="https://img.icons8.com/?size=50&id=0XREwSJmzWmf&format=png"/>
          <img src="https://img.icons8.com/?size=50&id=30218&format=png"/>
          <img src="https://img.icons8.com/?size=50&id=7598&format=png"/>
          <img src="https://img.icons8.com/?size=50&id=1016&format=png"/>
        </div>
      </div>
      <div>
        <p>Department</p>
        <div>
        <h2>300-444-123    </h2>

        </div>
      </div>
      <div>
        <p>Status</p>
        <div>
        <h2>Awaiting your approvel  </h2>

        </div>
      </div>
    </div>

  </div>
<Showdata/>
  </>
}

export default MainPage