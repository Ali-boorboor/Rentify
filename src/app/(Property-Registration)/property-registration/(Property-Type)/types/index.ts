interface Values {
  propertyCategory: string;
  contractType: string;
  mortgageAmount: string;
  rentAmount: string;
  isTransmutable: boolean;
}

interface FormProps {
  propertyCategories: { _id: string; enTitle: string; faTitle: string }[];
  contractTypes: { _id: string; title: string; value: string }[];
}

export type { Values, FormProps };
