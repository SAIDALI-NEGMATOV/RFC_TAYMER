import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* if (second <= 59 && second < 1) {
        second--;
        setSecond(second)
      } else if (minute <= 59 && second < 1) {
        minute--;
        setMinute(minute);
        setSecond((second = 59));
      } else if (minute <= 0 && second <= 1) {
        minute--;
        setMinute(minute);
        setSecond((second = 59));
        hour--
        setHour(hour)
      } else if (hour <= 59 && minute < 1) {
        hour--;
        setHour(hour);
        setMinute((minute = 59));
        setSecond((second = 59));
      } else if (hour <= 0 && minute <= 1) {
        hour = 0;
        setHour(hour);
        setSecond((second = 59));
        setMinute((minute = 59));
      } */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
