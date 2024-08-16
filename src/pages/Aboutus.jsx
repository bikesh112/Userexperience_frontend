import React from 'react';

const AboutUs = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px', maxWidth: '1000px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center', color: '#333', fontWeight: 'bold' }}>About Us</h1>
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <div style={{ width: '50px', height: '5px', backgroundColor: '#333', margin: '10px auto' }}></div>
      </div>
      <p style={{ textAlign: 'center', color: '#555', marginBottom: '30px' }}>
        Welcome to Game Galaxy! Your ultimate destination for the best gaming accessories and gear.
      </p>
      <p style={{ textAlign: 'center', color: '#555', marginBottom: '30px', lineHeight: '1.6' }}>
        What started as a small venture with a passion for gaming has grown into a leading e-commerce platform for gamers worldwide. Each day, thousands of gamers visit Game Galaxy to explore our extensive inventory of games, consoles, and accessories. Our mission is to offer top-notch gaming products that enhance your gaming experience. We pride ourselves on excellent customer service, competitive pricing, and a vibrant community of gaming enthusiasts.
      </p>
      
      {/* <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', textAlign: 'center', padding: '10px' }}>
          <img
            src="https://img.freepik.com/free-photo/back-view-sad-professional-esports-gamer-losing-shooter-mock-up-video-game-defeated-man-with-headphones-streaming-online-cyber-performing-gaming-tournament-using-powerful-personal-computer_482257-12483.jpg?t=st=1719069253~exp=1719072853~hmac=8bd6a97e7e162c53069e21cc2dbe8dcc7fe92115082a6315c36c35cc88cb5232&w=1060"
            alt="About Us"
            style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '20px' }}
          />
        </div>
        
      </div> */}

      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '40px' }}>
        <div style={{ textAlign: 'center', backgroundColor: '#333', color: 'white', padding: '30px', borderRadius: '8px', flex: '1', margin: '10px', position: 'relative' }}>
          <img
            src='https://img.freepik.com/free-photo/neo-brutalism-inspired-building_23-2151004754.jpg?size=626&ext=jpg&ga=GA1.1.984481469.1720942599&semt=ais_user'
            alt="Our Business"
            style={{ width: '100%', height: '200px', opacity: '0.9', borderRadius: '8px' }}
          />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '1.5rem', fontWeight: 'bold' }}>
            Our Business
          </div>
        </div>
        <div style={{ textAlign: 'center', backgroundColor: '#333', color: 'white', padding: '30px', borderRadius: '8px', flex: '1', margin: '10px', position: 'relative' }}>
          <img
            src='https://img.freepik.com/free-photo/retro-vhs-packaging-indoors_23-2150172440.jpg?ga=GA1.1.984481469.1720942599&semt=ais_user'
            alt="Location Facts"
            style={{ width: '100%', height: '200px', opacity: '0.9', borderRadius: '8px' }}
          />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '1.5rem', fontWeight: 'bold' }}>
            Location Facts
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
