"use client";

import React, { useState } from "react";
import PropertyCard from "@/components/ui/PropertyCard";
import DeleteDialog from "@userPanel/userProperties/components/DeleteDialog";
import useDeleteUserProperty from "@userPanel/userProperties/hooks/useDeleteUserProperty";
import { IProperty } from "@/models/Property";
import { useRouter } from "next/navigation";
import { parseJson } from "@/utils/json";

interface UserPropertiesGridProps {
  userProperties: IProperty[];
}

const UserPropertiesGrid = ({ userProperties }: UserPropertiesGridProps) => {
  const router = useRouter();

  const [shouldShowDeleteDialog, setShouldShowDeleteDialog] = useState(false);

  const { mutate } = useDeleteUserProperty();

  const onOpenChangeHandler = (open: boolean) => {
    setShouldShowDeleteDialog(open);
  };

  const deletePropertyHandler = (propertyID: string) => {
    mutate(propertyID, { onSuccess: () => router.refresh() });
  };

  return (
    <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
      {userProperties.map((property) => (
        <React.Fragment key={property._id as string}>
          <PropertyCard
            propertyCategory={parseJson(
              property.propertyDetails.propertyCategory
            )}
            removeButtonHandler={() => setShouldShowDeleteDialog(true)}
            province={property.address.province.faName}
            mortgageAmount={property.mortgageAmount}
            propertyStatus={property.propertyStatus}
            linkTo={`/properties/${property._id}`}
            propertyID={String(property._id)}
            rentAmount={property.rentAmount}
            image={property?.images?.[0]}
            title={property.title}
            isFavourable={false}
            hasRemoveButton
          />

          <DeleteDialog
            onOpenChangeHandler={onOpenChangeHandler}
            shouldShowDeleteDialog={shouldShowDeleteDialog}
            deletePropertyHandler={() => {
              deletePropertyHandler(property._id as string);
            }}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default UserPropertiesGrid;
