// ==UserScript==
// @name         Wilma fixer
// @namespace    https://jonnelafin.github.io/WilmaFixer/
// @version      1.1
// @description  Fixes the labeling on some finnish wilma-instances. Under the MIT-License, please use the according attribution when forking.
// @author       jonnelafin
// @license      MIT; https://spdx.org/licenses/MIT.html
// @match        https://yvkoulut.inschool.fi/schedule*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var settings = document.getElementsByClassName("dropdown-menu")[0];
    var blocks = document.getElementsByClassName("block");
    var targets_src = document.getElementsByClassName("no-underline-link");
    var cont = document.getElementById("container");
    //cont.height = "200%";
    //
    var rclassn = true;
    var rteachn = false;
    var rroomnn = false;
    var fontsize = "12px";
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
