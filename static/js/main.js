require(['./components/calendarWeek', "./components/calendarEntry"], function ({calendarWeek}, {calendarEntry}) {
    new Vue({
        el: '#app',
        components: {
            'calendar-week':calendarWeek,
            'calendar-entry':calendarEntry
        },

    })
});