$(document).ready(function() {
    $('#create-form').on('submit', function(event) {
        event.preventDefault();
        if (!$('#burger-name')) {
            alert('name cannot be blank');
        } else {
            var newBurger = {
                name: $('#burger-name').val().trim()
            };
            $.ajax('/api/burgers', {
                type: 'POST',
                data: newBurger
            }).then(function() {
                console.log('created new burger', newBurger.name);
                location.reload();
            })
        }
    });

    $('.change-devour').on('click', function(event){
        var isDevoured = $(this).data('devoured');
        var id = $(this).data('id');
        var state = {devoured: isDevoured};
        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: state
        }).then(function() {
            console.log('changed devoured to', isDevoured);
            location.reload();
        });
    });

    $('.delete-burger').on('click', function() {
        var id = $(this).data('id');
        $.ajax('/api/cats/' + id, {
            type: 'DELETE'
        }).then(function() {
            console.log('deleted burger #', id);
        });
    });
});