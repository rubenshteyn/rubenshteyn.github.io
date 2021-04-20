$ (document).ready(function() {
    $ ('.open-btn').click(function() {
        $ ('.popup ').addClass('open')
    })
    $ ('.close').click(function() {
        $ ('.popup').removeClass('open')
    })

    $ ('.burger').click(function() {
        $ ('.list').toggleClass('open')
    })

    $ ('.burger').click(function() {
        $ ('.burger').toggleClass('burger-active')
    })
})

