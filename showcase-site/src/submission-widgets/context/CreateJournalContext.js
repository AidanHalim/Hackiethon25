import { createContext, useContext } from 'react';

export const createJournalContext = () => {
  const JournalContext = createContext(null);
  const useJournal = () => {
    const ctx = useContext(JournalContext);
    if (!ctx) throw new Error("useJournal must be used inside provider");
    return ctx;
  };
  return { JournalContext, useJournal };
};
