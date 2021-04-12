import './App.css';
import { EasybaseProvider, useEasybase } from 'easybase-react';
import { useEffect } from 'react';
import ebconfig from './ebconfig';

function App() {
  return (
    <div className="App" style={{ display: "flex", justifyContent: "center" }}>
      <EasybaseProvider ebconfig={ebconfig}>
        <Notes />
        <NewNoteButton />
      </EasybaseProvider>
    </div>
  );
}

function Notes() {
  const { Frame, sync, configureFrame } = useEasybase();

  useEffect(() => {
    configureFrame({ tableName: "NOTES APP", limit: 10 });
    sync();
  }, []);

  const noteRootStyle = {
    border: "2px #0af solid",
    borderRadius: 9,
    margin: 20,
    backgroundColor: "#efefef",
    padding: 6
  };

  return (
    <div style={{ width: 400 }}>
      {Frame().map(ele => 
        <div style={noteRootStyle}>
          <h3>{ele.username}</h3>
          <p>{ele.password}</p>
        </div>
      )}
    </div>
  )
}


export default App;
function NewNoteButton() {
  const { Frame, sync } = useEasybase();

  const buttonStyle = {
    position: "absolute",
    left: 10,
    top: 10,
    fontSize: 21
  }

  const handleClick = () => {
    const NewUsername = prompt("Username:");
    const newPassword = prompt("Password:");
    
    Frame().push({
      username: NewUsername,
      password: newPassword,
    })
    
    sync();
  }

  return <button style={buttonStyle} onClick={handleClick}>📓 Add Note 📓</button>
}
