(function($) {
	"use strict";	

	// $.notify({
	// 	icon: 'la la-bell',
	// 	title: 'Bootstrap notify',
	// 	message: 'Turning standard Bootstrap alerts into "notify" like notifications',
	// },{
	// 	type: 'success',
	// 	placement: {
	// 		from: "bottom",
	// 		align: "right"
	// 	},
	// 	time: 1000,
	// });


	// Call the dataTables jQuery plugin
	$dt(document).ready(function() {
		$dt('#dataTable').DataTable({
			"language": {
				"paginate": {
					"next": '<i class="fas fa-angle-right"></i>',
					"previous": '<i class="fas fa-angle-left"></i>'
				}
			}
		});
	});

	// Timepicker

		$dy(function () {
			$dy('#datetimepicker2').datetimepicker({
				format: 'LT'
			});
			$dy('#datetimepicker3').datetimepicker({
				format: 'LT'
			});
			$dy('#casedatepicker1').datetimepicker({
				format: 'L'
			});
		});

})(jQuery);