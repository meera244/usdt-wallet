
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

export default function USDXTDapp() {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");

  const handleSend = () => {
    if (!recipient || !amount) {
      setStatus("Please enter all fields");
      return;
    }
    setStatus("Transaction Sent ✅ (Mocked)");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <Card className="bg-gray-800 text-white rounded-2xl shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Send USDXT</h2>
            <div className="mb-4">
              <Label htmlFor="recipient">Recipient Address</Label>
              <Input
                id="recipient"
                className="mt-1 bg-gray-700 border-none focus:ring-2 focus:ring-yellow-500"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="e.g. TA4SR..."
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                className="mt-1 bg-gray-700 border-none focus:ring-2 focus:ring-yellow-500"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="e.g. 1000"
              />
            </div>
            <Button
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black"
              onClick={handleSend}
            >
              Send USDXT
            </Button>
            {status && <p className="mt-4 text-sm text-green-400">{status}</p>}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
