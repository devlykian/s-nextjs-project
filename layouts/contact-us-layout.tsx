import * as React from 'react'
import { useForm } from 'react-hook-form'
export default function ContactUs() {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => alert(JSON.stringify(data))

  return (
    <form
      className="contactForm contactStyle"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="contactInput contactStyle"
        name="Title"
        placeholder="Enter your title"
        ref={register({
          required: {
            value: true,
            message: 'You must enter your title'
          }
        })}
      />
      <input
        className="contactInput contactStyle"
        name="Name"
        ref={register({
          required: {
            value: true,
            message: 'You must enter your name'
          }
        })}
        placeholder="Enter your name"
      />
      <input
        className="contactInput contactStyle"
        name="E-mail"
        type="email"
        ref={register({
          required: {
            value: true,
            message: 'You must enter your e-mail'
          }
        })}
        placeholder="Enter your e-mail"
      />
      <input
        className="contactInput contactStyle"
        type="tel"
        name="Phone"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        placeholder="Mobile Phone: Format pattern:[0-9]{3}-[0-9]{2}-[0-9]{3} Example, 000-11-222 "
        ref={register({
          required: {
            value: true,
            message: 'please enter your phone number'
          }
        })}
      />
      <select
        className="countrySelect contactStyle"
        name="Country"
        ref={register({
          required: {
            value: true,
            message: 'You must select country'
          }
        })}
      >
        <option value="">Select country...</option>
        <option id="TR">Turkey</option>
        <option id="US">United States of America</option>
        <option id="GB">United Kingdom</option>
        <option id="DE">Germany</option>
        <option id="SE">Sweden</option>
        <option id="KE">Kenya</option>
        <option id="BR">Brazil</option>
        <option id="ZW">Zimbabwe</option>
      </select>
      <input className="contactSubmit contactStyle" type="submit" />
    </form>
  )
}
