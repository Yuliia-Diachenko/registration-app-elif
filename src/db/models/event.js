import mongoose from "mongoose";

const eventsSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      eventDate: {
        type: Date,
        required: true,

      },
      organizer: {
        type: String,
        required: true,
      },

    },
    {
      timestamps: true,
      versionKey: false,
    },
  );

  export const EventsCollection = mongoose.model('events', eventsSchema);
