var __CHILD_WINDOW_HANDLE = null;

$("#open-child-window").on('click', function() {
  __CHILD_WINDOW_HANDLE = window.open('child.html', '_blank', 'width=700,height=500,left=200,top=100');

  // $("#messages-container").show();
  // $("#open-child-window").hide();
});

// $("#send-message-child").on('click', function() {
//   if ($.trim($("#message").val()) != '') {
//     __CHILD_WINDOW_HANDLE.ProcessParentMessage($("#message").val());
//     $("#message").val('');
//   }
// });

// function ProcessChildMessage(message) {
// 	$("#message-from-container").append('<div>' + message + '</div>');
// }
