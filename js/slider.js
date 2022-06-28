$(function () {
    
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        centerMode: true,
        centerPadding: '300px',
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '200px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            },
            // {
            //     breakpoint: 480,
            //     settings: {
            //         arrows: false,
            //         centerMode: true,
            //         centerPadding: '100px',
            //         slidesToShow: 1
            //     }
            // }
        ]
    });
})