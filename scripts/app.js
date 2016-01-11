'use strict';
import calendar from './calendar';

var currentDate = new Date();
var calendarEl = document.querySelector('.calendar');
calendar.render(calendarEl, currentDate.getMonth(), currentDate.getFullYear());
