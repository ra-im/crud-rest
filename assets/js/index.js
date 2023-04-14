//add user functionality
$('#add_user').submit(function (event) {
    alert("user successfully created!");
})

//update user funtionality
$('#update_user').submit(function (event) {
    event.preventDefault();

    var unindexedArray = $(this).serializeArray();
    var data = {};

    $.map(unindexedArray, function(n, i) {
        data[n['name']] = n['value']
    })

    console.log(data);

    var request = {
        "url": `http://localhost:3000/api/users/${data.id}`,
        "method": 'PUT',
        "data": data
    }

    //making update request using jquery ajax
    $.ajax(request).done(function(response){
        alert("user successfully updated!");
    })
})

//delete user functionality
if (window.location.pathname == '/') {
    $ondelete = $('.table tbody td a.delete');
    $ondelete.click(function () {
        var id = $(this).attr('userId');

        var request = {
            "url": `http://localhost:3000/api/users/${id}`,
            "method": 'DELETE',
            //"data": data
        }

        if (confirm("this action will permanently remove this user, do you still want to continue?")) {
            $.ajax(request).done(function (response){
                alert("user successfully deleted!");
                window.location.reload();
            })
        }
    })
}