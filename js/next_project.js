/*
next_project.js

button/link on every project page to link to the next one in the list.
Should also populate the image for the link to correspond to the next page
*/

$(document).ready(function() {

    $.getJSON("/js/json/project_list.json", function(data) {
        //get the current page
        var path = window.location.pathname.split("/").pop();
        //console.log(path);

        //find that page in the list
        for (let i = 0; i < data.projects.length; i++){
            //console.log("checking: "+data.projects[i].name);
            if (data.projects[i].name === path) {
                
                //set next item value (in case it's the end of the list)
                var k = (i + 1) % data.projects.length;
                //get the next item in the list and make that the link
                $("#next_proj").attr("href", data.projects[k].name);
                //get the image for the next item then put it in the button
                $("#next_proj img").attr("src", data.projects[k].img);
                return; //end function
            }
        }

    });

});