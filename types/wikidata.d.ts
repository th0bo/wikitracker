export interface QueryData<Binding> {
  head: Head;
  results: Results<Binding>;
}

export interface Head {
  vars: string[];
}

export interface Results<Binding> {
  bindings: Binding[];
}

export interface ResultCell {
  type: string;
  value: string;
}

export interface ResultLabel extends ResultCell {
  'xml:lang': string;
}