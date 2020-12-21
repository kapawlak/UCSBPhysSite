// Check the file to be loaded based on URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var linkfile = urlParams.get('linkfile')
if (linkfile == null) {
  linkfile = 'welcome'
}

//Equation list
var RefList = { Eq: ['Equation'], Qu: ['Question'] }




function includeHTML(filenum = linkfile) {
  var z, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementById("mdcontent");

  file = filenum + ".md"

  if (file) {
    /*make an HTTP request using the attribute value as the file name:*/
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) { z.innerHTML = doRendering(this.responseText); updateRoutine() }
        if (this.status == 404) { z.innerHTML = "<h1>This lab is not available yet!</h1>"; }
     
        /*remove the attribute, and call this function once more:*/
      }
    }
    xhttp.open("GET", file, true);
    xhttp.send();
    /*exit the function:*/
    return;
  }


};

function changepage(file) {
  urlParams.set("linkfile", file);
  includeHTML(file)
}



function updateRoutine() {
  renderMathInElement(document.body, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false },
      { left: "\\(", right: "\\)", display: false },
      { left: "\\[", right: "\\]", display: true }
    ]
  })
  htmltweaks()
  replace_tags()
  tableOfContents('[data-toc]', '[data-content]')
  setLightBox()
  navbar_close()

}













function htmltweaks() {
  //name headers
  headers = document.querySelectorAll("#mdcontent > h1");
  for (i = 0; i < headers.length; i++) {
    elmnt = headers[i];
    if (i > 0) {
      elmnt.innerHTML = "Part " + romanize(i) + ": " + elmnt.innerHTML
    }
    //elmnt.classList.toggle('w3-row')

    elmnt.id = "part" + i;
  }

  RefList = { Eq: ['Equation'], Qu: ['Question'] }
  eqlist = document.getElementsByClassName('Equation')
  for (i = 0; i < eqlist.length; i++) {
    RefList.Eq[i+1]=eqlist[i].id
  }
  qulist = document.getElementsByClassName('Question')
  for (i = 0; i < eqlist.length; i++) {
    RefList.Qu[i+1]=qulist[i].id
  }
  
  var links = document.querySelectorAll('#mdcontent a')
  for (i = 0; i < links.length; i++) {
    var linkcode = links[i].innerText;
    var identifyit=linkcode + '_' + links[i].hash.slice(4)
    console.log('id= ',identifyit, ' ---linkcode: ', linkcode, ' ---RL[lc]:', RefList[linkcode])
    if (RefList[linkcode]!=null) {
      console.log('entered with lc= ', linkcode)
      num = RefList[linkcode].findIndex(e => e == identifyit )
      if(num>0){
        console.log('found ',identifyit)
      links[i].innerHTML = `${RefList[linkcode][0]} ${num}`
      }
    }
  }


  var coll = document.getElementsByClassName("collapsible");
  for (i = 0; i < coll.length; i++) {
    const start_height = coll[i].parentElement.previousElementSibling.style.maxHeight
      coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.parentElement.previousElementSibling;
      if (content.style.maxHeight != start_height) {
        content.style.maxHeight = start_height;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
      this.parentElement.classList.toggle('preview-hide')
      this.parentElement.classList.toggle('preview-show')
      this.firstElementChild.classList.toggle('fa-chevron-up')
      this.firstElementChild.classList.toggle('fa-chevron-down')
      this.firstElementChild.classList.toggle('vshaker')

    });
    console.log('touched \n\n',coll[i].parentElement.previousElementSibling.innerHTML)
  }
    var warn = document.getElementsByClassName("Warning");

    for (i = 0; i < warn.length; i++) {

      warn[i].addEventListener("click", function () {
        this.classList.toggle("hshaker");
        this.classList.toggle("Warning_muted");

      });
    }


  



}

function navbar_close() {
  navlinks = document.querySelectorAll("#TOCprint a")
  for (i = 0; i < navlinks.length; i++) {
    navlinks[i].onclick = function () {
      w3_close()
    }
  }
}
function romanize(num) {
  var lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }, roman = '', i;
  for (i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

function replace_tags() {
  var text = document.querySelectorAll('#mdcontent h3, #mdcontent h2, #mdcontent p, .Table td')
  for (i = 0; i < text.length; i++) {
    emojified = text[i].innerHTML.replaceAll(/(\@)(.*?)(\@)/g, "<i class='fa $2'></i>")
    text[i].innerHTML = emojified

    fnoted= text[i].innerHTML.replaceAll(/\[fn\](.*?)\[\/fn\]/g, "<span class= 'tooltip'><sup>]</sup><span class ='tooltiptext'>$1</span></span>")
    text[i].innerHTML = fnoted
  }

  




}


function setLightBox() {
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


const summary = '<div class=" Summary w3-row  w3-center w3-card-2 w3-flat-clouds"><h3><strong>In this lab, there were:</strong></h3><div class="w3-col s12 l6 m6 s12"><i class="fa fa-question-circle qtotal w3-hover-shadow"></i></div><div class="w3-col s12 l6 m6 s12"><i class="fa fa-pencil-square-o etotal w3-hover-shadow"></i></div><h3><strong><i class="fa fa-hand-o-right"></i> Please be sure to complete all questions and exercises <i class="fa fa-hand-o-left"></i></strong></h3><br>'