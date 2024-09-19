import { model, Schema } from 'mongoose';

const usersSchema = new Schema(
    {
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      date_birth: { type: Date, required: true },
      where_here: { type: String,
                    required: true,
                    enum: ['Social media', 'Friends', 'Found myself'], }
    },
    { timestamps: true, versionKey: false },
  );

  export const UsersCollection = model('users', usersSchema);
