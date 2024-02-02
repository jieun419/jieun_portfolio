import { createSlice } from '@reduxjs/toolkit';
import { ProjectDataT } from '../types/type';
import { projectData } from '../data/content/projectData';

type TypeT = {
  keyword: string;
  filterDataArr: ProjectDataT[];
};

const initialState: TypeT = {
  keyword: 'all',
  filterDataArr: [],
};

const filteringSlice = createSlice({
  name: 'filtering',
  initialState,
  reducers: {
    getKeyword(state, actions) {
      state.keyword = actions.payload;
    },
    getFilteringData(state) {
      const filterDataList = projectData.filter((el) =>
        state.keyword === 'all' ? el.type !== state.keyword : el.type === state.keyword,
      );
      state.filterDataArr = [...filterDataList];
    },
    deleteFilteringData(state) {
      state.filterDataArr = [];
    },
  },
});

export const filteringReducer = filteringSlice.reducer;
export const filteringAcitions = filteringSlice.actions;
