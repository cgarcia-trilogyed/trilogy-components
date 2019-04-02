import * as React from 'react';
import styled from '../utils/styled-components';
import GlobalStyles from '../GlobalStyles'
import Button from '../Button'

export interface FormProps {
  count?: number;
  errorMessage?: string;
}

const SSFContainer = styled.div`
  background-color: #fff;
  border: 1px solid #333;
  max-width: 400px;
  width: 100%;
`

const HiddenLabel = styled.label `
    position: absolute;
    clip: rect(1px,1px,1px,1px);
`

const Title = styled.h2`
  background-color: #76acdc;
  color: #fff;
  font-size: 24px;
  margin: 0;
  padding: 10px 0;
  text-align: center;
`

const Form = styled.form`
  padding: 20px 30px;
`

const Input = styled.input`
  color: #333;
  font-size: 18px;
  min-height: 40px;
  padding: 0 5px;
  text-align: center;
  width: 100%;
`

const ButtonContainer = styled(`div`)<FormProps>`
  margin: 30px auto;
  ${(props => ((props.count === 0)
      ? `display: flex;
         width: 80%;`
      : `width: 100%;
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-column-gap: 3%;`
    )
  )}
`

const ErrorMessage = styled.p`
  color: #d50000;
  font-size: 1.6rem;
  margin: 0;
`

const Progress = styled.progress`
  width: 100%;
`

export const SSForm = (props: FormProps) => {

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
  
  const calculateProgress = (n: number): string => {
    return (n/4*100).toString() 
  }

  React.useEffect(() => { 
    console.log(count)
    console.log(firstName)
    console.log(lastName) 
  })

  return (
    <SSFContainer>
      <GlobalStyles />
      <Title>
        GET BOOT CAMP INFO
      </Title> 
      <Form>
        {(count === 0) 
          ? <><HiddenLabel htmlFor='firstName'>First Name</HiddenLabel>
            <Input type='text' name='firstName' id='firstName' placeholder='First Name' value={firstName} onChange={ handleFNChange } autoFocus required /></>
          : null
        }
        {(count === 1) 
          ? <><HiddenLabel htmlFor='lastName'>Last Name</HiddenLabel>
            <Input type='text' name='lastName' id='lastName' placeholder='Last Name' value={lastName} onChange={ handleLNChange } autoFocus required /></>
          : null
        }
        {(count === 2) 
          ? <><HiddenLabel htmlFor='email'>Email</HiddenLabel>
            <Input type='email' name='email' id='email' placeholder='Email' value={email} onChange={ handleEmailChange } autoFocus required /></>
          : null
        }
        {(count === 3)
          ? <><label htmlFor='termsAndConditions'>
            <input name='termsAndConditions' id='termsAndConditions' type='checkbox' />By checking this box, I consent to be contacted by or on behalf of Trilogy Education Services, Inc. and Columbia University, including by email or autodialed calls and text messages to any telephone number I provide, about my interest in furthering my career training. I understand my consent is not required to purchase or enroll. I also agree to the Terms of Use and Privacy Policy.</label></>
          : null
        }
        {(count === 4) 
          ? <h3>Success</h3>
          : null
        }
        <ErrorMessage>{ errorMessage }</ErrorMessage>
        {(count !== 4) 
          ? <ButtonContainer count={ count } >
              {(count > 0)
                ?  <Button
                    background='#000000'
                    fontColor='#ffffff'
                    bold
                    type='button'
                    onClick={ back }
                  >
                    BACK
                  </Button>
                : null
              }
              <Button
                background='#76acdc'
                bold
                type='submit'
                onClick={ next }
              >
                NEXT
              </Button>
            </ButtonContainer>
          : null
        }
        <Progress value={ calculateProgress(count) } max="100" />
      </Form>
    </SSFContainer>
  )
}
