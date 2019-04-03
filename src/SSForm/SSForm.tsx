import * as React from 'react';
import styled from '../utils/styled-components';
import GlobalStyles from '../GlobalStyles'
import Button from '../Button'

export interface FormProps {
  back?: () => void;
  count: number;
  firstName?: string;
  email?: string;
  errorMessage?: string;
  handleEmailChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  handleFNChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  handleLNChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  lastName?: string;
  next?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const calculateProgress = (n: number): string => {
  return (n/4*100).toString() 
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

export const SSForm = (props: FormProps) => (
  <SSFContainer>
    <GlobalStyles />
    <Title>
      GET BOOT CAMP INFO
    </Title> 
    <Form>
      {(props.count === 0) 
        ? <><HiddenLabel htmlFor='firstName'>First Name</HiddenLabel>
          <Input type='text' name='firstName' id='firstName' placeholder='First Name' value={props.firstName} onChange={ props.handleFNChange } autoFocus required /></>
        : null
      }
      {(props.count === 1) 
        ? <><HiddenLabel htmlFor='lastName'>Last Name</HiddenLabel>
          <Input type='text' name='lastName' id='lastName' placeholder='Last Name' value={props.lastName} onChange={ props.handleLNChange } autoFocus required /></>
        : null
      }
      {(props.count === 2) 
        ? <><HiddenLabel htmlFor='email'>Email</HiddenLabel>
          <Input type='email' name='email' id='email' placeholder='Email' value={props.email} onChange={ props.handleEmailChange } autoFocus required /></>
        : null
      }
      {(props.count === 3)
        ? <><label htmlFor='termsAndConditions'>
          <input name='termsAndConditions' id='termsAndConditions' type='checkbox' />By checking this box, I consent to be contacted by or on behalf of Trilogy Education Services, Inc. and Columbia University, including by email or autodialed calls and text messages to any telephone number I provide, about my interest in furthering my career training. I understand my consent is not required to purchase or enroll. I also agree to the Terms of Use and Privacy Policy.</label></>
        : null
      }
      {(props.count === 4) 
        ? <h3>Success</h3>
        : null
      }
      <ErrorMessage>{ props.errorMessage }</ErrorMessage>
      {(props.count !== 4) 
        ? <ButtonContainer count={ props.count }>
            {(props.count > 0)
              ?  <Button
                  background='#000000'
                  fontColor='#ffffff'
                  bold
                  type='button'
                  onClick={ props.back }
                >
                  BACK
                </Button>
              : null
            }
            <Button
              background='#76acdc'
              bold
              type='submit'
              onClick={ props.next }
            >
              NEXT
            </Button>
          </ButtonContainer>
        : null
      }
      <Progress value={ calculateProgress(props.count) } max="100" />
    </Form>
  </SSFContainer>
)
