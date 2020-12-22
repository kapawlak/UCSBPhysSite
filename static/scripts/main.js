// Check the file to be loaded based on URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var linkfile = urlParams.get('linkfile')
if (linkfile == null) {
  linkfile = 'courseinfo'
}

//Reference object
var RefList = {}

//Function to run on page change
function changepage(file) {
  urlParams.set("linkfile", file);
  includeHTML(file)
}

//Updates to do after mardown rendering. Order is important here
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

//Goes through nodes and makes some changes
function htmltweaks() {

  //Reset references list
  RefList = { Eq: ['Equation'], Qu: ['Question'], Fi: ['Figure'], Si: ['Simulation'], Ex: ['Exercise'] }

  for (const property in RefList) {
    elist = document.getElementsByClassName(`${RefList[property]}`)
    for (j = 0; j < elist.length; j++) {
      RefList[property].push(elist[j].id)
    }
  }

  var links = document.querySelectorAll('#mdcontent a')
  for (i = 0; i < links.length; i++) {
    var linkcode = links[i].innerText;
    var identifyit = linkcode + '_' + links[i].hash.slice(4)
    if (RefList[linkcode] != null) {
      num = RefList[linkcode].findIndex(e => e == identifyit)
      if (num > 0) {
        links[i].innerHTML = `${RefList[linkcode][0]} ${num}`
      }
    }
  }

  //Allows exercises to be collabsible
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

  }
  //Allows for warnings to be toggled off
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

    fnoted = text[i].innerHTML.replaceAll(/\[fn\](.*?)\[\/fn\]/g, "<span class= 'tooltip'><sup>]</sup><span class ='tooltiptext'>$1</span></span>")
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