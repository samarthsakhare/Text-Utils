import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toogleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#040520'
      showAlert("Dark Mode turned On", "success");
      document.title = 'Text Utils - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode turned On", "success");
      document.title = 'Text Utils - Light Mode';
    }
  }

  return (
    <>


      <Navbar title="TextUtils" mode={mode} toggleMode={toogleMode} />

      <Alert alert={alert} showAlert={showAlert} />



      <div className="container mt-5" id='s'>
        <TextForm heading="Enter the Text to Analyze below" mode={mode} showAlert={showAlert} />
      </div>

    </>
  );
}

export default App;
