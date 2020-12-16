function init_nav() {
    var HTML = ''
    var HTMLside = ''
    const pre = ' <a href="?linkfile='
    const showclass = '" class="w3-bar-item w3-button w3-hover-white w3-hide-small"  onclick="changepage()">'
    const hideclass = '" class="w3-bar-item w3-button w3-hover-white w3-hide-small w3-hide-medium"  onclick="changepage()">'
    const end = '</a> '
    const sideclass = '" class="w3-bar-item w3-button w3-hover-white" onclick="changepage()">'
    fetch("../nav.json")
        .then(response => {
            return response.json();
        })
        .then(data => stash(data));
    function stash(linkdata) {

        for (i = 0; i < linkdata.length; i++) {
            HTMLside += pre + linkdata[i]["file"] + sideclass + linkdata[i]["name"] + end
            if (linkdata[i]["showSmall"] == "true") {
                HTML += pre + linkdata[i]["file"] + showclass + linkdata[i]["name"] + end
            } else {
                HTML += pre + linkdata[i]["file"] + hideclass + linkdata[i]["name"] + end
            }
        }
        document.getElementById('topnavtarget').innerHTML = HTML
        document.getElementById('lablist').innerHTML = HTMLside
    }
}

