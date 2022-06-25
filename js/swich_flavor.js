let purple_can_DOM = document.getElementById('purple_can');
let blue_can_DOM = document.getElementById('blue_can');
let green_can_DOM = document.getElementById('green_can');
let red_can_DOM = document.getElementById('red_can');
let cans_DOM_arr = [purple_can_DOM, blue_can_DOM, green_can_DOM, red_can_DOM];


function HideAllCans(){
  for (let can of cans_DOM_arr) {
    can.style.display = 'none';
  }
}


window.onload = function() {
  HideAllCans();
  purple_can_DOM.style.display = 'inherit';
};


function SwitchCan(can_obj){
  HideAllCans();
  can_obj.style.display="inherit";
}
