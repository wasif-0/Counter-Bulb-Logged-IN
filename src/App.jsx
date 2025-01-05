import { useState } from 'react';
import Bulb from './Bulb';
import Login from './Login';

const App = () => {
  let [userName, setUserName] = useState('Counter');
  const UpdateName = () => {
    setUserName('INC | DEC');
  };
  let [countName, setCountName] = useState(0);

  const Increment = () => {
    setCountName(++countName);
  };

  const Decrement = () => {
    setCountName(countName <= 0 ? 0 : --countName);
  };

  return (
    <>
      <style>
        {`
          .app-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: #f4f4f9;
            font-family: 'Arial', sans-serif;
            color: #333;
            text-align: center;
          }

          .header {
            margin-bottom: 30px;
          }

          .user-name {
            font-size: 2.5rem;
            color: #2b2d42;
            margin-bottom: 10px;
          }

          .change-name-btn {
            padding: 10px 20px;
            font-size: 1.1rem;
            cursor: pointer;
            background-color: #4CAF50;
            color: #fff;
            border: none;
            border-radius: 5px;
            transition: background-color 0.3s;
          }

          .change-name-btn:hover {
            background-color: #45a049;
          }

          .counter-section {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .counter {
            font-size: 4rem;
            font-weight: bold;
            color: #ff6347;
            margin-bottom: 20px;
          }

          .button-group {
            display: flex;
            gap: 15px;
          }

          .control-btn {
            padding: 12px 25px;
            font-size: 1.1rem;
            cursor: pointer;
            background-color: #008CBA;
            color: #fff;
            border: none;
            border-radius: 5px;
            transition: background-color 0.3s;
          }

          .control-btn:hover {
            background-color: #007bb5;
          }
        `}
      </style>

      <div className="app-container">
        <div className="header">
          <h1 className="user-name">{userName}</h1>
          <button onClick={UpdateName} className="change-name-btn">Change Name</button>
        </div>

        <div className="counter-section">
          <h1 className="counter">{countName}</h1>
          <div className="button-group">
            <button onClick={Increment} className="control-btn">Increment</button>
            <button onClick={Decrement} className="control-btn">Decrement</button>
          </div>
        </div>
      </div>

      <br /><br /><br /><br /><br /><br /><br /><br />
      <Bulb/>
      <Login/>

      <input onChange={(e)=>{
        console.log(e.target.value);
      }} type="text" />
    </>
  );
};

export default App;
