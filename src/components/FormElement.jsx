import { useId, useState } from "react"
import InputMask from "react-input-mask"

/**
 * type: text, email, date, select
 * label: string
 * changeHandler: function
 * name: string
 * value: string
 * error: {
 *   isValid: boolean
 *   message: string 
 * }
 * options: [{
 *   label: string
 *   value: string
 * }]
 */

export default function FormElement(props){
  const elId = useId()
  const [error, setError] = useState(props.error)
  const changeHandler = (target) => {
    // if(props.required && target.value===''){
    //   setError({
    //     isValid: false,
    //     message: 'This field is required'
    //   })
    // } else {
    //   setError({
    //     isValid: true,
    //     message: ''
    //   })
    // }
    props.changeHandler(target)
  }

  function isValidEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  const blurHandler = (target) => {
    if(props.required && target.value===''){
      setError({
        isValid: false,
        message: 'This field is required'
      })
    }
    if(props.type==="email"){
      if(target.value!== '' && !isValidEmail(target.value)){
        setError({
          isValid: false,
          message: 'Invalid email address'
        })
      }
    }
  }

  const focusHandler = (target) => {
    if(!error.isValid){
      setError({
        isValid: true,
        message: ''
      })
    }
  }

  if (props.type==='select'){
    return (
      <div className="my-form-row">
        <select name={props.name} className="form-control nice-select wide" value={props.value}
        onChange={(e)=>props.changeHandler(e.target)}>
          {props.options.map((opt, index)=><option value={opt.value} key={opt.label} disabled={index===0}>{opt.label}</option>)}
        </select>
        <div className="error-msg">{ props.error.message }</div>
      </div>
    )
  }

  return (
    <div className="my-form-row">
      {props.mask
        ? <InputMask type="text" mask={props.mask} id={elId} className={`form-control ${!error.isValid ? 'has-error' : ''}`} placeholder="" value={props.value}
        onChange={(e)=>changeHandler(e.target)} name={props.name}
        onBlur={(e)=>blurHandler(e.target)}
        onFocus={(e)=>focusHandler(e.target)}/>
        : <input type={props.type} id={elId} className={`form-control ${!error.isValid ? 'has-error' : ''}`} placeholder="" value={props.value}
        onChange={(e)=>changeHandler(e.target)} name={props.name}
        onBlur={(e)=>blurHandler(e.target)}
        onFocus={(e)=>focusHandler(e.target)}
        />
      }
      <label htmlFor={elId} className="label">{props.label}</label>
      <div className="error-msg">{ error.message }</div>
    </div>
  )
}