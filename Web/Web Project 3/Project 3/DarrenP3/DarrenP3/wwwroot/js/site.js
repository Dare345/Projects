// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


//additions for the jquery
$(function () {
    //for the accordion on people
    $('#accTest').accordion({
        collapsible: true, active: false, heightStyle: "content", header: "h3"
    });
    //for the tabs on people
    $('.tabTest').tabs();
    //show!
    $('#pepEverything').fadeIn(1000);
    $(".degree").accordion({
        collapsible: true, active: false,
        heightStyle: "content",
        header: "h3"
    });
    $(".degree").accordion({
        collapsible: true, active: false,
        heightStyle: "content",
        header: "h3"
    });


    $('#coop').DataTable({
        layout: {
            bottomEnd: {
                paging: {
                    firstLast: false
                }
            }
        }
    });

    $('#employment').DataTable({
        layout: {
            bottomEnd: {
                paging: {
                    firstLast: false
                }
            }
        }
    });

})


//