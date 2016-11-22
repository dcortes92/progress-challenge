$(function() {
  var $progress,
      $progressWidth,
      $progressSpan;
  $('#myProgressModal').on('show.bs.modal', function() {
    $progress = $('.progress .progress-bar');
    $progressWidth = $progress.width();
    $progressSpan = $progress.find('span');

    $progress.width(0);
    $progressSpan.fadeOut(0);
  });

  $('#myProgressModal').on('shown.bs.modal', function() {
    $progress.animate({
      width: $progressWidth + '%'
    }, 200);

    $progressSpan.fadeIn(1000);
  });
});
