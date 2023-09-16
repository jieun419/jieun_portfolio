import { Dispatch, SetStateAction } from 'react';

export type TabsProps = {
  targetRef: React.RefObject<HTMLElement>;
  scrollToTarget: () => void;
  isTarget: boolean;
  targetName: string;
  setIsTarget: Dispatch<SetStateAction<boolean>>;
};

export interface TabsPropsT {
  navTabs: TabsProps[];
  id?: string;
}


export type ProjectDataT = {
  title: string;
  subtext: string;
  tag: string[];
  imgurl: string;
};

export type RecordDataT = {
  data: string;
  title: string;
  role: string;
  infos: string[];
  stacks: string[];
};