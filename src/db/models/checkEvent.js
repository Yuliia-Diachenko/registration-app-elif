import mongoose from "mongoose";

const checkEventsSchema = new mongoose.Schema(
    {
        eventId: { type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'events' },
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

  export const CheckEventsCollection = mongoose.model('events', checkEventsSchema);
