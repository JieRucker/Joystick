function select(val) {
  return document.querySelector(val);
}

// 左边手柄
var leftJoystick = new Joystick({
  zone: select('#left')
});

var leftJoystickManager = leftJoystick.init();

leftJoystickManager.onStart = function(distance, angle) {
  // console.log('Left:无人机向 => ' + angle + '移动' + distance + '个单位');
  
  switch(angle) {
    case 'up':
      Game.jump(distance);
      break;
    case 'right':
      Game.forward(distance);
      break;
    case 'left':
      Game.backward(distance);
  }
}

leftJoystickManager.onEnd = function() {
  Game.stop();
}