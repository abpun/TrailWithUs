"use client";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react";

interface DatePickerProps {
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
}

export function DatePicker({ selected, onSelect }: DatePickerProps) {
  const [date, setDate] = useState<Date | undefined>(selected);
  const [open, setOpen] = useState(false);

  const handleSelect = (date: Date | undefined) => {
    setDate(date);
    onSelect?.(date);
  };

  return (
    <Popover modal={true} open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="z-50 relative flex items-center gap-2"
        >
          <CalendarIcon size={16} />
          {date ? date.toDateString() : "Pick a date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar 
          mode="single" 
          selected={date} 
          onSelect={handleSelect} 
          fromDate={new Date()} // Only allow future dates
        />
      </PopoverContent>
    </Popover>
  );
}