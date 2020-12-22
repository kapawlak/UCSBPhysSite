//Makes compatible with format////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

md.use(container, 'Figure:Equation', {
    render: function (tokens, idx) {
        return blurb(tokens, idx, /^Figure:Equation(.*)$/, 'Equation')
    }
});



md.use(container, 'Figure:Simulation', {
    render: function (tokens, idx) {
        return collapsible(tokens, idx, /^Figure:Simulation(.*)$/, 'Simulation')
    }
})



md.use(container, 'Figure:Figure', {
    render: function (tokens, idx) {
        return figurecard(tokens, idx, /^Figure(.*)$/, 'Figure')
    }
});


md.use(container, 'Figure:Table',
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





