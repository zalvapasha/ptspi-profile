"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useState } from "react";

export function InquiryForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState({
    fullName: "",
    companyName: "",
    country: "",
    email: "",
    subject: "",
    subjectDetails: "",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch("/api/send-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      let result;
      try {
        result = await res.json();
      } catch {
        throw new Error("Invalid response from server");
      }

      if (!res.ok || !result.success) {
        throw new Error(result.error || "Failed to send inquiry");
      }

      // Success - reset form and show success message
      setData({
        fullName: "",
        companyName: "",
        country: "",
        email: "",
        subject: "",
        subjectDetails: "",
        message: "",
      });
      setSuccess(true);

      // Auto-dismiss success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-3xl">
      <form onSubmit={handleSubmit}>
        <FieldGroup className="gap-6">
          <FieldSet>
            <FieldGroup className="gap-6">
              <Field>
                <FieldLabel htmlFor="full-name">Full name</FieldLabel>
                <Input
                  id="full-name"
                  name="fullName"
                  autoComplete="name"
                  placeholder="John Doe"
                  required
                  value={data.fullName}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, fullName: e.target.value }))
                  }
                />
              </Field>

              <div className="grid gap-6 md:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="company-name">Company name</FieldLabel>
                  <Input
                    id="company-name"
                    name="companyName"
                    autoComplete="organization"
                    placeholder="Acme Inc."
                    value={data.companyName}
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        companyName: e.target.value,
                      }))
                    }
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="country">Country</FieldLabel>
                  <Input
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    placeholder="United States"
                    value={data.country}
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, country: e.target.value }))
                    }
                  />
                </Field>
              </div>

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  value={data.email}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </Field>

              <div className="flex flex-col md:flex-row gap-4">
                <Field className="flex-1 min-w-28">
                  <FieldLabel htmlFor="subject">Subject</FieldLabel>
                  <input type="hidden" name="subject" value={data.subject} />
                  <Select
                    value={data.subject}
                    onValueChange={(value) =>
                      setData((prev) => ({ ...prev, subject: value }))
                    }
                  >
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="General inquiry">
                        General inquiry
                      </SelectItem>
                      <SelectItem value="Support">Support</SelectItem>
                      <SelectItem value="Partnership">Partnership</SelectItem>
                      <SelectItem value="Feedback">Feedback</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field className="flex-1 min-w-[200px]">
                  <FieldLabel htmlFor="subject-extra">
                    Subject details
                  </FieldLabel>
                  <Input
                    id="subject-extra"
                    name="subjectDetails"
                    placeholder="Add details about your subject"
                    value={data.subjectDetails}
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        subjectDetails: e.target.value,
                      }))
                    }
                  />
                </Field>
              </div>

              <Field>
                <FieldLabel htmlFor="message">Message</FieldLabel>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here"
                  className="resize-none"
                  rows={5}
                  required
                  value={data.message}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, message: e.target.value }))
                  }
                />
              </Field>

              {error && (
                <div className="rounded-md bg-red-50 border border-red-200 p-4">
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              )}

              {success && (
                <div className="rounded-md bg-green-50 border border-green-200 p-4">
                  <p className="text-sm text-green-800">
                    Thank you! Your inquiry has been sent successfully.
                  </p>
                </div>
              )}

              <Field orientation="horizontal">
                <Button type="submit" disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </Button>
              </Field>
            </FieldGroup>
          </FieldSet>
        </FieldGroup>
      </form>
    </div>
  );
}
