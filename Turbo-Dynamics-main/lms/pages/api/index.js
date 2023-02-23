// import connectDB from "../../connect/connect";
// import UserModel from "../../models/user.model"

// export default async function handler(req, res) {
//    await connectDB()

//     const {method}=req;

//     switch (method) {
//       case "POST":{
//         try{
//           const User=await UserModel.create(req.body)
//           res.send(User);

//         }catch(e){
//           res.status(500).send(e.message)
//         }
//       }

//     }

// }
