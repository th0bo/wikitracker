export interface OptionsQueryData {
  head: Head;
  results: Results;
}

export interface Results {
  bindings: Binding[];
}

export interface Binding {
  prop: Prop;
  item: Prop;
  p: Prop;
  label1: Label1;
  label2: Label1;
}

export interface Label1 {
  'xml:lang': string;
  type: string;
  value: string;
}

export interface Prop {
  type: string;
  value: string;
}

export interface Head {
  vars: string[];
}