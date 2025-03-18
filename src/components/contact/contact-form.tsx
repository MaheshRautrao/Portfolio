"use client";

import { toast } from "sonner";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const DB_NAME = "ContactFormDB";
const STORE_NAME = "submissions";
const MAX_SUBMISSIONS_PER_DAY = 5;

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    message: false,
    email: false,
  });
  const [submissionCount, setSubmissionCount] = useState(0);

  // ✅ Load submission count on mount and cleanup old data
  useEffect(() => {
    const request = indexedDB.open(DB_NAME, 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "date" });
      }
    };

    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(STORE_NAME, "readwrite");
      const store = transaction.objectStore(STORE_NAME);
      const today = new Date().toISOString().split("T")[0];

      // 1️⃣ Auto Cleanup: Delete previous days' data
      const getAllKeysRequest = store.getAllKeys();
      getAllKeysRequest.onsuccess = () => {
        const keys = getAllKeysRequest.result;
        keys.forEach((key) => {
          if (key !== today) store.delete(key);
        });
      };

      // 2️⃣ Load today's submission count
      const getRequest = store.get(today);
      getRequest.onsuccess = () => {
        setSubmissionCount(getRequest.result?.count || 0);
      };
    };
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading) return; // Prevent multiple submissions

    if (submissionCount >= MAX_SUBMISSIONS_PER_DAY) {
      toast.error("Submission Limit Reached", {
        description:
          "You've already submitted 5 messages today. Try again tomorrow.",
      });
      return;
    }

    setLoading(true);
    const formData = new FormData(event.target);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    // ❌ Validation
    const newErrors = {
      name: !name,
      message: !message,
      email: email && !email.includes("@"),
    };
    setErrors(newErrors);

    if (newErrors.name || newErrors.message || newErrors.email) {
      toast.error("Error", {
        description: "Please fill out the required fields correctly.",
      });
      setLoading(false);
      return;
    }

    formData.append("access_key", "184b9d0b-0d5d-4f46-abd5-27034f9e8464");
    const json = JSON.stringify(Object.fromEntries(formData));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Success", {
          description: "Your form was submitted successfully!",
        });

        // ✅ Update submission count
        updateSubmissionCount();

        event.target.reset();
      } else {
        toast.error("Error", {
          description: "Something went wrong.",
        });
      }
    } catch {
      toast.error("Error", {
        description: "Something went wrong.",
      });
    } finally {
      setLoading(false);
    }
  }

  // ✅ Function to increment today's submission count
  function updateSubmissionCount() {
    const request = indexedDB.open(DB_NAME, 1);

    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(STORE_NAME, "readwrite");
      const store = transaction.objectStore(STORE_NAME);
      const today = new Date().toISOString().split("T")[0];

      const getRequest = store.get(today);
      getRequest.onsuccess = () => {
        const currentCount = getRequest.result?.count || 0;
        store.put({ date: today, count: currentCount + 1 });
        setSubmissionCount(currentCount + 1);
      };
    };
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="text-3xl">Contact Me</CardTitle>
            <CardDescription>Get in touch with me</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">
                  Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className={errors.name ? "border-red-500" : ""}
                  disabled={loading}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="Enter your email (optional)"
                  className={errors.email ? "border-red-500" : ""}
                  disabled={loading}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="message">
                  Message <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  className={errors.message ? "border-red-500" : ""}
                  disabled={loading}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" disabled={loading}>
              {loading ? (
                "Sending..."
              ) : (
                <>
                  <Send className="mr-2" /> Send
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
