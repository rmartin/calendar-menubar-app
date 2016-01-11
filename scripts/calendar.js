'use strict';
module.exports = {
	getDaysInMonth: function(month, year) {
		return new Date(year, month, 0).getDate();
	},
	getMonthName: function(month) {
		var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
			'July', 'August', 'September', 'October', 'November', 'December'
		];
		return monthNames[month];
	},
	render: function(calendarEl, month, year) {
		var daysInCurrentMonth = this.getDaysInMonth(month, year);

        // Render the month name
		calendarEl.innerHTML += '<div class="month">' + this.getMonthName(month) + '</div>';

		// loop through available days and render to page
		for (var i = 1; i <= daysInCurrentMonth; i++) {
			calendarEl.innerHTML += '<div class="day">' + i + '</div>';
		}
	}
};
