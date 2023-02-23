import connectDB from "../../../connect/connect";
import TicketeModel from "../../../models/ticket.model";
import Ticket from "../../ticket";

export default async function Signup(req, res) {
  await connectDB();

  const { method } = req;

  switch (method) {
    case "GET": {
      try {
        const ticket = await TicketeModel.find();
        return res.status(200).send(ticket);
      } catch (e) {
        return res.status(500).send(e.message);
      }
    }
  }
}
