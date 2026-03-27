export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({
      message: "Welcome to AMSA Backend 🔥",
      status: "success"
    });
  }

  if (req.method === "POST") {
    res.status(200).json({
      message: "Data received successfully 🚀",
      data: req.body
    });
  }
}
