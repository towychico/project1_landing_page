const purple_can_DOM = document.getElementById('purple_can');
const blue_can_DOM = document.getElementById('blue_can');
const green_can_DOM = document.getElementById('green_can');
const red_can_DOM = document.getElementById('red_can');
const small_logo_DOM = document.getElementsByClassName('small_logo_container')[0]; // .getElementByClassName actually returns an array
const large_logo_DOM = document.getElementsByClassName('large_logo_container')[0];
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

const ChangeLogoColor = colorSTR => {

  small_logo_DOM.style.backgroundImage = `url(../img/nav_small_logo_${colorSTR}.svg)`;
  large_logo_DOM.style.backgroundImage = `url(../img/nav_large_logo_${colorSTR}.svg)`;

}
function SwitchCan(can_obj, colorSTR){
  ChangeLogoColor(colorSTR);
  HideAllCans();
  can_obj.style.display="inherit";

}
