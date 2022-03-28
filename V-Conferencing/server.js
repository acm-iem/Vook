const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const { v4: uuidV4 } = require('uuid')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.redirect(`/${uuidV4()}`)
})

app.get('/:room', (req, res) => {
  res.render('room', { roomId: req.params.room })
})
const muteUnmute = () => {
    const enabled = myVideoStream.getAudioTracks()[0].enabled;
    if (enabled) {
      myVideoStream.getAudioTracks()[0].enabled = false;
      setUnmuteButton();
    } else {
      myVideoStream.getAudioTracks()[0].enabled = true;
      setMuteButton();
    }
  };
  
  const setMuteButton = () => {
    const html = `<i class="fas fa-microphone"></i>
    <span>Mute</span>`;
  
    document.querySelector(".main__mute_button").innerHTML = html;
  };
  
  const setUnmuteButton = () => {
    const html = `<i class="unmute fas fa-microphone-slash"></i>
    <span>Unmute</span>`;
  
    document.querySelector(".main__mute_button").innerHTML = html;
  };
  
  const playStop = () => {
    console.log("object");
    let enabled = myVideoStream.getVideoTracks()[0].enabled;
    console.log(enabled);
    if (enabled) {
      // console.log(myVideoStream.getVideoTracks()[0].stop());
      myVideoStream.getVideoTracks()[0].enabled= false;
  
      // myVideoStream.setVideoTracks()[0]=false;
      // myVideoStream.setVideoTracks()[0]=false;
      setPlayVideo();
    } else {
      setStopVideo();
      myVideoStream.getVideoTracks()[0].enabled= true;
      // myVideoStream.setVideoTracks()[0]=true;
    }
  };
  
  const setStopVideo = () => {
    const html = `
      <i class="fas fa-video"></i>
      <span>Stop Video</span>
    `;
    document.querySelector(".main__video_button").innerHTML = html;
  };
  
  const setPlayVideo = () => {
    const html = `
    <i class="stop fas fa-video-slash"></i>
      <span>Play Video</span>
    `;
    document.querySelector(".main__video_button").innerHTML = html;
  };
  
  document.querySelector(".leave_meeting").addEventListener("click", () => {
    socket.emit("leaveRoom");
  });
  
io.on('connection', socket => {
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId)
    socket.to(roomId).broadcast.emit('user-connected', userId)

    socket.on('disconnect', () => {
      socket.to(roomId).broadcast.emit('user-disconnected', userId)
    })
  })
})