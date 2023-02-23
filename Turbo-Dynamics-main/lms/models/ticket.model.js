import { Schema, model, models } from "mongoose";

const TicketSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },

    
  },
  { timestamps: true }
);

const TicketeModel = models.ticket || model("ticket", TicketSchema);

export default TicketeModel;
