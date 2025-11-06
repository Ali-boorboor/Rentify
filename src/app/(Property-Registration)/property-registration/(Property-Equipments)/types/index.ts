interface Values {
  equipments: string[];
}

interface FormProps {
  equipmentsAndFacilities: { _id: string; label: string; value: string }[];
}

export type { Values, FormProps };
