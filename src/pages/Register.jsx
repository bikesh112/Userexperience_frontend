import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerApi } from '../apis/Api';
import zxcvbn from 'zxcvbn'; // Make sure to install zxcvbn with npm install zxcvbn

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const changeFirstName = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setFirstName(value);
      setErrors((prevErrors) => ({ ...prevErrors, firstName: '' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, firstName: 'First name can only contain letters' }));
    }
  };

  const changeLastName = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setLastName(value);
      setErrors((prevErrors) => ({ ...prevErrors, lastName: '' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, lastName: 'Last name can only contain letters' }));
    }
  };

  const changeEmail = (e) => setEmail(e.target.value);

  const checkPasswordStrength = (password) => {
    if (password.length < 8) {
      return { strength: "Too Short", color: "black", percent: 0 };
    }

    const result = zxcvbn(password);
    const score = result.score;

    const strengthData = {
      0: { strength: "Weak", color: "orange", percent: 25 },
      1: { strength: "Weak", color: "red", percent: 50 },
      2: { strength: "Medium", color: "yellow", percent: 75 },
      3: { strength: "Strong", color: "blue", percent: 100 },
      4: { strength: "Very Strong", color: "green", percent: 100 }
    };

    return strengthData[score];
  };

  const changePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordStrength(checkPasswordStrength(value));

    if (value.length < 8 || value.length > 12) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: (
          <span style={{ color: 'black' }}>
            Password must be between 8 and 12 characters long
          </span>
        ),
        // password: 'Password must be between 8 and 12 characters long',
      }));
    } else if (
      !/[A-Z]/.test(value) ||
      !/[a-z]/.test(value) ||
      !/\d/.test(value) ||
      !/[!@#$%^&*]/.test(value)
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password must include uppercase, lowercase, number, and special character',
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    if (errors.firstName || errors.lastName || errors.password) {
      toast.error('Please fix the errors before submitting');
      return;
    }

    const data = {
      firstName,
      lastName,
      email,
      password,
    };

    registerApi(data)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message);
          navigate('/login'); // Redirect to login after successful registration
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error('Internal Server Error!');
      });
  };

  return (
    <div className="box">
      <div
        style={{
          fontFamily: 'Arial, sans-serif',
          margin: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundImage: "url('https://img.freepik.com/free-photo/top-view-virtual-reality-headset-white-headphones_23-2148912739.jpg?t=st=1716608439~exp=1716612039~hmac=f0fe594bee8d0df02c7d4e91c9c028406a61857676e615dd8d89ffa3bdd24c56&w=1060')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="register-container" style={{ border: '3px solid #000000', borderRadius: '20px', padding: '35px', borderBlockColor:'black'}}>
          <h1 style={{textAlign: 'left', color: 'black', marginTop: '0', marginBottom: '20px', fontSize: '3em'}}>Create Your Account!</h1>
          <form className="w-100" onSubmit={handleSubmit}>
            <div className="form-group m-2 fw-bold">
              <label style={{ color: 'black', textAlign:'center', }}>Firstname</label>
              <input 
                onChange={changeFirstName} 
                value={firstName}
                className="form-control" 
                type="text" 
                placeholder="Enter your FirstName" 
                required 
                style={{ padding: '10px', borderRadius: '5px', border: '2px solid #ddd', borderColor:'black' }}
              />
              {errors.firstName && <p style={{ color: 'red', fontSize: '0.9em' }}>{errors.firstName}</p>}
            </div>
            <div className="form-group m-2 fw-bold">
              <label style={{ color: 'black', textAlign:'center' }}>Lastname</label>
              <input 
                onChange={changeLastName} 
                value={lastName}
                className="form-control" 
                type="text" 
                placeholder="Enter your LastName" 
                required 
                style={{ padding: '10px', borderRadius: '5px', border: '2px solid #ddd', borderColor:'black' }}
              />
              {errors.lastName && <p style={{ color: 'red', fontSize: '0.9em' }}>{errors.lastName}</p>}
            </div>
            <div className="form-group m-2 fw-bold">
              <label style={{ color: 'black', textAlign:'center' }}>Email</label>
              <input 
                onChange={changeEmail} 
                value={email}
                className="form-control" 
                type="email" 
                placeholder="Enter your email" 
                required 
                style={{ padding: '10px', borderRadius: '5px', border: '2px solid #ddd', borderColor:'black' }}
              />
            </div>
            <div className="form-group m-2 fw-bold">
              <label style={{ color: 'black', textAlign:'center' }}>Password</label>
              <input 
                onChange={changePassword} 
                value={password}
                className="form-control" 
                type="password" 
                placeholder="Enter your password" 
                required 
                style={{ padding: '10px', borderRadius: '5px', border: '2px solid #ddd', borderColor:'black' }}
              />
              {passwordStrength.strength && (
                <div style={{ marginTop: '10px' }}>
                  <div style={{ color: passwordStrength.color }}>
                    Password Strength: {passwordStrength.strength}
                  </div>
                  <div style={{ height: '10px', backgroundColor: '#e0e0e0', borderRadius: '5px', marginTop: '5px' }}>
                    <div style={{
                      width: `${passwordStrength.percent}%`,
                      height: '100%',
                      backgroundColor: passwordStrength.color,
                      borderRadius: '5px'
                    }}></div>
                  </div>
                </div>
              )}
              {errors.password && <p style={{ color: 'red', fontSize: '0.9em' }}>{errors.password}</p>}
            </div>
            <button className="btn btn-dark m-2 w-25" type="submit" style={{ width: '20%', borderRadius: '10px', textAlign: 'center'}}>
              Submit
            </button>
            <p className="mt-3" style={{ textAlign: 'center', color: '#333' }}>
              Already have an account? <a href="/login" className="text-dark text-decoration-dark fw-bold">Login here</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
