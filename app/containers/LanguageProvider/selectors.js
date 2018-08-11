import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { getOr, get } from 'lodash/fp'

/**
 * Direct selector to the languageToggle state domain
 */
const selectLanguage = state => getOr(initialState, 'language')(state);

/**
 * Select the language locale
 */

const makeSelectLocale = () =>
  createSelector(selectLanguage, languageState => get('locale')(languageState));

export { selectLanguage, makeSelectLocale };
