import * as React from 'react';
import styled from '../utils/styled-components';
import GlobalStyles from '../GlobalStyles'
import Button from '../Button'

export interface FormProps {
  count?: number;
}

const SSFContainer = styled.div`
  background-color: #fff;
  border: 1px solid #333;
  max-width: 400px;
  width: 100%;
  label {
    position: absolute!important;
    clip: rect(1px,1px,1px,1px);
  }
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

export const SSForm = (props: FormProps) => {

  const [count, setCount] = React.useState(0);
  const [firstName, setfirstName] = React.useState('');

  const next = (e: React.FormEvent): void => {
    e.preventDefault()
    if(count < 3) { setCount(count + 1) }
  }

  const back = (e: React.FormEvent): void => {
    e.preventDefault()
    if(count > 0) { setCount(count - 1) }
  }

  const pressEnter = (e: React.KeyboardEvent): void => {
    if(e.key == 'Enter') { setCount(count + 1) }
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault()
    setfirstName(e.currentTarget.value)
  }
  
  React.useEffect(() => { console.log(count) })

  return (
    <SSFContainer>
      <GlobalStyles />
      <Title>
        GET BOOT CAMP INFO
      </Title> 
      <Form>
        {(count === 0) 
          ? <><label htmlFor='firstName'>First Name</label>
            <Input type='text' name='firstName' id='firstName' placeholder='First Name' value={firstName} onChange={handleChange} onKeyPress={ pressEnter } /></>
          : null
        }
        {(count === 1) 
          ? <><label htmlFor='lastName'>First Name</label>
            <Input type='text' name='lastName' id='lastName' placeholder='Last Name' onKeyPress={pressEnter} autoFocus /></>
          : null
        }
        {(count === 2) 
          ? <><label htmlFor='email'>First Name</label>
            <Input type='email' name='email' id='email' placeholder='Email' onKeyPress={pressEnter} autoFocus /></>
          : null
        }
        <ButtonContainer count={ count } >
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
            type='button'
            onClick={ next }
          >
            NEXT
          </Button>
        </ButtonContainer>
      </Form>
    </SSFContainer>
  )
}
