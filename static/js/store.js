define(['seed'], function ({seedData}) {
    const store = {
    state: {
        seedData
    },

    getActiveDay() {
        return this.state.seedData.find(day => day.active);
    },

    setActiveDay(dayID) {
        this.state.seedData.map(day => {
            day.id === dayID ? day.active = true : day.active = false;
        });
    },

    getEventObj(dayID, eventDetails) {
        const dayObj = this.state.seedData.find(day => day.id === dayID);
        return dayObj.events.find(event => event.details === eventDetails);
    },

    submitEvent(eventDetails) {
        const activeDay = this.getActiveDay();
        activeDay.events.push({"details": eventDetails, 'edit': false});
    },

    resetEditOfAllEvents() {
        this.state.seedData.map(dayObj => {
            dayObj.events.map(event => {
                event.edit = false;
            });
        });
    },

    editEvent(dayID, eventDetails) {
        this.resetEditOfAllEvents();

        const eventObj = this.getEventObj(dayID, eventDetails);

        eventObj.edit = true;
    },

    updateEvent(dayID, orginalEventDetails, updateEventDetails) {
        const eventObj = ths.getEventObj(dayID, orginalEventDetails);

        eventObj.details = updateEventDetails;
        eventObj.edit = false;
    },

    deleteEvent(dayId, eventDetails) {
        const dayObj = this.state.seedData.find(day => day.id === dayId);
        const eventIndexToRemove = dayObj.events.findIndex(event => event.details === eventDetails);

        dayObj.events.splice(eventIndexToRemove, 1)
    }
};

    return {
        store
    }
});


