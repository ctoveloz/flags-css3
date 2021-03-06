(function() {
    var elements = document.querySelectorAll('.country'),
    content = document.getElementById('main'),
    header = document.getElementById('header');

    checkElement();

    window.addEventListener("scroll", checkElement, false);

    function checkElement() {
        var windowHeight = window.innerHeight,
        halfHeight = windowHeight / 2,
        size = 55,
        distance = window.scrollY,
        contentHeight = content.offsetHeight,
        headerHeight = header.offsetHeight;

        for( var i = 0; i< elements.length; i++ ) {
            var aloha = elements[i].getBoundingClientRect();

            if( (halfHeight - size) > aloha.top ) {
                elements[i].classList.add('active');
            }

            if((windowHeight + distance) >= contentHeight) {
                if( (elements.length % 2) === 0 ) {
                    elements[elements.length -2].classList.add('active');
                    elements[elements.length -1].classList.add('active');
                } else {
                    elements[elements.length -1].classList.add('active');
                }
            }
        }
    }
})();