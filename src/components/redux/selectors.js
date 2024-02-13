import { createSelector } from '@reduxjs/toolkit';

const allSelectors = state => state.contacts;

export const selectItems = createSelector(
  allSelectors,
  contacts => contacts.items
);

export const selectError = createSelector(
  allSelectors,
  contacts => contacts.error
);
export const selectLoading = createSelector(
  allSelectors,
  contacts => contacts.isLoading
);

export const selectFilter = createSelector(
  allSelectors,
  contacts => contacts.filter
);
