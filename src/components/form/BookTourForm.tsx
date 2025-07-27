import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { User, Mail, Phone, Calendar, Ticket } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  confirmEmail: string;
  phone: string;
  date: string;
  tickets: number;
  message: boolean;
}

export function BookTourForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <Card className="w-full mx-auto shadow-lg rounded-none">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Book This Tour
        </CardTitle>
        <p className="text-sm text-muted-foreground text-center">
          Fill out the form below to reserve your spot. We'll confirm your
          booking shortly.
        </p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="name"
              className="border border-gray-200 h-10 pl-9 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 outline-none"
              placeholder="John Doe"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="email"
              type="email"
              className="border border-gray-200 h-10 pl-9 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 outline-none"
              placeholder="your@email.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="confirmEmail"
              type="email"
              className="border border-gray-200 h-10 pl-9 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 outline-none"
              placeholder="confirm your email"
              {...register("confirmEmail", {
                required: "Please confirm your email",
                validate: (value) =>
                  value === watch("email") || "Emails do not match",
              })}
            />
            {errors.confirmEmail && (
              <p className="text-xs text-red-500 mt-1">
                {errors.confirmEmail.message}
              </p>
            )}
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="phone"
              type="tel"
              className="border border-gray-200 h-10 pl-9 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 outline-none"
              placeholder="+1 (123) 456-7890"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
                  message: "Invalid phone number",
                },
              })}
            />
            {errors.phone && (
              <p className="text-xs text-red-500 mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="date"
              className="border border-gray-200 h-10 pl-9 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 outline-none appearance-none"
              {...register("date", {
                required: "Date is required",
                min: {
                  value: new Date().toISOString().split("T")[0],
                  message: "Date must be in the future",
                },
              })}
            />
            {errors.date && (
              <p className="text-xs text-red-500 mt-1">{errors.date.message}</p>
            )}
          </div>

          <div className="relative">
            <Ticket className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="tickets"
              type="number"
              className="border border-gray-200 h-10 pl-9 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 outline-none placeholder:text-gray-200"
              min="1"
              max="10"
              {...register("tickets", {
                required: "Number of tickets is required",
                min: {
                  value: 1,
                  message: "Minimum 1 ticket",
                },
                max: {
                  value: 10,
                  message: "Maximum 10 tickets",
                },
              })}
            />
            {errors.tickets && (
              <p className="text-xs text-red-500 mt-1">
                {errors.tickets.message}
              </p>
            )}
          </div>

          <Separator className="my-4" />

          <div className="flex space-x-4">
            <Button
              variant="outline"
              className="flex-1 h-12 "
              type="button"
            >
              Check Availability
            </Button>
            <Button
              className="flex-1 h-12  hover:bg-[#df6951e3] bg-[#DF6951] text-white"
              type="submit"
            >
              Book Now
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            * Required fields. Your information is secure and will not be
            shared.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
