import express from 'express';
import cors from "cors"
import Stripe from 'stripe';

const stripe = new Stripe(
// process.env.SECRET_KEY
"sk_test_51QarspP9DXcr8WfKH0ToGQd9Rgxt5XOtz7NH7q2QkXWVWnIFig7lh3ngRqZuYdJDdzUaBAZI5KVpOH3hh0eYvW1b00rpbhzLF2"
);

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.post("/api/v1/checkout" , async (req , res)=>{
//   const {products } = req.body;
//   const lineItems = products.map((item) => ({
//     price_data: {
//       currency: "usd",
//       product_data: {
//         name: item.name,
//       },
//       unit_amount: item.price * 100,
//     },
//     quantity: item.quantity,
//   }));

//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ["card"],
//     line_items: lineItems,
//     mode: "payment",
//     success_url: "http://localhost:5173/success",
//     cancel_url: "http://localhost:5173/cancel",
//   });

//   res.json({ message: "session completed", id: session.id });
// });





app.post("/api/v1/checkout", async (req, res) => {
  console.log("Request body:", req.body);
  
  const { products } = req.body;
  
  if (!products || !Array.isArray(products)) {
    return res.status(400).json({ error: "Invalid products format" });
  }
  
  const lineItems = products.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: item.name,
      },
      unit_amount: item.price * 100,
    },
    quantity: item.quantity,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });
    
    res.json({ message: "Session completed", id: session.id });
  } catch (error) {
    console.error("Stripe error:", error);
    res.status(500).json({ error: error.message });
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
