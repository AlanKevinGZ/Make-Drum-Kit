const sounds = {
    'w': new Audio('./sounds/tom-1.mp3'),
    'a': new Audio('./sounds/tom-2.mp3'),
    's': new Audio('./sounds/tom-3.mp3'),
    'd': new Audio('./sounds/tom-4.mp3'),
    'j': new Audio('./sounds/snare.mp3'),
    'k': new Audio('./sounds/crash.mp3'),
    'l': new Audio('./sounds/kick-bass.mp3')
  };

 
  document.addEventListener('keydown', eventKey);

  
  const buttons = document.querySelectorAll('.drum');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const key = button.classList[0]; 
      playSound(key);
    });
  });

 
  function eventKey(e) {
    playSound(e.key.toLowerCase());
  }


  function playSound(key) {
    const sound = sounds[key];
    if (sound) {
      sound.currentTime = 0; 
      sound.play();
    }
  }