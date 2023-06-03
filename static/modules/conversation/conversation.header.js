document.addEventListener('DOMContentLoaded', function () {
    var chatItems = document.querySelectorAll('.chat__list-item');
    var conversation_header = document.querySelector('.conversation__header');
    var conversation_header__userName = conversation_header.querySelector('.chat__details--user-name');
    var conversation_body = document.querySelector('.conversation__body');


    function performAction(event) {
        var list_item = event.currentTarget; // target the clicked chat__lis-item element

        //check if it's the right elements
        var chat_list__userName = list_item.querySelector('.chat__details--user-name');
        var chat_list__message = list_item.querySelector('.chat__details--message');

        //if those variable !null, write them in console
        if (chat_list__userName && chat_list__message) {
            var chat_list__userName = chat_list__userName.textContent;
            
            // AJAX request
            fetch(`${window.origin}/conversation/fill_header`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({chat_list__userName: chat_list__userName})
            })
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                    
                // Access specific properties of the response data
                var user_name = data.user_name;

                // update the conversation header
                conversation_header__userName.textContent = chat_list__userName;
                // Further processing or display of the retrieved data
                

                })
                .catch(error => console.error('ERROR IN DATA:', error));


        } else {
            console.error('Required elements not found.');
        }
    }

    chatItems.forEach(function (item) {
        item.addEventListener('click', performAction);
    });
});
