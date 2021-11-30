import * as $ from 'jquery';

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        // open or close navbar
        $('#sidebar, .left_content, .header').toggleClass('active');
    });
    $('#rightbarCollapse').on('click', function () {
        // open or close navbar
        $('#rightbar, .right_content, .header').toggleClass('active');
    });
 });