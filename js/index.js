//
window.addEventListener('DOMContentLoaded', function() {
   var pro = prompt('Wir verwenden dein Videa und foto. Erlaubst du es, dass wir es verwenden? Bestätige es bitte mit ja oder nein', 'ja');
   switch (pro) {
     case 'ja':
       getVideo();
       windowEvent()
       break;
    case 'Ja':
      getVideo();
      windowEvent()
      break;
   case 'nein':
      alert('Das ist schade, dass du dich dagegen entschieden hast. Es gibt nichts zu sehen');
      document.body.style.backgroundImage = 'background: radial-gradient(#7797 8%, #145 8%, #332 70%)';

         break;
  case null:

      alert('Du musst es mit ja bestätigen, wenn du diese Webseite sehen möchtest');
      ctx.font = "30px Arial";
      ctx.fillText("Hello World",10,50);
    break;
  case '':
  alert('Du musst mit ja bestätigen, wenn du diese Webseite sehen möchtest');
      document.body.style.backgroundImage = 'background: radial-gradient(#7797 8%, #145 8%, #332 70%)';
      break;
  case undefined:
    alert("Du musst mit ja bestätigen, wenn du diese Webseite sehen möchtest");
        document.body.style.backgroundImage = 'background: radial-gradient(#7797 8%, #145 8%, #332 70%)';
     }

 });

//
//
//
// function zeitUhr(){
//   let classHours = document.querySelector('.hour');
//   let classMinutes = document.querySelector('.minutes');
//   let classSeconds = document.querySelector('.secondes');
//
//   let newDate = new Date();
//   let hours = newDate.getHours();
//   let minutes = newDate.getMinutes();
//   let seconds = newDate.getSeconds();
//
//   let Secondsdegre = ((seconds / 60) * 360)+ 90;
//   let hoursDegre = ((hours / 12) * 360)+ 90;
//   let minutesDegre = ((minutes / 60)* 360)+ 90;
//
// classHours.style.transform = 'rotate('+ hoursDegre +'deg)';
// classMinutes.style.transform = 'rotate('+ minutesDegre +'deg)';
// classSeconds.style.transform = 'rotate('+Secondsdegre +'deg)';
// }
//
// setInterval(zeitUhr, 100);
//
function UhrEfekt(){
  let span1 = document.querySelector('.span1');
  let span2 = document.querySelector('.span2');
  let span3 = document.querySelector('.span3');
  let content = document.querySelector('.content');

  span1.classList.toggle('span-toggle1');
  span2.classList.toggle('span-toggle2');
  span3.classList.toggle('span-toggle3');
  content.classList.toggle('content-toggle')
};

var menu = document.querySelector('.menu');
 menu.addEventListener("click", UhrEfekt)


 window.onbeforeunload = function(){
  return alert('Are you sure you want to leave?');
};


var video = document.querySelector('.video');
var canvas = document.querySelector('.canvas');
var ctx = canvas.getContext('2d');


function getVideo(){
  navigator.mediaDevices.getUserMedia({video: true, audio: false})
  .then(localMediaStream =>{
    video.src = window.URL.createObjectURL(localMediaStream);
    video.play();
  })
  .catch( er =>{
      console.error('oh scheisse!'+ er)
  })
};


function getCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.drawImage(video, 0 , 0, canvas.width, canvas.height);
}
setInterval(() => getCanvas(), 10);

function makeIMage(){
  var data = canvas.toDataURL('image/jpeg');
  var l = document.createElement('a');
  l.setAttribute('download', 'handsome');
  l.href = data;
  l.innerHTML = `<img src="${data}" />`;
  l.style.zIndex = '9999';
  l.style.float = 'right';
  document.body.appendChild(l);
  console.log(data);
}
let links = document.querySelectorAll('a');

var span = document.createElement("SPAN");
  span.classList.add('highlight');
  document.body.appendChild(span);

function highlightLink(){
  const coords = this.getBoundingClientRect();
    var cords = {
        width: coords.width,
        height: coords.height,
        top: coords.top + window.scrollY,
        left: coords.left + window.scrollX
      }

  span.style.width = `${cords.width}px`;
  span.style.height = `${cords.height}px`;
  span.style.transform = `translate(${cords.left}px, ${cords.top}px)`;
  console.log(cords);
}
function highlightout(){
  const coords = this.getBoundingClientRect();
    var cords = {
        top: coords.top + window.scrollY,
        left: coords.left + window.scrollX
      }
  span.style.width = null;
  span.style.height = null;
  span.style.transform = null;
  console.log(coords);
}
links.forEach(a => a.addEventListener('mouseenter', highlightLink));
links.forEach(a => a.addEventListener('mouseout', highlightout));

let myHistory = ' oh ja. Hast du dich entdeckt. cklick auf dem Foto zu speichern';
document.body.style.backgroundImage = 'background: radial-gradient(#7797 8%, #145 8%, #332 70%)';
function windowEvent(){
window.addEventListener('scroll', function (){

  if(window.scrollY >= 10){
    var p = document.createElement('p');
    p.textContent = myHistory;
    p.style.zIndex = '999';
    p.style.margin = "30px";
    document.body.appendChild(p);
    makeIMage();
  }
});
}

//
// $(document).ready(function(){
//   $('#button').click(function (){
//     var value = $('#intup').val();
//     var url = 'http://en.wikipedia.org/w/api.php?format=json&action=query&titles='+ value +'&prop=revisions&rvprop=content&callback=?';
//     $.ajax({
//       url: url,
//       type: "GET",
//       dataType: 'json',
//     success: function(data){
//       console.log(JSON.stringify(data.query.pages));
//
//           $('.output').html(JSON.stringify(data.query.pages));
//     }
//   }).done(function(response){
//       console.log("Daten gespeichert: " + response);
//   })
//   })
//
//   })
