import language from '../../reducers/language';
import * as types from '../../constants/ActionTypes';
import { DEFAULT_LANGUAGE } from '../../constants/localization';

describe('Language Reducer', () => {
  const initialState = {
    currentLanguage: DEFAULT_LANGUAGE
  };

  test('returns the initial state', () => {
    expect(language(undefined, {})).toEqual(initialState);
  });

  test('handles SET_LANGUAGE', () => {
    const newLanguage = 'es';
    const action = {
      type: types.SET_LANGUAGE,
      payload: newLanguage
    };
    
    const expectedState = {
      currentLanguage: newLanguage
    };
    
    expect(language(initialState, action)).toEqual(expectedState);
  });
  
  test('preserves state for unhandled actions', () => {
    const action = {
      type: 'UNHANDLED_ACTION',
      payload: 'some data'
    };
    
    expect(language(initialState, action)).toEqual(initialState);
  });
});
