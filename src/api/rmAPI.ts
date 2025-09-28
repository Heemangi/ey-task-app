import axios from 'axios';
import type { Character, CharacterAPIResponse } from '../types';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async (page: number): Promise<CharacterAPIResponse> => {
  const response = await axios.get(`${BASE_URL}/character?page=${page}`);
  return response.data;
};

export const getCharacterById = async (id: number): Promise<Character> => {
  const response = await axios.get(`${BASE_URL}/character/${id}`);
  return response.data;
};
