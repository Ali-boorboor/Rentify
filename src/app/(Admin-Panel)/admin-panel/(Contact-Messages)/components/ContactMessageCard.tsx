import React from "react";
import * as card from "@/components/ui/card";
import ContactMessageCardDialog from "@adminPanel/contactMessages/components/ContactMessageCardDialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface ContactMessageCardProps {
  name: string;
  phone: string;
  email?: string;
  message: string;
  removeButtonClickHandler: () => void;
}

const ContactMessageCard = ({
  name,
  phone,
  email,
  message,
  removeButtonClickHandler,
}: ContactMessageCardProps) => {
  return (
    <card.Card className="relative">
      <card.CardHeader>
        <div className="flex justify-between items-baseline">
          <div className="space-y-1">
            <h5 className="md:text-lg font-semibold line-clamp-1">{name}</h5>

            <p className="text-sm md:text-base font-semibold">{phone}</p>
          </div>

          <p className="text-sm md:text-base font-semibold">{email}</p>
        </div>
      </card.CardHeader>

      <Button
        className="absolute -top-2 -right-2"
        onClick={removeButtonClickHandler}
        variant="destructive"
        size="icon-sm"
      >
        <X className="size-4.5" />
      </Button>

      <card.CardContent className="text-sm md:text-base text-right font-normal line-clamp-2">
        {message}
      </card.CardContent>

      <card.CardFooter>
        <ContactMessageCardDialog message={message} />
      </card.CardFooter>
    </card.Card>
  );
};

export default ContactMessageCard;
