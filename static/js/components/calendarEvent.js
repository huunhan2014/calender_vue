define(['store'], function ({store}) {
    const calendarEvent = {
        template:
            `  <div class="day-event" :style="getEventBackgroundColor">
    <div v-if="!event.edit">
      <span class="has-text-centered details">{{ event.details }}</span>
      <div class="has-text-centered icons">
        <i class="fa fa-pencil-square edit-icon" @click="editEvent(day.id, event.details)"></i>
        <i class="fa fa-trash-o delete-icon" @click="deleteEvent(day.id, event.details)"></i>
      </div>
    </div>
    <div v-if="event.edit">
      <input type="text" :placeholder="event.details" v-model="newEventDetails" />
      <div class="has-text-centered icons">
        <i class="fa fa-check" @click="updateEvent(day.id, event.details, newEventDetails)"></i>
      </div>
    </div>
  </div>`,
        props: ['event', 'day'],
        data() {
            return {
                newEventDetails: ''
            }
        },
        computed: {
            getEventBackgroundColor() {
                const colors = ['#FF9999', '#85D6FF', '#99FF99'];
                let randomColor = colors[Math.floor(Math.random() * colors.length)];
                return `background-color: ${randomColor}`;
            }
        },
        methods: {
            editEvent(dayID, eventDetails) {
                store.editEvent(dayID, eventDetails);
            },
            updateEvent(dayID, orginalEventDetails, updateEventDetails) {
                if (updateEventDetails === '') updateEventDetails = orginalEventDetails
                store.updateEvent(dayID, orginalEventDetails, updateEventDetails)

                this.newEventDetails = '';
            },
            deleteEvent(dayId, eventDetails) {
                store.deleteEvent(dayId, eventDetails);
            }
        }
    };
    return {
        calendarEvent
    }
});