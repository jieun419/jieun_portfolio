import { useDispatch, useSelector } from "react-redux";
import tw from "tailwind-styled-components";
import { filteringAcitions } from "../../store/filtering-slice";
import { RootState } from "../../store";
import { useEffect } from "react";

const TabButton = tw.button`
  text-white
  rounded-full
  px-5
  py-2
  bg-transparent
  transition
  
  hover:bg-[#4e4e4e]
`

const TabBtn = ({ children, type }: { children: React.ReactNode, type: string }) => {
  const dispatch = useDispatch();
  const keyword = useSelector((state: RootState) => state.filteringKeyword.keyword);
  const filterDataList = useSelector((state: RootState) => state.filteringKeyword.filterDataArr);

  const getKeyword = (type: string) => {
    dispatch(filteringAcitions.getKeyword(type))
  }

  const resetFilter = () => {
    dispatch(filteringAcitions.deleteFilteringData());
  }

  const handlerFiltering = (type: string) => {
    getKeyword(type);
    if (keyword !== type) {
      resetFilter();
    }
    dispatch(filteringAcitions.getFilteringData());
  }


  useEffect(() => {
    console.log('keyword', keyword)
    console.log('filterDataList', filterDataList)
  })


  return (
    <TabButton onClick={() => handlerFiltering(type)}>{children}</TabButton>
  );
};

export default TabBtn;