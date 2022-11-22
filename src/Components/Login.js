// import React from "react";
// import "./Login.css";

// export default function Login() {
//   return (
//     <div>
//       <div className="containerlogin">
//         <div className="Headdivlogin">
//           <h4>Log in to Your Account</h4>
//         </div>
//         <div className="formdivlogin">
//           <form>
//             <tr className="logintr">
//               <label>
//                 <input type="text" placeholder="Enter Your UserName"></input>
//               </label>
//             </tr>

//             <tr className="logintr">
//               <label>
//                 <input
//                   type="password"
//                   placeholder="Enter Your Passward"
//                 ></input>
//               </label>
//             </tr>
//           </form>

//           <div className="battondiv">
//             <button type="button" class="btn btn-sm btn-success">
//               Login
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import "./Login.css";
import {useStateContext} from '../Contexts/FormsContext'
//first we install react-hook-form//
//after we install semantic-ui-react for button tag and all//
export default function FormValidation() {
    const { users} = useStateContext()
    //we create formvalidation function//
    //after we created object in that registername arry/function and handlesubmit passed//
    // and in react hook use we pass formstate in that erroe object pass//
    // all above are is store in use form//
    const { register, handleSubmit, formState: { errors } } = useForm();
    //another arrow function created for onsubmit and that we store all data//
    // we check the console throgh the all data will be stored//
    const onSubmit = (data) => {
        console.log(data);
        console.log("all users", users)
        

    }
    
    return (
        <div className="containerlogin " >
            
            <Form onSubmit={handleSubmit(onSubmit)}>
                
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
                    <label>Password</label>
                    <input className='inputstyle'
                        placeholder='Password'
                        type="password"
                        {...register("password", {  
                            required: true,
                           // pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$//
                            
                        })}
                    />
                </Form.Field>
                {errors.password && <p className="text-error">Please check the Password</p>}
                
              
                <Button type='submit'>Login</Button>
            </Form>
        </div>
    )
}
