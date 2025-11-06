import { Values as PropertyDescriptionValues } from "@propertyDescriptionRegistration/types";
import { Values as PropertyEquipmentsValues } from "@propertyEquipmentsRegistration/types";
import { Values as PropertyLocationValues } from "@propertyLocationRegistration/types";
import { Values as PropertyDetailsValues } from "@propertyDetailsRegistration/types";
import { Values as PropertyTypeValues } from "@propertyTypeRegistration/types";
import { createJSONStorage, persist } from "zustand/middleware";
import { LatLngExpression } from "leaflet";
import { create } from "zustand";

interface UseFormsState {
  propertyTypeDatas: PropertyTypeValues | null;
  setPropertyTypeDatas: (propertyTypeDatas: PropertyTypeValues | null) => void;

  propertyLocationDatas: PropertyLocationValues | null;
  propertyLocationCoordinates: LatLngExpression | null;
  setPropertyLocationDatas: (
    propertyLocationDatas: PropertyLocationValues | null
  ) => void;
  setPropertyLocationCoordinates: (
    propertyLocationDatas: LatLngExpression | null
  ) => void;

  propertyDetailsDatas: PropertyDetailsValues | null;
  setPropertyDetailsDatas: (
    propertyDetailsDatas: PropertyDetailsValues | null
  ) => void;

  propertyEquipmentsDatas: PropertyEquipmentsValues | null;
  setPropertyEquipmentsDatas: (
    propertyEquipmentsDatas: PropertyEquipmentsValues | null
  ) => void;

  propertyDescriptionDatas: PropertyDescriptionValues | null;
  setPropertyDescriptionDatas: (
    propertyDescriptionDatas: PropertyDescriptionValues | null
  ) => void;

  resetAllForms: () => void;

  isAllFormsComplete: () => boolean;
}

const useFormsState = create<UseFormsState>()(
  persist(
    (set, get) => ({
      propertyTypeDatas: null,
      setPropertyTypeDatas: (propertyTypeDatas) => {
        return set({ propertyTypeDatas });
      },

      propertyLocationDatas: null,
      propertyLocationCoordinates: null,
      setPropertyLocationDatas: (propertyLocationDatas) => {
        return set({ propertyLocationDatas });
      },
      setPropertyLocationCoordinates: (propertyLocationCoordinates) => {
        return set({ propertyLocationCoordinates });
      },

      propertyDetailsDatas: null,
      setPropertyDetailsDatas: (propertyDetailsDatas) => {
        return set({ propertyDetailsDatas });
      },

      propertyEquipmentsDatas: null,
      setPropertyEquipmentsDatas: (propertyEquipmentsDatas) => {
        return set({ propertyEquipmentsDatas });
      },

      propertyDescriptionDatas: null,
      setPropertyDescriptionDatas: (propertyDescriptionDatas) => {
        return set({ propertyDescriptionDatas });
      },

      resetAllForms: () => {
        return set({
          propertyTypeDatas: null,
          propertyLocationDatas: null,
          propertyLocationCoordinates: null,
          propertyDetailsDatas: null,
          propertyEquipmentsDatas: null,
          propertyDescriptionDatas: null,
        });
      },

      isAllFormsComplete: () => {
        const state = get();
        return (
          !!state.propertyTypeDatas &&
          !!state.propertyLocationDatas &&
          !!state.propertyDetailsDatas &&
          !!state.propertyEquipmentsDatas &&
          !!state.propertyDescriptionDatas
        );
      },
    }),

    {
      name: "formsDatas",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => {
        const { isAllFormsComplete: _, resetAllForms: __, ...rest } = state;
        return rest;
      },
    }
  )
);

export default useFormsState;
export type { UseFormsState };
