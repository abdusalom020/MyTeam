var elsMeetTargetLink = document.querySelectorAll('.meet__target-link');

elsMeetTargetLink.forEach(function (button) {
  button.addEventListener('click', function () {
    button.closest('.card').classList.toggle('card__rotated');
  });
});