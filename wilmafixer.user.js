// ==UserScript==
// @name         Wilma fixer
// @namespace    https://jonnelafin.github.io/WilmaFixer/
// @version      1.55
// @description  Fixes the labeling on some finnish wilma-instances. Under the MIT-License, please use the according attribution when forking.
// @author       jonnelafin
// @license      MIT; https://spdx.org/licenses/MIT.html
// @match        https://yvkoulut.inschool.fi/schedule*
// @grant        none
// @updateURL    https://openuserjs.org/meta/jonnelafin/Wilma_fixer.meta.js
// @downloadURL  https://openuserjs.org/install/jonnelafin/Wilma_fixer.user.js
// @copyright    2020, jonnelafin (https://openuserjs.org/users/jonnelafin)
// ==/UserScript==

//Toggles for different parts of the schedule
var rclassn = true;
var rteachn = false;
var rroomnn = false;
//stuff
const fontsize = "12px";
const uz = function(valz) {
    alert(valz);
};
(function() {
    'use strict';

    // Your code here...
    var settings = document.getElementsByClassName("dropdown-menu")[3];
    settings.insertAdjacentHTML('beforeend', "<li class=\"dropdown-header\">Wilma Fixer v1.5 by jf</li>");
    settings = document.getElementsByClassName("dropdown-menu")[3];
    settings.insertAdjacentHTML('beforeend', "<li><a href=\"\">Font Size: </a></li>");
    settings = document.getElementsByClassName("dropdown-menu")[3];
    settings.insertAdjacentHTML('beforeend', "<select id=\"ddlViewBy\" onchange=\"alert(this.options[this.selectedIndex].value);\">   <option value=\"11px\">11</option>   <option value=\"12px\" selected=\"selected\">12</option>   <option value=\"14px\">14</option>   </select>");
    var blocks = document.getElementsByClassName("block");
    var body = document.getElementsByClassName("somebody")[0];
    body.style.background = "rgb(0,0,0)";
    body.style.color = "rgb(255, 255, 255)";
    var targets_src = document.getElementsByClassName("no-underline-link");
    var cont = document.getElementById("container");
    //jakso
    var jakso_dropdown = document.querySelectorAll("li[role='presentation active']")[0];
    var jakso = (jakso_dropdown.innerHTML).split(" (")[0].split(">")[1];
    console.log("Jakso: " + jakso);
    var jakso_to = document.getElementsByClassName("row")[0];
    jakso_to.style.background = "rgb(25, 25, 25)";
    document.getElementById("page-content-area").style.background = "rgb(50, 50, 50)";
    document.getElementById("page-content-area").style.color = "rgb(200, 200, 200)";
    console.log(jakso_to);
    var all = document.getElementsByTagName("label");
    for (var i8 = 0; i8 < all.length; i8++) {
        all[i8].style.color = "rgb(200, 200, 200)";
    }
    all = document.getElementsByTagName("button");
    for (i8 = 0; i8 < all.length; i8++) {
        all[i8].style.color = "rgb(200, 200, 200)";
        all[i8].style.background = "rgb(20, 20, 20)";
    }
    all = document.getElementsByTagName("input");
    for (i8 = 0; i8 < all.length; i8++) {
        all[i8].style.color = "rgb(200, 200, 200)";
        all[i8].style.background = "rgb(20, 20, 20)";
    }
    all = document.getElementsByTagName("alert");
    for (i8 = 0; i8 < all.length; i8++) {
        all[i8].style.color = "rgb(200, 200, 200)";
        all[i8].style.background = "rgb(20, 20, 20)";
    }
    all = document.querySelectorAll("li[role='presentation']");
    for (i8 = 0; i8 < all.length; i8++) {
        all[i8].children[0].style.color = "rgb(200, 200, 200)";
        all[i8].children[0].style.background = "rgb(20, 20, 20)";
        console.log(all[i8]);
    }
    all = document.getElementsByClassName("dropdown-menu")
    for (i8 = 0; i8 < all.length; i8++) {
        all[i8].style.color = "rgb(200, 200, 200)";
        all[i8].style.background = "rgb(20, 20, 20)";
        console.log(all[i8]);
    }
    all = document.getElementsByClassName("modal-body")
    for (i8 = 0; i8 < all.length; i8++) {
        all[i8].children[1].style.color = "rgb(200, 200, 200)";
        all[i8].children[1].style.background = "rgb(20, 20, 20)";
        console.log(all[i8]);
    }
    //more style
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.modal-content { color : rgb(200, 200, 200); background : rgb(20, 20, 20);}';
    document.getElementsByTagName('head')[0].appendChild(style);
    document.getElementsByClassName("active")[1].style.color = "rgb(200, 200, 200)";
    //cont.height = "200%";
    //
    //
    var targets = [];
    var lastday = "-start-";
    var starts = {};
    var ends = {};
    var tochange = {};
    for (var i=0; i < blocks.length; i+=1){
        var block = blocks[i];
        //block.style.height = ;
        var childs = block.childNodes[0].childNodes;
        var classn = childs[0];
        //get course metadata
        var metas = block.getElementsByClassName("sr-only");
        var meta = metas[0].innerHTML;
        var day = meta.split(": ")[0];
        var start = ( meta = meta.split(": Alkamisaika")[1] ).split("Päättymisaika")[0];
        var end = ( meta = meta.split("Päättymisaika")[1] ).split(": ")[0];
        //var
        /*
        console.log(day);
        console.log(start);
        console.log(end);
        */
        if(!starts[day]){
            starts[day] = start;
        }
        ends[day] = end;
        //size changes
        classn.style.fontSize = fontsize;
        if(childs.length < 3){
            rteachn = false;
        }
        else{
            var teachn = childs[1];
            teachn.style.fontSize = fontsize;
        }
        if(childs.length < 3){
            rroomnn = false;
        }
        else{
            var roomnn = childs[2];
            roomnn.style.fontSize = fontsize;
        }
        if(rclassn === true){
            tochange[classn.innerHTML.split(": ")[1]] = classn.title;
            classn.innerHTML = classn.title;
        }
        if(rteachn === true){
            teachn.innerHTML = teachn.title;
        }
        if(rroomnn === true){
            //roomnn.innerHTML = roomnn.title;
        }
        block.style.background = "rgb(16, 20, 24)";
        block.style.color = "#4D8400";
    }
    console.log(starts);
    console.log(ends);
    console.log();
    console.log();
    var paivat = Object.keys(starts);
    var o = jakso + ": \n";
    for(i=0; i < paivat.length; i+=1){
        var s = starts[paivat[i]];
        var e = ends[paivat[i]];
        o = o + paivat[i] + ":		" + s + " - " + e + "\n";
    }
    console.log(o);
    o = jakso + ": <br \>";
    for(i=0; i < paivat.length; i+=1){
        s = starts[paivat[i]];
        e = ends[paivat[i]];
        o = o + paivat[i] + ":		" + s + " - " + e + "<br \>";
    }
    var ajat = document.createElement("p")
    jakso_to.appendChild(ajat);
    ajat.innerHTML = "" + o + "";
    tochange = JSON.stringify(tochange);
    var det = document.createElement("p")
    det.innerHTML = tochange;
    var changetable = document.createElement("details");
    jakso_to.appendChild(changetable);
    var sum = document.createElement("summary")
    sum.innerHTML = "<a onclick=\";\">Show Changetable</a>";
    changetable.appendChild(sum);
    changetable.appendChild(det);
    console.log("Changed: ");
    console.log(tochange);
    console.log("Wilmafixer script finished.");
    /*
    for ( i=0; i < targets_src.length; i+=3 )
    {
        // do stuff with boxes[i]
        //console.log(targets_src[i]);
        var target = targets_src[i];
        siblings = target.parentElement.childNodes;
        console.log("Block has " + siblings.length + " children.");
        target.innerHTML = target.title;
        targets.push(target);
    }*/
})();
