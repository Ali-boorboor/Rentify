"use client";

import React, { useState } from "react";
import PropertyCard from "@/components/property-card";
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
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(
    null
  );

  const { mutate } = useDeleteUserProperty();

  const onOpenChangeHandler = (open: boolean) => {
    setShouldShowDeleteDialog(open);
  };

  const deletePropertyHandler = () => {
    if (!selectedPropertyId) return;

    mutate(selectedPropertyId, { onSuccess: () => router.refresh() });
  };

  return (
    <>
      <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {userProperties.map((property) => (
          <PropertyCard
            key={property._id as string}
            propertyCategory={parseJson(
              property.propertyDetails.propertyCategory
            )}
            removeButtonHandler={() => {
              setSelectedPropertyId(property._id as string);
              setShouldShowDeleteDialog(true);
            }}
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

export default UserPropertiesGrid;
