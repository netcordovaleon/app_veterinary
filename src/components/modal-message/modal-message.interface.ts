export interface ModalOptions {
  title: string;
  imgs: string;
  imgAlt: string;
  description: string;
}

interface Actions {
  action: () => void;
  color?: string;
  showButton: boolean;
  text: string;
}
