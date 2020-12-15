// Check the file to be loaded based on URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var linkfile = urlParams.get('linkfile')
if (linkfile == null){
  linkfile='welcome'
}

//Equation list
var EqList=[]



function activeincludeHTML(filenum=linkfile) {
  var z, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementById("mdcontent");

  file= filenum+".md"
  
  if (file) {
    /*make an HTTP request using the attribute value as the file name:*/
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status == 200) {z.innerHTML = doRendering(this.responseText) ;}
        if (this.status == 404) {z.innerHTML = "<h1>This lab is not available yet!</h1>";}
        updateRoutine();
        /*remove the attribute, and call this function once more:*/
      }
    }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;     
    }
  
  
};

  function changepage(file){
    urlParams.set("linkfile", file);
    activeincludeHTML(file)
  }

 

function updateRoutine(){
  renderMathInElement(document.body, {
    delimiters:[
      {left: "$$", right: "$$", display: true},
      {left: "$", right: "$", display: false},
      {left: "\\(", right: "\\)", display: false},
      {left: "\\[", right: "\\]", display: true}
    ]})

  htmltweaks()
  replace_icon()
  tableOfContents('[data-toc]', '[data-content]')

  setLightBox()
  document.getElementById('collapsible').style.bottom='0px'
  navbar_close()
 
  }






  

    




function htmltweaks() {
  //name headers
  headers=document.querySelectorAll("#mdcontent > h1");
  for (i = 0; i < headers.length; i++) {
    elmnt = headers[i];
    if (i>0){
    elmnt.innerHTML= "Part " + romanize(i) +": "+elmnt.innerHTML
    }
    //elmnt.classList.toggle('w3-row')
   
    elmnt.id = "part" +i ;
  }

  eqlist=document.getElementsByClassName('Equation')
  for(i=0;i<eqlist.length;i++){
    EqList[i]=eqlist[i].id
  }

 


  

}

function navbar_close(){
  navlinks=document.querySelectorAll("#TOCprint a")
  for(i=0;i<navlinks.length;i++){
    navlinks[i].onclick= function (){
      w3_close()
  }
}
}
function romanize(num) {
  var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}


function setLightBox(){
  // all images inside the image modal content class
  const lightboxImages = document.querySelectorAll('.Fig img');

  // dynamically selects all elements inside modal popup
  const modalElement = element =>
    document.querySelector(`.image-modal-popup ${element}`);

  const body = document.querySelector('body');
  const modalPopup = document.querySelector('.image-modal-popup');

  // closes modal on clicking anywhere and adds overflow back
  document.addEventListener('click', () => {
    body.style.overflow = 'auto';
    modalPopup.style.display = 'none';
  });


  // loops over each modal content img and adds click event functionality
  lightboxImages.forEach(img => {
    const data = img.dataset;
    img.addEventListener('click', e => {
      body.style.overflow = 'hidden';
      e.stopPropagation();
      modalPopup.style.display = 'block';
      modalElement('h3').innerHTML = img.alt;
      modalElement('img').src = img.src;
    });
    });
}



function replace_icon(){
  var text=document.querySelectorAll('#mdcontent h3, #mdcontent h2, #mdcontent p, .Table td')
  for(i=0;i<text.length;i++){
    emojified=text[i].innerHTML.replaceAll(/(\@)(.*?)(\@)/g, "<i class='fa $2'></i>")
    text[i].innerHTML=emojified
  }

  var links = document.querySelectorAll('#mdcontent a')
  for (i = 0; i < links.length; i++) {
      if(links[i].innerText=='Eq'){
      eqnum=EqList.findIndex( function findTitle (eq) {
        return eq == 'Eq_'+links[i].hash.slice(1)
      }) +1
      links[i].innerHTML = 'Equation ' + eqnum
    }
  }

  warnings=document.getElementsByClassName('Warning')
  for(i=0;i<length.warnings;i++){
    warnings[i].addEventListener("click",function stopit(){
      warnings[i].classList.toggle('shaker') ;
      warnings[i].querySelector('h5').innerHTML = 'Saftey First';

    })

      

    
}
}


const summary = '<div class=" Summary w3-row  w3-center w3-card-2 w3-flat-clouds"><h3><strong>In this lab, there were:</strong></h3><div class="w3-col s12 l6 m6 s12"><p><i class="fa fa-question-circle qtotal w3-hover-shadow"></i></p></div><div class="w3-col s12 l6 m6 s12"><p><i class="fa fa-pencil-square-o etotal w3-hover-shadow"></i></p></div><h3><strong><i class="fa fa-hand-o-right"></i> Please be sure to complete all questions and exercises <i class="fa fa-hand-o-left"></i></strong></h3><br>'