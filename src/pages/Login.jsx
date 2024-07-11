// import React, { useState } from 'react';
// import { loginApi } from '../apis/Api';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const changeEmail = (e) => setEmail(e.target.value);
//   const changePassword = (e) => setPassword(e.target.value);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const data = {
//       email,
//       password
//     };

//     loginApi(data)
//       .then((res) => {
//         if (res.data.success === false) {
//           toast.error(res.data.message);
//         } else {
//           toast.success(res.data.message);
//           localStorage.setItem('token', res.data.token);
//           localStorage.setItem('user', JSON.stringify(res.data.userData));
//           if (res.data.userData.isAdmin) {
//             navigate('/admin/dashboard');
//           } else {
//             navigate('/');
//           }
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         toast.error('Server Error!');
//       });
//   };

//   return (
//     <div className="box">
//       <body
//         style={{
//           fontFamily: 'Arial, sans-serif',
//           margin: 0,
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           height: '100vh',
//           backgroundImage: "url('https://img.freepik.com/free-photo/top-view-virtual-reality-headset-white-headphones_23-2148912739.jpg?t=st=1716608439~exp=1716612039~hmac=f0fe594bee8d0df02c7d4e91c9c028406a61857676e615dd8d89ffa3bdd24c56&w=1060')",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         <div className="login-container" style={{ border: '3px solid #000000', borderRadius: '20px', borderBlockColor:'black', padding: '80px' }}>
//           <h1 style={{textAlign: 'left', color: 'black', marginTop: '0', marginBottom: '20px', fontSize: '4em'}}>Login Here!</h1>
//           <form className="w-100" onSubmit={handleSubmit}>
//             <div className="form-group fw-bold m-2 ">
//               <label style={{ color: 'black',textAlign:'center' }}>Email</label>
//               <input
//                 id="email"
//                 onChange={changeEmail}
//                 className="form-control"
//                 type="email"
//                 placeholder="Enter your email"
//                 required
//                 style={{ padding: '10px', borderRadius: '5px', border: '2px solid #ddd', borderColor:'black' }}
//               />
//             </div>
//             <div className="form-group fw-bold m-2">
//               <label style={{ color: 'black', textAlign:'center' }}>Password</label>
//               <input
//                 id="password"
//                 onChange={changePassword}
//                 className="form-control"
//                 type="password"
//                 placeholder="Enter your password"
//                 required
//                 style={{ padding: '10px', borderRadius: '5px', border: '2px solid #ddd', borderColor:'black' }}
//               />
//             </div>
//             <button className="btn btn-dark m-2" type="submit" style={{ width: '30%', borderRadius: '10px', textAlign: 'center'}}>
//               Login
//             </button>
//             <br></br>
//             <a href="/register" className="text-dark text-decoration-dark fw-bold" style={{ display: 'block', textAlign: 'center', marginTop: '10px', color: '#333' }}>
//               Don't have an account? SignUp
//             </a>
//           </form>
//         </div>
//       </body>
//     </div>
//   );
// };

// export default Login;

import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react';
import { loginApi } from '../apis/Api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const changeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    if (!/\S+@\S+\.\S+/.test(value)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Please enter a valid email address.' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    }
  };

  const changePassword = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length < 8) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Password must be at least 8 characters long.' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please fill in all fields.');
      return;
    }

    if (errors.email || errors.password) {
      toast.error('Please fix the errors before submitting.');
      return;
    }

    const data = {
      email,
      password,
    };

    loginApi(data)
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('user', JSON.stringify(res.data.userData));
          if (res.data.userData.isAdmin) {
            navigate('/admin/dashboard');
          } else {
            navigate('/');
          }
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error('Server Error!');
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
        <div className="login-container" style={{ border: '3px solid #000000', borderRadius: '20px', borderBlockColor:'black', padding: '80px' }}>
          <h1 style={{textAlign: 'left', color: 'black', marginTop: '0', marginBottom: '20px', fontSize: '4em'}}>Login Here!</h1>
          <form className="w-100" onSubmit={handleSubmit}>
            <div className="form-group fw-bold m-2 ">
              <label style={{ color: 'black',textAlign:'center' }}>Email</label>
              <input
                id="email"
                onChange={changeEmail}
                value={email}
                className="form-control"
                type="email"
                placeholder="Enter your email"
                required
                style={{ padding: '10px', borderRadius: '5px', border: '2px solid #ddd', borderColor:'black' }}
              />
              {errors.email && <div className="text-danger">{errors.email}</div>}
            </div>
            <div className="form-group fw-bold m-2">
              <label style={{ color: 'black', textAlign:'center' }}>Password</label>
              <div className="input-group">
                <input
                  id="password"
                  onChange={changePassword}
                  value={password}
                  className="form-control"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                  style={{ padding: '10px', borderRadius: '5px', border: '2px solid #ddd', borderColor:'black' }}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </button>
              </div>
              {errors.password && <div className="text-danger">{errors.password}</div>}
            </div>
            <button className="btn btn-dark m-2" type="submit" style={{ width: '30%', borderRadius: '10px', textAlign: 'center'}}>
              Login
            </button>
            <br />
            <a href="/register" className="text-dark text-decoration-dark fw-bold" style={{ display: 'block', textAlign: 'center', marginTop: '10px', color: '#333' }}>
              Don't have an account? SignUp
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
