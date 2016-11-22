$(function() {

  var $modal = $('#myProgressModal');
  // change this two values to adjust the progress
  var reached = 56;
  var target = 125;
  var remaining = target - reached;
  var percentage = (reached * 100) / target;

  var $progress,
      $progressWidth,
      $progressSpan;

  // set initial state
  $modal.find('.progress-bar .current').html('$' + reached)
  $modal.find('.progress-bar').css({
    width: percentage + '%'
  });
  $modal.find('.remaining').html('$' + remaining);
  $modal.find('.target').html('Target $' + target);

  // set modal state

  $modal.on('show.bs.modal', function() {
    $progress = $('.progress .progress-bar');
    $progressWidth = $progress.width();
    $progressSpan = $progress.find('span');

    $progress.width(0);
    $progressSpan.fadeOut(0);
  });

  $modal.on('shown.bs.modal', function() {
    $progress.animate({
      width: $progressWidth + '%'
    }, 200);

    $progressSpan.fadeIn(1000);
  });
});
