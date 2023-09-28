export interface QueryData<Binding> {
  head: Head;
  results: Results<Binding>;
}

export interface Results<Binding> {
  bindings: Binding[];
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

export interface OptionsBinding {
  prop: Prop;
  item: Prop;
  p: Prop;
  label1: Label1;
  label2: Label1;
}

export type OptionsQueryData = QueryData<OptionsBinding>;

export interface EndsBinding {
  startItemLabel: Label1;
  startItem: Prop;
  endItemLabel: Label1;
  endItem: Prop;
}

export type EndsQueryData = QueryData<EndsBinding>;