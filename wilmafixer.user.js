// ==UserScript==
// @name         Wilma fixer
// @namespace    https://jonnelafin.github.io/WilmaFixer/
// @version      1.2
// @description  Fixes the labeling on some finnish wilma-instances. Under the MIT-License, please use the according attribution when forking.
// @author       jonnelafin
// @license      MIT; https://spdx.org/licenses/MIT.html
// @match        https://yvkoulut.inschool.fi/schedule*
// @grant        none
// @updateURL    https://openuserjs.org/meta/jonnelafin/Wilma_fixer.meta.js
// @downloadURL  https://openuserjs.org/install/jonnelafin/Wilma_fixer.user.js
// @copyright    2020, jonnelafin (https://openuserjs.org/users/jonnelafin)
// ==/UserScript==

const rclassn = true;
const rteachn = false;
const rroomnn = false;
const fontsize = "12px";
const uz = function(valz) {
    alert(valz);
};
(function() {
    'use strict';

    // Your code here...
    var settings = document.getElementsByClassName("dropdown-menu")[3];
    settings.insertAdjacentHTML('beforeend', "<li class=\"dropdown-header\">Wilma Fixer</li>");
    settings = document.getElementsByClassName("dropdown-menu")[3];
    settings.insertAdjacentHTML('beforeend', "<li><a href=\"\">Font Size: </a></li>");
    settings = document.getElementsByClassName("dropdown-menu")[3];
    settings.insertAdjacentHTML('beforeend', "<select id=\"ddlViewBy\" onchange=\"alert(this.options[this.selectedIndex].value);\">   <option value=\"11px\">11</option>   <option value=\"12px\" selected=\"selected\">12</option>   <option value=\"14px\">14</option>   </select>");
    var blocks = document.getElementsByClassName("block");
    var targets_src = document.getElementsByClassName("no-underline-link");
    var cont = document.getElementById("container");
    //cont.height = "200%";
    //
    //
    var targets = [];
    for (var i=0; i < blocks.length; i+=1){
        var block = blocks[i];
        console.log(block.style.height);
        //block.style.height = ;
        var childs = block.childNodes[0].childNodes;
        var classn = childs[0];
        classn.style.fontSize = fontsize;
        var teachn = childs[1];
        teachn.style.fontSize = fontsize;
        var roomnn = childs[2];
        roomnn.style.fontSize = fontsize;
        if(rclassn === true){
            classn.innerHTML = classn.title;
        }
        if(teachn === true){
            teachn.innerHTML = teachn.title;
        }
        if(roomnn === true){
            roomnn.innerHTML = roomnn.title;
        }
    }
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
