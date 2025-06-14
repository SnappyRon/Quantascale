"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Calendar, X } from "lucide-react"
import { CalendlyWidget } from "./calendly-widget"

interface BookingModalProps {
  calendlyUrl: string
  triggerText?: string
  triggerClassName?: string
}

export function BookingModal({
  calendlyUrl,
  triggerText = "Book Strategy Call",
  triggerClassName = "",
}: BookingModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className={triggerClassName}>
          <Calendar className="mr-2 h-5 w-5" />
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full h-[80vh] bg-gray-900 border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-white font-light text-xl">Schedule Your Call</DialogTitle>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </DialogHeader>
        <div className="flex-1 overflow-hidden">
          <CalendlyWidget url={calendlyUrl} height={600} className="w-full h-full" />
        </div>
      </DialogContent>
    </Dialog>
  )
}
