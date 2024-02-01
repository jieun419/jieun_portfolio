import tw from "tailwind-styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { filteringAcitions } from "../../store/filtering-slice";

const TabButton = tw.button`
  text-white
  rounded-full
  px-5
  py-2
  bg-transparent
  transition
  hover:bg-[#4e4e4e]

  max-sm:w-full
  max-sm:text-xs
`

const TabBtn = ({ children, type }: { children: React.ReactNode, type: string }) => {
  const dispatch = useDispatch();
  const keyword = useSelector((state: RootState) => state.filteringKeyword.keyword);

  const getKeyword = (type: string) => {
    dispatch(filteringAcitions.getKeyword(type));
  }

  const handlerFiltering = (type: string) => {
    getKeyword(type);
    dispatch(filteringAcitions.getFilteringData());
  }

  return (
    <TabButton
      className={keyword === type ? 'bg-superLightGray text-mainColorBlack font-bold hover:bg-superLightGray hover:text-mainColorBlack' : ''}
      name={type}
      onClick={() => handlerFiltering(type)}
    >
      {children}
    </TabButton>
  );
};

export default TabBtn;