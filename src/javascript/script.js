$(document).ready(function() {
    $('#mobile-botao').on('click', function() {
        $('#mobile-navbar').toggleClass('active');
        $('#mobile-botao').find('i').toggleClass('fa-x');
    });
});