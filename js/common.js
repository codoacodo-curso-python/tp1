$(function(){
    activateSection()
});

$("header").load("includes/header.html")
$("footer").load("includes/footer.html")


function activateSection() {
    let active = $('body').attr('id')
    var link = $('li.'+active+ ' a')
    $(link).addClass('active')
    console.log(link)


}
