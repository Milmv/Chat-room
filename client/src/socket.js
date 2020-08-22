import io from 'socket.io-client';
const ENDPOINT = 'http://localhost:5050';
const socket = io(ENDPOINT);

export default socket;