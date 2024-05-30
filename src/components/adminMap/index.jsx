import React from 'react'
import './adminMap.scss'

const AdminMap = () => {
  return (
    <section className='admin-map container'>
        <iframe 
            className='admin-map__iframe'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487.8626907320123!2d68.0320136070914!3d40.52056035543373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ad7bf60a0e6dff%3A0xb3a88d3b69714cd0!2s1-maktab!5e0!3m2!1sen!2s!4v1716991412910!5m2!1sen!2s" 
            width="600" 
            height="450" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        <div className="admin-map__cards container">
          <div className="admin-map__cards-card">
            <h3>Office</h3>
            <p>205 North Michigan Avenue, Suite 810 <br />
              Chicago, 60601, USA <br />
              Phone: (123) 456-7890 <br />
              Email: contact@Evara.com
            </p>
            <button>View Map</button>
          </div>
          <div className="admin-map__cards-card">
            <h3>Office</h3>
            <p>205 North Michigan Avenue, Suite 810 <br />
              Chicago, 60601, USA <br />
              Phone: (123) 456-7890 <br />
              Email: contact@Evara.com
            </p>
            <button>View Map</button>
          </div>
          <div className="admin-map__cards-card">
            <h3>Office</h3>
            <p>205 North Michigan Avenue, Suite 810 <br />
              Chicago, 60601, USA <br />
              Phone: (123) 456-7890 <br />
              Email: contact@Evara.com
            </p>
            <button>View Map</button>
          </div>
        </div>
    </section>
  )
}

export default AdminMap