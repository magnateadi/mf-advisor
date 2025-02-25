const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000; // Ensure the app runs on Railway's assigned port

// Dummy mutual fund data
const mutualFunds = [
    { id: 1, name: "HDFC Equity Fund", category: "Equity", risk: "High", returns: "12%" },
    { id: 2, name: "SBI Bluechip Fund", category: "Large Cap", risk: "Medium", returns: "10%" },
    { id: 3, name: "ICICI Prudential Bond Fund", category: "Debt", risk: "Low", returns: "7%" }
];

// Route to get all mutual funds
app.get("/funds", (req, res) => {
    res.json(mutualFunds);
});

// Route to get details of a specific mutual fund
app.get("/funds/:id", (req, res) => {
    const fund = mutualFunds.find(f => f.id === parseInt(req.params.id));
    if (!fund) {
        return res.status(404).json({ error: "Fund not found" });
    }
    res.json(fund);
});

// Route to search mutual funds
app.get("/search", (req, res) => {
    const query = req.query.q?.toLowerCase();
    if (!query) {
        return res.json([]);
    }
    const results = mutualFunds.filter(fund => fund.name.toLowerCase().includes(query));
    res.json(results);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
