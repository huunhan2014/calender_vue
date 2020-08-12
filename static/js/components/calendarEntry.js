define(['store'], function ({store}) {
    const calendarEntry = {
        template:
            `<div id="calendar-entry">
            <div class="calendar-entry-note">
                <input type="text" placeholder="New Event" v-model="inputEntry" required />
                <p class="calendar-entry-day">
                    Day of event: <span class="bold">{{ titleOfActiveDay }}</span>
                </p>
                <a class="button is-primary is-small is-outlined" @click="submitEvent(inputEntry)">
                    Submit
                </a>
                <p style="color: red; font-size: 13px" v-if="error">
                    You must type something first!
                </p>
            </div>
        </div>`,
        data() {
            return {
                inputEntry: '',
                error: false
            }
        },
        computed: {
            titleOfActiveDay() {
                return store.getActiveDay().fullTitle;
            }
        },
        methods: {
            submitEvent(eventDetails) {
                if (eventDetails === '') return this.error = true;
                store.submitEvent(eventDetails);
                this.inputEntry = '';
                this.error = false;
            }
        }
    };

    return {
        calendarEntry
    }
});