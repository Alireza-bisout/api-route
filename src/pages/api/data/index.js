import connectDB from "@/utils/connectDB";
import User from "@/models/User";

export default async function handler(req, res) {
    await connectDB();
    if (req.method === "POST") {
        const { name } = req.body;
        console.log(name);

        if (!name || name.length < 3) {
            res.status(422).json({ status: "failed", message: "Invalid data" });
            return;
        }

        const user = await User.create({ name })
        console.log(user)

        res.status(200).json({ status: "success", message: "اطلاعات با موفقیت دریافت شد!", data: { name } })
    }
}
