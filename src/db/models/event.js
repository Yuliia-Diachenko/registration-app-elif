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
      event_date: {
        type: Date,
        required: true,

      },
      organizer: {
        type: String,
        required: true,
      },
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users' },
    },
    {
      timestamps: true,
      versionKey: false,
    },
  );

  export const EventsCollection = mongoose.model('events', eventsSchema);
