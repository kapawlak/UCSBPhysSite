//Load markdown it and container plugin
var md = window.markdownit()
md.set({ html: true})
var container = window.markdownitContainer;

//Markdownit Container special settings
const preamble='<div class="w3-row" style="margin: 50px 0px;"><div class="w3-col l2 m2 s12 placehold "> </div>'
const postamble='</div><div class="w3-col placehold l2 m2 s12 "> </div>'
var unset_id=0

function embed_div(name, type){
    if (name ==''){
        name = 'unset_'+unset_id
        unset_id++;
    }
    var LTR=type.charAt(0) + type.charAt(1)
    return '<div class="w3-row" id= '+ name + '></div>' +preamble+'<div class="w3-col ' + type + ' roundbox s12 m8 l8 w3-container"' +' id="'+LTR+'_'+name+'">'
}

function quitshake(){
    console.log('quit')
    self.style.animationIterationCount = 0
    console.log('quit?')
  }

//////////////////////////////////////////////////////////////////////////////////////////////////
md.use(container , 'Figure:Equation',{
    render: function (tokens, idx) {
       var m = tokens[idx].info.trim().match(/^Figure:Equation(.*)$/);
       if (tokens[idx].nesting === 1) { 
        // This places an opening tag
        return embed_div(md.utils.escapeHtml(m[1]).trim(), 'Equation');
      }else{
        // This places a closing tag
        return postamble + '</div>'
      }
    }
});
md.use(container , 'Question',{
    render: function (tokens, idx) {
        var m = tokens[idx].info.trim().match(/^Question(.*)$/);
        if (tokens[idx].nesting === 1) { 
            // This places an opening tag
            return  embed_div(md.utils.escapeHtml(m[1]).trim(), 'Question');
        }else{
            // This places a closing tag
            return postamble + '</div>'
        }
    }
});
md.use(container , 'Exercise',
    {
    render: function (tokens, idx) {
        if (tokens[idx].nesting === 1) { 
        // This places an opening tag
        return  '<div class="w3-row"><div class="w3-col Exercise roundboxL s12 m12 l12 w3-container">'

        }else{
        // This places a closing tag
        return '</div></div>'
        }
    }
});
md.use(container,'Figure:Simulation', {
render: function (tokens, idx) {
    if (tokens[idx].nesting === 1) { 
    // This places an opening tag
    return '<div class="w3-row"> <div class="w3-col Simulation roundboxL s12 m12 l12 w3-container w3-center">';

    }else{
    // This places a closing tag
    return  '</div></div>'
    }}
})

md.use(container,'Video', {
    render: function (tokens, idx) {
        if (tokens[idx].nesting === 1) { 
        // This places an opening tag
        return '<div class="w3-row"> <div class= "w3-col Video s12 m12 l12"><br>';
    
        }else{
        // This places a closing tag
        return  '</div></div>'
        }}
    })


///Notes
md.use(container,'Note',{
render: function (tokens, idx) {
    if (tokens[idx].nesting === 1) { 
    // This places an opening tag
    return  preamble+'<div class="w3-col Note roundbox  s12 m8 l8 w3-center"> <h3> Note:</h3>'

    }else{
    // This places a closing tag
    return postamble + '</div>'
    }
    }
})
md.use(container,'Warning',{
    render: function (tokens, idx) {
        if (tokens[idx].nesting === 1) { 
        // This places an opening tag
        return  preamble+'<div class="w3-col Warning roundbox  s12 m8 l8 w3-center shaker"> <h3> Warning!</h3>'
    
        }else{
        // This places a closing tag
        return '<h5 class="clickwarning">Click to Acknowledge</h3>'+ postamble + '</div>'
        }
        }
    })








// Full Width Figure
md.use(container , 'Figure:Figure',{
render: function (tokens, idx) {
    if (tokens[idx].nesting === 1) { 
    // This places an opening tag
    return '<div class="w3-center"><div class=" Figure Fig ">';

    }else{
    // This places a closing tag
    return  '</div></div>'
    }}
});

// Right Float Figure
md.use(container , 'Figure:RFigure',{

render: function (tokens, idx) {
    if (tokens[idx].nesting === 1) {
    // opening tag
    return '<div class="RFigure Fig w3center">';

    }else{
    return '</div>'
    }
}
});

//Left Float Figure
md.use(container , 'Figure:LFigure',{

render: function (tokens, idx) {
    if (tokens[idx].nesting === 1) {
    // opening tag
    return '<div class="LFigure Fig ">';

    }else{
    return '</div>'
    }
}
});

// column
md.use(container , 'col',{

    render: function (tokens, idx) {
        var m = tokens[idx].info.trim().match(/^col(.*)$/);
        console.log(m)
        if (tokens[idx].nesting === 1) {
        
        // opening tag
        return '<div class="w3-col s12'+md.utils.escapeHtml(m[1])+'">';

        }else{
        return '</div>'
        }
    }
});

md.use(container , 'row',{

render: function (tokens, idx) {
    var m = tokens[idx].info.trim().match(/^row(.*)$/);
    console.log(m)
    if (tokens[idx].nesting === 1) {
    console.log('regex', md.utils.escapeHtml(m[1]))
    // opening tag
    return '<div class="w3-row '+md.utils.escapeHtml(m[1])+'">';

    }else{
    return '</div>'
    }
}
});

md.use(container , 'Materials',{
    render: function (tokens, idx) {
        if (tokens[idx].nesting === 1) {
        
        // opening tag
        return '<div class="Materials w3-card-2"><header class="w3-container w3-teal"><h3>Materials Needed: </h3></header><div class="w3-container">';

        }else{
        return '</div></div>'
        }
    }
})



md.use(container , 'Figure:Table',
{
render: function (tokens, idx) {
    if (tokens[idx].nesting === 1) {
    // opening tag
    return '<div class="Table roundbox w3-padding-large w3-padding-32 w3-center">';

}else{
    return '</div>'
}
}
});

function doRendering(md_text){ 
    var markdown = md_text;
    return md.render(markdown);
  }
  
  
      

