import { ReactNode } from "react";

export interface ComponentProps {
  children: ReactNode;
}

// interfaces/index.ts
export interface ButtonProps {
  title: string;
  action?: () => void;
}
