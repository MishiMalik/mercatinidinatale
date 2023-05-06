// =====================================sidebar on mobile
$('.menu-icon').on('click',function(){
    $('.navbar-row').css('left','0');
    $('body').css('overflow','hidden');
    $('.backdrop').css('display','block');
});

$('.backdrop').on('click',function(){
    $('.navbar-row').css('left','-300px');
    $('body').css('overflow','auto');
    $(this).css('display','none');
});

// $(".close-pop").on("click",function(){
// $(".fixed-partiper").css("bottom","-700px");
// })
// $(document).ready(function() {
//     $(".fixed-partiper").delay(2000).fadeIn(500);
// });
// ===================================carsd
// $('.owl-carousel-tent').owlCarousel({
//     loop:true,
//     margin:10,
//     responsiveClass:true,
//     autoplay:true,
//     autoplayTimeout:1500,
//     autoplayHoverPause:true,
   
//     responsive:{
//         0:{
//             items:1,
//             nav:true,
//             loop:true
//         },
//         600:{
//             items:2,
//             nav:false,
//             loop:true
//         },
//         1000:{
//             items:2,
//             nav:true,
//             loop:true
//         }
//     }
// });
// $('.owl-carousel-news').owlCarousel({
//     loop:true,
//     margin:10,
//     responsiveClass:true,
//     autoplay:true,
//     autoplayTimeout:1500,
//     autoplayHoverPause:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true,
//             loop:true
//         },
//         600:{
//             items:2,
//             nav:false,
//             loop:true
//         },
//         1000:{
//             items:4,
//             nav:true,
//             loop:false,
//             loop:true
//         },
        
//     }
// });
// $('.owl-carousel-trips').owlCarousel({
//     loop:true,
//     margin:10,
//     responsiveClass:true,
//     autoplay:true,
//     autoplayTimeout:1500,
//     autoplayHoverPause:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true,
//             loop:true
//         },
//         600:{
//             items:2,
//             nav:false,
//             loop:true
//         },
//         1000:{
//             items:3,
//             nav:true,
//             loop:false,
//             loop:true
//         },
        
//     }
// });
// $('.owl-carousel-bus-trip').owlCarousel({
//     loop:true,
//     margin:10,
//     responsiveClass:true,
//     autoplay:true,
//     autoplayTimeout:2000,
//     autoplayHoverPause:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true,
//             loop:true
//         },
//         600:{
//             items:1,
//             nav:false,
//             loop:true
//         },
//         1000:{
//             items:1,
//             nav:true,
//             loop:false,
//             loop:true
//         },
        
//     }
// });

// ========================chart
  
// google.charts.load('current', {'packages':['bar']});
// google.charts.setOnLoadCallback(drawChart);

// function drawChart() {
//   var data = google.visualization.arrayToDataTable([
//     ['', '', '', '','','','','', '','','','',''],
//     ['2014', 1000, 400, 200, 300, 500, 300, 200, 1000, 400, 200, 400, 200],
  
//   ]);

//   var options = {
    
//     chart: {
//     //   title: 'Oktoberfest Turnout Forecast',
//       subtitle: '',
//     },
//     vAxis: {
//         minValue: 0,
//         gridlines: {
//           color:'transparent',
//           title:'none'
//         },
//      } 
//   };

//   var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

//   chart.draw(data, google.charts.Bar.convertOptions(options));
// }