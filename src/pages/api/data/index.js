export default function handler(req, res) {
    if (req.method === "POST") {
        const { name } = req.body
        console.log(name)

        if (!name || name.length < 3) {
            res.status(422).json({ status: "failed", message: "Invalid data" })
            return
        }

        res.status(200).json({ status: "success", message: "Data created", data: name })
    }
}