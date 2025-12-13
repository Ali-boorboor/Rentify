"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as icon from "lucide-react";
import * as card from "@/components/ui/card";
import useAuthenticate from "@/hook/useAuthenticate";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  useGetFavouriteProperty,
  usePutFavouriteProperties,
} from "@/hook/useFavouritePropertiesRequests";

const propertyStatusMap = {
  success: {
    label: "تأیید شده",
    icon: icon.Check,
    className: "text-success",
  },
  warning: {
    label: "در انتظار تأیید",
    icon: icon.TriangleAlert,
    className: "text-warning",
  },
  error: {
    label: "رد شده",
    icon: icon.X,
    className: "text-destructive",
  },
} as const;

interface CardHeaderProps {
  image?: string;
  linkTo: string;
  propertyID: string;
  isFavourable?: boolean;
  hasRemoveButton: boolean;
  removeButtonHandler?: () => void;
  propertyStatus?: "success" | "error" | "warning";
}

const CardHeader = ({
  image,
  linkTo,
  propertyID,
  propertyStatus,
  isFavourable = true,
  hasRemoveButton = false,
  removeButtonHandler,
}: CardHeaderProps) => {
  const { data: authenticateData } = useAuthenticate();

  const isUserLogin = authenticateData?.status === 200;

  const { data: getFavouriteData, isPending: getFavouriteLoading } =
    useGetFavouriteProperty(true);

  const isFavourite =
    getFavouriteData?.favourites?.properties.includes(propertyID);

  const { mutate, isPending: isPutRequestLoading } =
    usePutFavouriteProperties();

  const statusInfo = propertyStatus ? propertyStatusMap[propertyStatus] : null;

  return (
    <card.CardHeader className="relative h-full bg-muted flex p-0">
      <Link className="relative h-full w-full" href={linkTo}>
        {image ? (
          <Image
            className="object-cover object-center"
            alt="property image"
            sizes="600px"
            src={image}
            fill
          />
        ) : (
          <icon.CameraOff className="absolute inset-0 m-auto size-full text-muted-foreground" />
        )}
      </Link>

      {hasRemoveButton && (
        <Button
          className="absolute top-3 left-3 bg-destructive"
          onClick={removeButtonHandler}
          variant="link"
          size="icon-sm"
        >
          <icon.X className="size-4.5 text-card" />
        </Button>
      )}

      {statusInfo && (
        <Button
          className={cn(
            "absolute top-3 right-3 bg-card border shadow-sm cursor-auto rounded-xl hover:opacity-100",
            statusInfo.className
          )}
          variant="link"
        >
          {statusInfo.label}
          <statusInfo.icon className="size-4.5" />
        </Button>
      )}

      {isFavourable && isUserLogin && (
        <Button
          className="absolute top-3 right-3 bg-card border shadow-sm"
          onClick={() => mutate(propertyID)}
          variant="link"
          size="icon"
        >
          {getFavouriteLoading || isPutRequestLoading ? (
            <Spinner />
          ) : (
            <icon.Heart
              className={cn(
                "size-4.5 stroke-destructive",
                "transition-all duration-200 ease-linear",
                isFavourite ? "fill-destructive" : "fill-muted"
              )}
            />
          )}
        </Button>
      )}
    </card.CardHeader>
  );
};

export default CardHeader;
