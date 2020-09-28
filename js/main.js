$(function(){
    $('.load_more').on('click', function() {
        const btn = $(this);
        const loader = btn.find('span');
        const message = btn.find('i');

        $.ajax({
            url: '/data.html',
            type: 'GET',
            beforeSend: function() {
                btn.attr('disabled', true);
                loader.addClass('d-inline-block');
                message.text('Loading...');
            },
            success: function(responce) {
                setTimeout(function() {
                    loader.removeClass('d-inline-block');
                    btn.attr('disabled', false);
                    message.text('Load More');
                    $('.after_posts').before(responce);
                }, 1000);
            },
            error: function() {
                alert('Error!');
                loader.removeClass('d-inline-block');
                btn.attr('disabled', false);
                message.text('Load More');
            }
        });
    });
});