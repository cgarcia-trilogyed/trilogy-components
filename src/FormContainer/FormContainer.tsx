import * as React from 'react';
import SSForm from '../SSForm'

export const FormContainer = () => {
  const [count, setCount] = React.useState(0);
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('')

  const next = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault()
    nextCheck(0, firstName, 'Please enter a first name')
    nextCheck(1, lastName, 'Please enter a last name')
    nextCheck(2, email, 'Please enter a valid email')
    if(firstName !== '' && lastName !== '' && email !== '') {
      setCount(count + 1);
    }
  }

  // not a good function, not immutable
  const nextCheck = (c: number, value: string, message: string): void => {
    if(count === c) {
      if(value === '') { 
        setErrorMessage(message)
      } else {
        setErrorMessage('')
        if(count < 3 && value !== '') { setCount(count + 1) }
      }
    }
  } 


  const back = (): void => {
    if(count > 0) { 
      setErrorMessage('')  
      setCount(count - 1) 
    }
  }

  const handleFNChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setErrorMessage('') 
    setFirstName(e.currentTarget.value.trim())
  }

  const handleLNChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setErrorMessage('') 
    setLastName(e.currentTarget.value.trim())
  }

  const handleEmailChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setErrorMessage('')
    setEmail(e.currentTarget.value.trim())
  }

  return (
    <SSForm 
      back={ back }
      count= { count }
      email={ email }
      errorMessage= { errorMessage }
      firstName={ firstName }
      lastName={ lastName }
      handleEmailChange={ handleEmailChange }
      handleFNChange={ handleFNChange }
      handleLNChange={ handleLNChange }
      next={ next }
    />
  )
}
