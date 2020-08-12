define(['store', './calendarDay'], function ({ store }, {calendarDay}) {
    const calendarWeek = {
        template:
            ` <div id="calendar-week" class="container">
            <div class="columns is-mobile">
            <calendarDay v-for="day in sharedState.seedData"
                :key="day.id"
                :day="day" />
            </div>
            </div>`,
        data() {
            return {
                sharedState: store.state
            }
        },
        components: {
            calendarDay
        }
    };
    return {
        calendarWeek
    }
});