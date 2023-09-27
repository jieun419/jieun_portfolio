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
  name: string;
  subject: string;
  tag: string[];
  imgurl: string;
  giturl?: string;
  depoloyurl?: string;
};

export type RecordDataT = {
  data: string;
  title: string;
  role: string;
  infos: string[];
  stacks: string[];
};

export type ProjectDetailDataT = {
  name: string;
  pointcolor: string;
  title: string;
  subtext: string;
  data: string;
  team: string;
  tag: string[];
  imgurl: string;
  giturl: string;
  depoloyurl?: string;
  blogurl?: {
    title: string;
    url: string;
  }[];
  tools: {
    title: string;
    detail: string;
  }[];
  parts: {
    title: string;
    detail: string;
  }[];
};
