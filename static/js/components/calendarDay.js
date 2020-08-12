define(['store', './calendarEvent'], function ({store}, {calendarEvent}) {
    const calendarDay = {
        template:
            `  <div class="day column" @click="setActiveDay(day.id)">
                <div class="day-banner has-text-white has-text-centered">{{ day.abbvTitle }}</div>
                <div class="day-details">
                <div class="day-number">{{ day.id }}</div>
                <calendarEvent v-for="event in day.events"
        :key="day.events.indexOf(event)"
        :event="event"
        :day="day" />
    </div>`,
        props: ['day'],
        components: {
            calendarEvent
        },
        methods: {
            setActiveDay(dayID) {
                store.setActiveDay(dayID)
            }
        }
    };

    return {
        calendarDay
    }
});