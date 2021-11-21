import {useSelector, useDispatch} from 'react-redux'
import {increment,decrement,incrementValue, incrementAsync, counterSlice} from './redux/counter'
import TimePicker from 'react-simple-timefield'
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import DatePicker from 'react-native-modern-datepicker';

function App() {

  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const [value, onChange] = useState('10:00');
  const [time, setTime] = useState('');
  
  return (
    <div className="App">
     
     <>
        <h1>
          {counter.value}
        </h1>
        {counter.loading ? 'Loading' : '..'}
        <button onClick = {() => dispatch(increment())}>+1</button>
        <button onClick = {() => dispatch(decrement())}>-1</button>
        <button onClick = {() => dispatch(incrementValue(15))}>+15</button>
        <button onClick = {() => dispatch(incrementAsync())}>Async</button>
        <TextField
        type="time"
        value={value}                    
        onChange={onChange}    />  

<DatePicker
      mode="time"
      minuteInterval={3}
      onTimeChange={selectedTime => setTime(selectedTime)}
    />

     </>
    </div>
  );
}

export default App;
