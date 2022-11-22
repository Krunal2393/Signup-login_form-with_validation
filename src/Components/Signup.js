// import React from "react";
// import { useStateContext } from "../Contexts/FormsContext";

// import "./Signup.css";

// export default function Signup() {
//   const { Alldata, setAlldata } = useStateContext();

//   const handleClick = (event) => {
//     //we declare name because they name will target all data and display them//
//     const name = event.target.name;
//     const value = event.target.value;
//     console.log(name, value);
//     setAlldata({ ...Alldata, [name]: value });
//     //after that we get in name in array and pass them value
//   };
//   const submit = () => {
//     console.log(Alldata);
//   };

//   return (
//     <>
//       <div className="container">
//         <div className="Headdiv">
//           <h1>Create Account</h1>
//           <p>Sign up with your social media account or email address</p>
//         </div>

//         <div className="formdiv">
//           <form>
//             <tr>
//               FirstName:
//               <input
//                 //in name they get the fname in that name
//                 name="fname"
//                 type="text"
//                 value={Alldata.FirstName}
//                 placeholder="Enter Your FirstName"
//                 onChange={handleClick}></input>
//             </tr>

//             <tr>
//               LastName:
//               <input
//                 name="lname"
//                 type="text"
//                 value={Alldata.LastName}
//                 placeholder="Enter Your LastName"
//                 onChange={handleClick}></input>
//             </tr>

//             <tr>
//               MobileNo:
//               <input
//                 name="mobile"
//                 type="text"
//                 value={Alldata.MobileNo}
//                 placeholder="Enter Your MobileNo"
//                 onChange={handleClick}></input>
//             </tr>

//             <tr>
//               UserName:
//               <input
//                 name="username"
//                 type="text"
//                 value={Alldata.UserName}
//                 placeholder="Enter Your UserName"
//                 onChange={handleClick}></input>
//             </tr>
//             <tr>
//               Age:
//               <input
//                 name="age"
//                 type="text"
//                 value={Alldata.Age}
//                 placeholder="Enter Your Age"
//                 onChange={handleClick}></input>
//             </tr>

//             <tr>
//               Passward:
//               <input
//                 name="password"
//                 type="password"
//                 value={Alldata.Passward}
//                 placeholder="Enter Your Passward"
//                 onChange={handleClick}></input>
//             </tr>

//             <button type="button" class="btn btn-success" onClick={submit}>
//               SIGN UP
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }
import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import {useStateContext} from '../Contexts/FormsContext'
import "./Signup.css";
import { useNavigate } from "react-router-dom";
//first we install react-hook-form//
//after we install semantic-ui-react for button tag and all//

export default function FormValidation() {
  let navigate = useNavigate();
  const {setUsers} = useStateContext()
   //we create formvalidation function//
    //after we created object in that registername arry/function and handlesubmit passed//
    // and in react hook use we pass formstate in that erroe object pass//
    // all above are is store in use form//
    const { register, handleSubmit, formState: { errors } } = useForm();
     //another arrow function created for onsubmit and that we store all data//
    // we check the console throgh the all data will be stored//
    const onSubmit = (data) => {
        console.log(data);
       setUsers(prev => [...prev, data])
       // storeUser(data)
        navigate('/Login');
      
    }
    
    return (

        <div className="container " >
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <label>First Name</label>
                    <input className='inputstyle'
                        placeholder='First Name'
                        type="text"
                        {...register("firstName", { required: true, minLength:3, maxLength: 10,
                          pattern :/^[A-Za-z]+$/ })}
                    />
                </Form.Field>
                {errors.firstName && <p className="text-error">Please check the First Name</p>}
                <Form.Field>
                    <label>Last Name</label>
                    <input className='inputstyle'
                        placeholder='Last Name'
                        type="text"
                        {...register("lastName", { required: true, minLength:3, maxLength: 10 })}
                    />
                </Form.Field>
                {errors.lastName && <p className="text-error">Please check the Last Name</p>}
                <Form.Field>
                <label>User Name</label>
                    <input className='inputstyle'
                        placeholder='User Name'
                        type="text"
                        {...register("UserName", { required: true, minLength:3,maxLength: 10 })}
                    />
                </Form.Field>
                {errors.UserName && <p className="texterror-">Please check the User Name</p>}
                <Form.Field>
                    <label>Age</label>
                    <input className='inputstyle'
                        placeholder='Age'
                        type="number"
                        {...register("Age",
                            {
                                required: true,min:0.5,
                               minLength:1,maxLength:2
                            })}
                    />
                    </Form.Field>
                    {errors.Age && <p className="texterror-">Please check the Age </p>}
                
                <Form.Field>
                    <label>Email</label>
                    <input className='inputstyle'
                        placeholder='Email'
                        type="email"
                        {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
                    />
                </Form.Field>
                {errors.email && <p className="text-error">Please check the Email</p>}
                <Form.Field>
                    <label>Password</label>
                    <input className='inputstyle'
                        placeholder='Password'
                        type="password"
                        {...register("password", {
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })}
                    />
                </Form.Field>
                {errors.password && <p className="text-error">Please check the Password</p>}
                <Form.Field>
                    <label>phone number</label>
                    <input className='inputstyle'
                        placeholder='Phone number'
                        type="number"
                        {...register("Phone number", {
                            required: true,maxLength :10,
                            pattern: /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/
                           
                        })}
                    />
                </Form.Field>
                {errors.Phonenumber && <p className="text-error">Please check the Phone number</p>}
                
                <Button type='submit' >Submit</Button>
            </Form>
        </div>
    )
}
