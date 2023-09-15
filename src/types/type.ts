export type TabsProps = {
  targetRef: React.RefObject<HTMLElement>;
  scrollToTarget: () => void;
  isTarget: boolean;
  targetName: string;
}

export interface TabsPropsT {
  navTabs: TabsProps[]
  id?: string
}