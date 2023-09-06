// import { MouseEventHandler } from 'react';
interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}
interface ICustomButton {
  isDisabled?: boolean;
  title: string;
  textStyles?: string;
  rightIcon?: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  containerStyles?: string;
}
interface CarCardProps {
  car: CarProps;
}
interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinder: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

interface HomeProps {
  searchParams: FilterProps;
}
interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

interface CarCardProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  cityMPG: number;
}

interface OptionProps {
  title: string;
  value: string;
}

interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}
