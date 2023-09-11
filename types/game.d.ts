export interface Path {
  start: Omit<Step, 'forward'>;
  steps: Step[];
}

export interface Step {
  label: string;
  id: string;
  url: string;
  forward: boolean;
}

export type Start = Omit<Step, 'forward'>;