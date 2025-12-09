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

export function InquiryForm() {
  return (
    <div className="w-full max-w-3xl">
      <form>
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
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="country">Country</FieldLabel>
                  <Input
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    placeholder="United States"
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
                />
              </Field>

              <div className="flex flex-col md:flex-row gap-4">
                <Field className="flex-1 min-w-44">
                  <FieldLabel htmlFor="subject">Subject</FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General inquiry</SelectItem>
                      <SelectItem value="support">Support</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
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
                />
              </Field>

              <Field orientation="horizontal">
                <Button type="submit">Submit</Button>
              </Field>
            </FieldGroup>
          </FieldSet>
        </FieldGroup>
      </form>
    </div>
  );
}
