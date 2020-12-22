//Load markdown it and container plugin
var md = window.markdownit()
md.set({ html: true })
var container = window.markdownitContainer;

//Markdownit Container Utility
const prepad = '<div class="w3-row"><div class="w3-col l2 m2 s12 placehold "> </div>'
const postpad = '</div><div class="w3-col placehold l2 m2 s12 "> </div>'
const spacer = '<div class="w3-col l2 m2 s12 placehold "> </div>'
var unset_id = 0

//Helper functions//////////////////////////////////////////////////////////////////

function dv(classes, id = '', cls = false) {
    closer = ''
    if (cls) {
        closer = '</div>'
    }
    return '<div id ="' + id + '" class ="' + classes.join(' ') + '" >' + closer
}

//creates a half-width numbered blurb with linkable name
function blurb(tokens, idx, regmatch, type) {
    ///process variables

    var LTR = type.charAt(0) + type.charAt(1)
    ///form div
    var m = tokens[idx].info.trim().match(regmatch);
    if (tokens[idx].nesting === 1) {    // This places an opening tag
        label = md.utils.escapeHtml(m[1]).trim();
        if (label == '') {
            label = 'unset_' + unset_id
            unset_id++;
        }
        return dv(['w3-row'], id = LTR + '-' + label) + spacer +
            dv(['w3-col', type, 'roundbox', 's12 m8 l8', 'w3-container'], id = LTR + '_' + label)
    } else {                                               // This places a closing tag
        return '</div>' + spacer + '</div>'
    }
}

//creates full width collapsible
function collapsible(tokens, idx, regmatch, type) {
    ///process variables
    const spacer = '<div class="w3-col l2 m2 s12 placehold "> </div>'
    var LTR = type.charAt(0) + type.charAt(1)
    ///form div
    var m = tokens[idx].info.trim().match(regmatch);
    if (tokens[idx].nesting === 1) {    // This places an opening tag
        label = md.utils.escapeHtml(m[1]).trim();
        if (label == '') {
            label = 'unset_' + unset_id
            unset_id++;
        }
        return dv(['w3-row'], id = LTR + '-' + label) + dv(['w3-card', type], id = LTR + '_' + label)
            + `<header class="w3-container"><h3>` + type + '</h3></header>' +
            dv(["w3-container", "slideopen"])
    } else {                                               // This places a closing tag
        return `</div><footer class="w3-container preview-hide"><button type="button" class="collapsible"><i class="fa fa-chevron-down vshaker"></i></button> </footer></div></div>`

    }
}

//Note Box maker

function quicknote(tokens, idx, type, extra = '') {

    if (tokens[idx].nesting === 1) {
        return dv(['w3-row']) + spacer + dv(["w3-col", type, extra, "notebox", "s12 m8 l8", "w3-center"]) +
            '<h3> ' + type + '</h3>'
    } else {
        // This places a closing tag
        return '</div>' + spacer + '</div>'
    }
}


function hidernote(tokens, idx, type, extra = '') {
    var m = tokens[idx].info.trim().match(/^Hider(.*)$/);
    if (tokens[idx].nesting === 1) {
        label = md.utils.escapeHtml(m[1]).trim();
        return dv(['w3-row']) + spacer + dv(["w3-col", "s12 m8 l8", "w3-center"]) + dv(["w3-card", type, extra]) +
            '<header class="w3-container"> <h3> ' + label + '</h3> </header>' + dv(['w3-container', 'slideopen'])
    } else {
        // This places a closing tag
        return `</div><footer class="w3-container preview-hide"><button type="button" class="collapsible"><i class="fa fa-chevron-down vshaker"></i></button> </footer> </div></div>`
            + spacer + "</div>"
    }
}

//Figure cards

function figurecard(tokens, idx, regmatch, type) {
    ///process variables

    var LTR = 'Fi'
    ///form div
    var m = tokens[idx].info.trim().match(regmatch);
    if (tokens[idx].nesting === 1) {    // This places an opening tag
        label = md.utils.escapeHtml(m[1]).trim().split(' ')[0]
        size = md.utils.escapeHtml(m[1]).trim().split(' ')[1]
        if (label == '') {
            label = 'unset_' + unset_id
            unset_id++;
        }
        return dv(['w3-center', 'active-center'], id = LTR + '-' + label) +
            dv(['w3-card', 'Fig', type, size], id = LTR + '_' + label) + dv(['w3-container'])
    } else {                                               // This places a closing tag
        return '</div>' + '<footer class="w3-container"><h3>Figure </h3></footer>' + '</div></div>'
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////
// Short Blurbs
md.use(container, 'Equation', {
    render: function (tokens, idx) {
        return blurb(tokens, idx, /^Equation(.*)$/, 'Equation')
    }
});
md.use(container, 'Question', {
    render: function (tokens, idx) {
        return blurb(tokens, idx, /^Question(.*)$/, 'Question')
    }
});

///////////////////////////////////////////////////////////////////////////////////////////////////
//Full Width Collapsibles

md.use(container, 'Exercise', {
    render: function (tokens, idx) {
        return collapsible(tokens, idx, /^Exercise(.*)$/, 'Exercise')
    }
});

md.use(container, 'Simulation', {
    render: function (tokens, idx) {
        return collapsible(tokens, idx, /^Simulation(.*)$/, 'Simulation')
    }
});




///////////////////////////////////////////////////////////////////////////////////////
/// Notes
md.use(container, 'Note', {
    render: function (tokens, idx) {
        return quicknote(tokens, idx, 'Note')
    }
})

md.use(container, 'Warning', {
    render: function (tokens, idx) {
        return quicknote(tokens, idx, 'Warning', 'hshaker')
    }
})

md.use(container, 'Hider', {
    render: function (tokens, idx) {
        return hidernote(tokens, idx, 'Hider')
    }
});


/////////////////////////////////////////////////////////////////////////////////
//Figures

// Full Width Figure
md.use(container, 'Figure', {
    render: function (tokens, idx) {

        return figurecard(tokens, idx, /^Figure(.*)$/, 'Figure')

    }
});

// Right Float Figure
md.use(container, 'RFigure', {

    render: function (tokens, idx) {
        return figurecard(tokens, idx, /^RFigure(.*)$/, 'RFigure')
    }
});

//Left Float Figure
md.use(container, 'LFigure', {

    render: function (tokens, idx) {
        return figurecard(tokens, idx, /^LFigure(.*)$/, 'LFigure')

    }
});


/////////////////////////////////////////////////////////////
// Misc


md.use(container, 'Video', {
    render: function (tokens, idx) {
        if (tokens[idx].nesting === 1) {
            // This places an opening tag
            return dv(['w3-row', 'w3-center']) +
                dv(['w3-card', 'Video']) + '<header class="w3-container"> <h3> Video </h3></header>' + dv(["w3-container"]);

        } else {
            // This places a closing tag
            return '</div></div></div>'
        }
    }
})
md.use(container, 'Materials', {
    render: function (tokens, idx) {
        if (tokens[idx].nesting === 1) {

            // opening tag
            return '<div class="Materials w3-card"><header class="w3-container"><h3>Materials Needed: </h3></header><div class="w3-container">';

        } else {
            return '</div></div>'
        }
    }
})

md.use(container, 'Table',
    {
        render: function (tokens, idx) {
            if (tokens[idx].nesting === 1) {
                // opening tag
                return dv(['w3-row', 'w3-center']) + dv(['Table', 'w3-card']) +
                    '<header class="w3-container"><h3> Table </h3></header>'
                    + dv(['w3-container']);

            } else {
                return '</div></div></div>'
            }
        }
    });

//End Summary
md.use(container, 'Summary',
    {
        render: function (tokens, idx) {
            if (tokens[idx].nesting === 1) {
                // opening tag
                return summary;

            } else {
                return '</div>'
            }
        }
    });
//column
md.use(container, 'col', {

    render: function (tokens, idx) {
        var m = tokens[idx].info.trim().match(/^col(.*)$/);
        if (tokens[idx].nesting === 1) {
            // opening tag
            return '<div class="w3-col s12' + md.utils.escapeHtml(m[1]) + '">';
        } else {
            return '</div>'
        }
    }
});
//row
md.use(container, 'row', {
    render: function (tokens, idx) {
        var m = tokens[idx].info.trim().match(/^row(.*)$/);
        if (tokens[idx].nesting === 1) {
            // opening tag
            return '<div class="w3-row ' + md.utils.escapeHtml(m[1]) + '">';

        } else {
            return '</div>'
        }
    }
});




//Rendererfunc
function doRendering(md_text) {
    var markdown = md_text;
    return md.render(markdown);
}



// Parse Markdown
function includeHTML(filenum = linkfile) {
    var z, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementById("mdcontent");

    file = "../" + filenum + ".md"

    if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) { z.innerHTML = doRendering(this.responseText); updateRoutine() }
                if (this.status == 404) { z.innerHTML = "<h1 id='part0'>This lab is not available yet!</h1>"; }

                /*remove the attribute, and call this function once more:*/
            }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
    }

};
