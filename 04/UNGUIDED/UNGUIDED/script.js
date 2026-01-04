$('#searchInput').on('keyup', function () {
  let value = $(this).val().toLowerCase();
  $('.product-card').filter(function () {
    $(this).toggle($(this).data('name').toLowerCase().indexOf(value) > -1);
  });
});
