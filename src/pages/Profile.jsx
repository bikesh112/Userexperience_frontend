import React from 'react';

const Profile = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px', border: '3px solid #333', borderRadius: '10px', maxWidth: '600px' }}>
        <h1 style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>User Profile</h1>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <img
            src="https://cdn-icons-png.freepik.com/256/6645/6645221.png?ga=GA1.1.984481469.1720942599&semt=ais_hybrid" // Placeholder image URL
            alt="Profile"
            style={{ height: '200px', width: '200px', borderRadius: '50%' }}
          />
          <a
            href="/editprofile"
            style={{
              marginTop: '20px',
            background: 'black',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            padding: '10px',
            cursor: 'pointer',
            display: 'inline-block',
            textDecoration: 'none', // Remove underline from link
      }}
    >
      Edit
    </a>
        </div>

        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <h2>Bikesh Chaudhary</h2>
          <p>Email: bikeshchy@gmail.com</p>
          <p>Location: Balkumari, Kathmadu</p>
          <p>Age: 23</p>
          <p>Bio: Hlo, It's me Bikesh Chaudhary and I am from Saptari District.</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
