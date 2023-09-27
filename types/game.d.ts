export interface PastStep {
  item: Item
  exitProperty: Property
}

export interface Item {
  label: string;
  id: string;
  url: string;
}

export interface Property {
  label: string;
  id: string;
  url: string;
  backward: boolean;
}