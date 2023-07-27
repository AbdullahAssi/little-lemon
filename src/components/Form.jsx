import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {

  const url = 'https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js'



  const [date, setDate] = useState(new Date())
  const [selectedOption, setSelectedOption] = useState('Indoor Seating')
  const [diners, setDiners] = useState(2)
  const [ocassion, setOcassion] = useState('birthday')
  const [time, setTime] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [isTermsChecked, setIsTermsChecked] = useState(false)
  const [textAreaValue, setTextAreaValue] = useState('')

  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!date || !time || isTermsChecked === false) {
      alert('Fill in all fields before submitting')
      return;
    }

    const formData = {
      Date: date,
      Seating: selectedOption,
      Diners: diners,
      Ocassion: ocassion,
      Time: time,
      Name: name,
      Email: email,
      Phone: phone,
      Terms: isTermsChecked,
      Instructions: textAreaValue
    }

    toast.success('Form submitted successfully!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    submitFormData(formData);
    console.log('form submitted');
    setDate('')
    setDiners(2)
    setOcassion('birthday')
    setTime('')
    setName('')
    setEmail('')
    setPhone('')
    setIsTermsChecked(false)
    setTextAreaValue('')

  }


  const submitFormData = (data) => {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint URL
    fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('API Response:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };


  return (
    <section className='section  background-primary'>
      <section className='banner-recipes'>
        <h2 className='form-heading'> Reservations</h2>
        <form className='form form-layout' onSubmit={handleSubmit}>
          <div className="seating form-row">
            <div className="field">
              <label className='form-label'>
                <input
                  type="radio"
                  value="Indoor Seating"
                  checked={selectedOption === 'Indoor Seating'}
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
                Indoor Seating
              </label>
            </div>
            <div className="field">
              <label className='form-label'>
                <input
                  type="radio"
                  value="Outoor Seating"
                  checked={selectedOption === 'Outoor Seating'}
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
                Outdoor Seating
              </label>
            </div>
          </div>
          <div className="form-row seating">
            <div className="field">
              <label htmlFor="date" className="form-label">Date</label>
              <input
                type="date"
                id="date"
                className='custom-date-input'
                placeholder={new Date()}
                value={date}
                onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor="diners" className="form-label">No of Diners</label>
              <input
                type="number"
                id="diners"
                min='2'
                max='8'
                placeholder='2'
                className='custom-number-input'
                value={diners}
                onChange={(e) => setDiners(e.target.value)} />
            </div>
          </div>
          <div className="form-row seating">
            <div className="field">
              <label htmlFor="ocassion" className="form-label">Ocassion</label>
              <select
                id="ocassion"
                className='custom-select'
                value={ocassion}
                onChange={(e) => setOcassion(e.target.value)}>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="casual">Casual</option>
                <option value="meeting">Meeting</option>
                <option value="date">Date</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="time" className="form-label">Select Time</label>
              <input
                type="time"
                id="time"
                className='custom-time-input'
                value={time}
                onChange={(e) => setTime(e.target.value)} />
            </div>
          </div>
          <div className="seating form-row">
            <div className="field">
              <label htmlFor="name" className='form-label'>Name*</label>
              <input
                type="text"
                id="name"
                className='form-input custom-input custom-width'
                required
                value={name}
                onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor="email" className='form-label'>Email*</label>
              <input
                type="email"
                id="email"
                className='form-input custom-input custom-width'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <div className="seating form-row">
            <div className="field">
              <label htmlFor="phone" className='form-label'>Phone Number*</label>
              <input
                type="tel"
                id="phone"
                className='form-input custom-input custom-width'
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor="tnc" className='form-label tnc'>Agree to the terms and conditions*
                <input
                  type="checkbox"
                  id="tnc"
                  className='form-input'
                  checked={isTermsChecked}
                  onChange={(e) => setIsTermsChecked(e.target.checked)} />
              </label>
            </div>
          </div>
          <div className="seating form-row">
            <label htmlFor="instuctions" className='form-label'>Instructions</label>
            <textarea
              id="terms"
              cols="95"
              rows="10"
              className='custom-textarea textarea'
              value={textAreaValue}
              onChange={(e) => setTextAreaValue(e.target.value)} />
          </div>
          <button type="submit" className='btn'>Confirm Reservation</button>
        </form>
        <ToastContainer />
      </section>
    </section>
  )
}

export default Form