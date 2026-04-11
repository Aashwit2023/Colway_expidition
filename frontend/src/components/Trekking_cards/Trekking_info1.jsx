import React from 'react'

const Trekking_info1 = () => {
  return (
    <div className="trek-page">
      <header className="trek-header">
        <h1>Kedarkantha Trek</h1>
        <p>One of the most beautiful winter treks in the Himalayas.</p>
      </header>

      <section className="trek-image">
        <img 
          src="/images/kedarkantha.jpg" 
          alt="Kedarkantha Trek"
        />
      </section>

      <section className="trek-details">
        <h2>Trek Details</h2>

        <ul>
          <li><strong>Location:</strong> Uttarakhand, India</li>
          <li><strong>Duration:</strong> 5 Days</li>
          <li><strong>Difficulty:</strong> Easy to Moderate</li>
          <li><strong>Maximum Altitude:</strong> 12,500 ft</li>
          <li><strong>Best Time:</strong> December – April</li>
        </ul>
      </section>

      <section className="trek-description">
        <h2>About the Trek</h2>
        <p>
          The Kedarkantha Trek is famous for its beautiful snow trails,
          pine forests, and a stunning summit view of the Himalayan peaks.
          From the top, trekkers can see peaks like Swargarohini,
          Bandarpoonch, and Black Peak.
        </p>
      </section>

      <section className="trek-itinerary">
        <h2>Itinerary</h2>

        <ol>
          <li>Day 1: Dehradun to Sankri village</li>
          <li>Day 2: Trek from Sankri to Juda Ka Talab</li>
          <li>Day 3: Juda Ka Talab to Kedarkantha Base Camp</li>
          <li>Day 4: Summit Kedarkantha and descend</li>
          <li>Day 5: Return to Dehradun</li>
        </ol>
      </section>

      <div className="book-button">
        <button>Book This Trek</button>
      </div>
    </div>
  )
}

export default Trekking_info1
