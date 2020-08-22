import React from 'react';
import axios from 'axios';

function JoinBlock({ onLogin }) {
  const [roomId, setRoomId] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [isLoading, setLoading] = React.useState(false);

  const onEnter = async () => {
    if (!roomId.replace(/ +/g, " ").trim().length || !userName.replace(/ +/g, " ").trim().length) {
      return alert('Введите данные');
    }
    const obj = {
      roomId,
      userName,
    };
    setLoading(true);
    await axios.post('http://localhost:5050/rooms', obj);
    onLogin(obj);
  };

  return (
    <div className="join-block">
      <input
        type="text"
        placeholder="Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button disabled={isLoading} onClick={onEnter} className="btn btn-outline-info">
        {isLoading ? 'Loading...' : 'Sign in'}
      </button>
    </div>
  );
}

export default JoinBlock;
