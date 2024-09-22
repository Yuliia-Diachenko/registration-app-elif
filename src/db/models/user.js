import { model, Schema } from 'mongoose';
import { ROLES } from '../../constans/index.js';

const usersSchema = new Schema(
    {
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      date_birth: { type: Date, required: true },
      password: {type: String, required: true},
      where_here: { type: String,
                    required: false,
                    enum: ['Social media', 'Friends', 'Found myself'], },
      role: {
                    type: String,
                    enum: [ROLES.ADMIN, ROLES.USER],
                    default: ROLES.USER,
                  },
      eventId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'events'
      }
    },
    { timestamps: true, versionKey: false },
  );
  usersSchema.methods.toJSON = function () {
    const obj = this.toObject();
    delete obj.password;
    return obj;
  };
  export const UsersCollection = model('users', usersSchema);
