export default function handler(req, res) {

    if (req.method === "GET") {
        res.status(200).json(
            [
                {
                    id: 1,
                    todo: "tomorrow is a good day for training task 1"
                },
                {
                    id: 2,
                    todo: "tomorrow is a good day for training task 2"
                },
                {
                    id: 3,
                    todo: "tomorrow is a good day for training task 3"
                },
                {
                    id: 4,
                    todo: "tomorrow is a good day for training task 4"
                },
                {
                    id: 5,
                    todo: "tomorrow is a good day for training task 5"
                },
            ]
        )
    } else if (req.method === "POST") {
        const todo = req.body
        console.log(todo)
    }
}