import { create } from 'zustand';

interface State {
  activeSection: string;

  setActiveSection: (section: string) => void;

}


export const useUIStore = create<State>()((set) => ({
    activeSection: 'about',

    setActiveSection: (section) => set({ activeSection: section}),
}));