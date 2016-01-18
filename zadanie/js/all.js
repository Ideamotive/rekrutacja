$(window).load(function() {
    $(document).on("click", ":submit", function(e) {

        var characters = $.map($('input:checkbox:checked'), function(e, i) {
            return e.value;
        });


        if (characters.length > 0 && $.inArray("light_side", characters) == -1) {

            e.preventDefault();

            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'imperial_march.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');
        }
    });
});