export interface ReflectionResponse {
  message: string;
  question: string;
}

// FIX: Define and export the PastEntry interface.
export interface PastEntry {
  id: string;
  date: string;
  entryText: string;
  feeling: string;
  reflection: ReflectionResponse;
}
