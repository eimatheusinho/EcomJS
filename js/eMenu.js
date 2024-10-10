var menu = document.getElementById('menu');
        var content = document.getElementById('content');
        var toggleButton = document.getElementById('toggle-button');

        toggleButton.addEventListener('click', function() {
            menu.classList.toggle('is-open');
            content.classList.toggle('is-open');
        });