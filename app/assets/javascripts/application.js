// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery
//= require moment
//= require fullcalendar
//= require fullcalendar/lang/ja

$(document).ready(function(){
  $('#calendar').fullCalendar({
    height: window.innerHeight -0,
    header: {
      left: 'prev, next, today',
      center: 'title',
      right: 'month, agendaWeek, agendaDay, listMonth',
    },
    events: [
      {
        title: 'ミーティング',
        start: '2020-01-22T10:30:00',
        end: '2020-01-22T11:30:00',
        className:'fc-event-time'
      },
      {
        title: 'アポ',
        start: '2020-01-29T10:30:00',
        end: '2020-01-29T11:30:00',
        className:'fc-event-time'
      }
    ] 
  });
});