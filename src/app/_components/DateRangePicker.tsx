"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface OptionalDateRange {
  from?: Date | null;
  to?: Date | null;
}

export function DatePickerWithRange({
  className,
  value,
  onChange,
}: React.HTMLAttributes<HTMLDivElement> & {
  value: OptionalDateRange | undefined;
  onChange: (date: OptionalDateRange | undefined) => void;
}) {
  const [date, setDate] = React.useState<OptionalDateRange | undefined>(value);

  React.useEffect(() => {
    if (value !== date) {
      setDate(value);
    }
  }, [value]);

  const handleSelect = (selectedDate: DateRange | undefined) => {
    const newDate = selectedDate
      ? {
          from: selectedDate.from || null,
          to: selectedDate.to || null,
        }
      : undefined;
    setDate(newDate);
    onChange(newDate);
  };

  const normalizedDate = date
    ? {
        from: date.from || undefined,
        to: date.to || undefined,
      }
    : undefined;

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}>
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={normalizedDate?.from}
            selected={normalizedDate}
            onSelect={handleSelect}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
