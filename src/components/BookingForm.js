import React, { useState } from 'react';

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm({ date, times, guests, occasion });
    }

    const handleChange = (e) => {
        setDate(e.target.value);
        props.dispatch(e.target.value);
    }


    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'for>Choose Date:</label>
                            <input id='book-date' value={date} onChange={handleChange} 
                            type='date' required/>
                        </div>

                        {/* for time selection */}
                        <div>
                        <label htmlFor='book-time'for>Choose Time:</label>
                        <select id='book-time' value={times} onChange={(e) => setTimes(e.target.value)}>
                            <option value={guests}>Select a Time</option>
                            {
                                props.availableTimes && props.availableTimes.availableTimes.map(availableTimes => {
                                    return <option key={availableTimes}>{availableTimes}</option>})
                            }
                        </select>
                        </div>

                        {/* for Number of guests */}
                        <div>
                            <label htmlFor='book-guests'>Number of Guests:</label>
                            <input id='book-guests' type='number' min='1' value={guests} onChange={(e) => setGuests(e.target.value)}/>
                        </div>

                        {/* Occasion field */}
                        <div>
                        <label htmlFor='book-occasion'>Occasion:</label>
                        <select id='book-occasion' key={occasion} value={occasion} onChange={e => setOccasion
                            (e.target.value)}>
                                <option>Birthday</option> 
                                <option>Anniversary</option>
                        </select>
                        </div>

                        {/* submit button  */}
                        <div className='btnReceive'>
                            <input aria-label='On Click' type='submit' value={"Make Your Resrvation"}/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;