$(document).ready(function () {
    $('.logo').click(function () {
        $.ajax({
            url:'',
            type: 'get',
            content: 'application/json'
            data: {
                logo_text: $(this).text()
            },
            sucess: function(response) {
                $('.logo').text(response.seconds)
            }
        })
    })
})