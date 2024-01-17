import tw from 'tailwind-styled-components';
import DataToolTip from '../toolTip/ToolTip';
import { quickBtnsData } from '../../utils/constant/constantx';

export const QuickBtns = tw.div`
  fixed
  bottom-5
  right-5
  z-[2]
  flex
  flex-col
  gap-3
  items-center
  justify-center
  transition-all
`

export default function App() {
  return (
    <QuickBtns>
      {quickBtnsData.map((item) => (
        <DataToolTip key={item.id} dataTooltip={item.datatooltip} type={item.tooltiptype}>
          {item.icon}
        </DataToolTip>
      ))}
    </QuickBtns>
  );
}