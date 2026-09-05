const STORAGE_KEY = 'tourismwise_suggestions';

export const getSuggestions = () => {
  try {
    const storedSuggestions =
      localStorage.getItem(STORAGE_KEY);

    return storedSuggestions
      ? JSON.parse(storedSuggestions)
      : [];
  } catch (error) {
    console.error(
      'Unable to load suggestions:',
      error
    );

    return [];
  }
};

export const saveSuggestion = (suggestion) => {
  const existingSuggestions =
    getSuggestions();

  const newSuggestion = {
    id: `suggestion-${Date.now()}`,
    ...suggestion,
    category: 'Underrated',
    createdAt: new Date().toISOString(),
  };

  const updatedSuggestions = [
    ...existingSuggestions,
    newSuggestion,
  ];

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedSuggestions)
  );

  return newSuggestion;
};

export const clearSuggestions = () => {
  localStorage.removeItem(STORAGE_KEY);
};

export default {
  getSuggestions,
  saveSuggestion,
  clearSuggestions,
};