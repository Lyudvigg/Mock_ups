/*------------------------Pie--------------------------------*/
$(function(){
      var $ppc = $('.progress-pie-chart'),
        percent = parseInt($ppc.data('percent')),
        deg = 360*percent/12;
      if (percent > 50) {
        $ppc.addClass('gt-50');
      }
      $('.ppc-progress-fill').css('transform','rotate('+ deg +'deg)');
      $('.ppc-percents span').html(percent + '.5' + '</br>' + 'WEIGHT');
  });

$(function(){
      var $ppc = $('.progress-pie-chart_1'),
        percent = parseInt($ppc.data('percent')),
        deg = 360*percent/12;
      if (percent > 50) {
        $ppc.addClass('gt-50');
      }
      $('.ppc-progress-fill_1').css('transform','rotate('+ deg +'deg)');
      $('.ppc-percents_1 span').html(percent);
  });

$(function(){
      var $ppc = $('.progress-pie-chart_2'),
        percent = parseInt($ppc.data('percent')),
        deg = 360*percent/44;
      if (percent > 50) {
        $ppc.addClass('gt-50');
      }
      $('.ppc-progress-fill_2').css('transform','rotate('+ deg +'deg)');
      $('.ppc-percents_2 span').html(percent);
  });

$(function(){
      var $ppc = $('.progress-pie-chart_3'),
        percent = parseInt($ppc.data('percent')),
        deg = 360*percent/3;
      if (percent > 50) {
        $ppc.addClass('gt-50');
      }
      $('.ppc-progress-fill_3').css('transform','rotate('+ deg +'deg)');
      $('.ppc-percents_3 span').html(percent);
  });

$(function(){
      var $ppc = $('.progress-pie-chart_4'),
        percent = parseInt($ppc.data('percent')),
        deg = 360*percent/20;
      if (percent > 50) {
        $ppc.addClass('gt-50');
      }
      $('.ppc-progress-fill_4').css('transform','rotate('+ deg +'deg)');
      $('.ppc-percents_4 span').html(percent);
  });

/*-------------------------Canvas-----------------------------*/
    var buyerData = {
        labels : ["1-4","6-4","11-4","16-4","21-4","26-4","31-4"],
        datasets : [
            {
                fillColor : "RGB(121,101,241)",
                strokeColor : "#7965F1",
                pointColor : "#fff",
                pointStrokeColor : "#7965F1",
                data : [100,2000,700,600,1500,400,200]
            }
        ]
    }
    var buyers = document.getElementById('buyers').getContext('2d');
    new Chart(buyers).Line(buyerData);
