"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        // Handle error - you could add error state here if needed
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Success view
  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 w-full flex-1 p-8 bg-brand-Beige rounded-lg border-2 border-brand-Purple">
        <div className="bg-brand-SecondPink rounded-full p-4">
          <Check className="w-12 h-12 text-brand-Purple" strokeWidth={3} />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-brand-Purple mb-2">
            Beskjed sendt!
          </h3>
          <p className="text-brand-Purple">
            Takk for henvendelsen. Jeg svarer så snart som mulig!
          </p>
        </div>
      </div>
    );
  }

  // Form view
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full flex-1">
      <input
        type="hidden"
        name="access_key"
        value="e55b914d-b754-4098-afc5-5442770c388a"
      />

      <input
        type="text"
        name="name"
        placeholder="Ditt navn"
        required
        disabled={isLoading}
        className="inputStyle disabled:opacity-50"
      />

      <input
        type="email"
        name="email"
        placeholder="Din e-post"
        required
        disabled={isLoading}
        className="inputStyle disabled:opacity-50"
      />

      <textarea
        name="message"
        placeholder="Din beskjed..."
        required
        rows={4}
        disabled={isLoading}
        className="inputStyle min-h-[200px] disabled:opacity-50"
      ></textarea>

      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
      />

      <button
        type="submit"
        disabled={isLoading}
        className="button disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Sender..." : "Send"}
      </button>
    </form>
  );
};
