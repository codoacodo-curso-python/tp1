
$(function(){
    $("header").load("includes/header.html")
    $("footer").load("includes/footer.html")

    setTimeout(function() {
        activeSection()
    }, 300);


});


function activeSection() {
    let active = $('body').attr('id')
    var link = $('li.'+active+ ' a')
    $(link).addClass('active')
    console.log(link)


}
