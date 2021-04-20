// burger
$(document).ready(function () {
  $('.burger').click(function (){
    $('.list').toggleClass('show')
  })
})


// acc

$(document).ready(function() {
  $('.btn-eye').click(function() {
    $(this).next('.eye-p').slideToggle()
  })
})