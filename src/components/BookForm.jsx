import { useState } from "react"
import FormElement from "./FormElement"
import { toast } from "react-toastify"

export default function BookForm(){
  const [values, setValue] = useState({
    name: '',
    phone: '',
    email: '',
    persons: '',
    date: ''
  })

  const [errors, setError] = useState({
    name: {
      isValid: true,
      message: ''
    },
    phone: {
      isValid: true,
      message: ''
    },
    email: {
      isValid: true,
      message: ''
    },
    persons: {
      isValid: true,
      message: ''
    },
    date: {
      isValid: true,
      message: ''
    }
  })

  const changeHandler = (target) => {
    setValue({...values, [target.name]: target.value})
  }

  const submitHandler = (e) => {
    e.preventDefault()
    let isValid = true;

    //TODO: reset error onBlur event, add toast notifications
    if(values.name === ''){
      setError({...errors, 'name': {isValid: false, message: 'Enter your name, please'}})
      isValid = false
    } else {
      setError({...errors, 'name': {isValid: true, message: ''}})
    }


    if (isValid){
      const message = `<b>Name: </b>${values.name}\r
<b>Phone: </b>${values.phone}\r
<b>Email: </b>${values.email}\r
<b>Persons: </b>${values.persons}\r
<b>Date: </b>${values.date}`;

      const url = `https://api.telegram.org/bot${import.meta.env.VITE_BOT_TOKEN}/sendMessage?chat_id=${import.meta.env.VITE_CHAT_ID}&text=${encodeURI(message)}&parse_mode=HTML`;


      fetch(url, {
        method: 'post'
      })
        .then(resp => resp.json())
        .then(resp => {
          if(resp.ok){
            setValue({
              name: '',
              phone: '',
              email: '',
              persons: '',
              date: ''
            })
            toast.success('Your message successfully sent.')
          } else {
            toast.error('Some error occured.')
          }
        })
    }

  }


  return (
    <form onSubmit={submitHandler}>
      <FormElement 
        type="text"
        label="Your Name"
        name="name"
        value={values.name}
        error={errors.name}
        changeHandler={changeHandler}
        required={true}
      />
      <FormElement 
        type="text"
        label="Phone Number"
        name="phone"
        value={values.phone}
        error={errors.phone}
        changeHandler={changeHandler}
        mask="+38 (099) 999-99-99"
      />
      <FormElement 
        type="email"
        label="Your Email"
        name="email"
        value={values.email}
        error={errors.email}
        changeHandler={changeHandler}
      />
      
      <FormElement 
        type="select"
        label="How many persons?"
        name="persons"
        value={values.persons}
        error={errors.persons}
        changeHandler={changeHandler}
        options={
          [
            {
              label: 'How many persons?',
              value: ''
            },
            {
              label: '2',
              value: '2'
            },
            {
              label: '3',
              value: '3'
            },
            {
              label: '4',
              value: '4'
            },
            {
              label: '5',
              value: '5'
            }
          ]
        }
      />
      
      <FormElement 
        type="date"
        label="Enter date"
        name="date"
        value={values.date}
        error={errors.date}
        changeHandler={changeHandler}
      />
      
      <div className="btn_box">
        <button type="submit">
          Book Now
        </button>
      </div>
    </form>
  )
}