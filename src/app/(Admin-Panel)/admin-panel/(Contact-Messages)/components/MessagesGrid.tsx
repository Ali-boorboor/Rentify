"use client";

import React, { useState } from "react";
import DeleteDialog from "@adminPanel/contactMessages/components/DeleteDialog";
import useRemoveMessage from "@adminPanel/contactMessages/hooks/useRemoveMessage";
import ContactMessageCard from "@adminPanel/contactMessages/components/ContactMessageCard";
import { IContactUsMessage } from "@/models/ContactUsMessage";
import { useRouter } from "next/navigation";

interface MessagesGridProps {
  contactMessages: IContactUsMessage[];
}

const MessagesGrid = ({ contactMessages }: MessagesGridProps) => {
  const router = useRouter();

  const [shouldShowDeleteDialog, setShouldShowDeleteDialog] = useState(false);
  const [selectedMessageId, setSelectedMessageId] = useState<string | null>(
    null
  );

  const { mutate } = useRemoveMessage();

  const onOpenChangeHandler = (open: boolean) => {
    setShouldShowDeleteDialog(open);
  };

  const deletePropertyHandler = () => {
    if (!selectedMessageId) return;

    mutate(selectedMessageId, { onSuccess: () => router.refresh() });
  };

  return (
    <>
      <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {contactMessages.map((message) => (
          <ContactMessageCard
            name={`${message.name} ${message.familyName}`}
            removeButtonClickHandler={() => {
              setSelectedMessageId(message._id as string);
              setShouldShowDeleteDialog(true);
            }}
            key={message._id as string}
            message={message.message}
            email={message?.email}
            phone={message.phone}
          />
        ))}
      </div>

      <DeleteDialog
        onOpenChangeHandler={onOpenChangeHandler}
        deletePropertyHandler={deletePropertyHandler}
        shouldShowDeleteDialog={shouldShowDeleteDialog}
      />
    </>
  );
};

export default MessagesGrid;
