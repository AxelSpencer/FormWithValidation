import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);

  const handleShowForm = () => {
    setIsFormVisible(true);
  };

  const handleClearForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setIsFormValid(true);
  };

  const handleSubmit = () => {
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      setIsFormValid(false);
      return;
    }

    handleClearForm();
    setIsFormVisible(false);
  };

  return (
    <div>
      <button onClick={handleShowForm}>Show Form</button>

      {isFormVisible && (
        <form>
          <div className="toLeft">
            <div><label htmlFor="name">Name: </label></div>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="toLeft">
          <div><label htmlFor="email">Email: </label></div>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="toLeft">
          <div><label htmlFor="message">Message: </label></div>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {!isFormValid && <p>Form is invalid! Please fill in all fields.</p>}

          <button type="button" onClick={handleClearForm}>
            Clear
          </button>

          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default App;
