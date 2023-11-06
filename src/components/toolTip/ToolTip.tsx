import tw from 'tailwind-styled-components';

type StylePropsT = {
  type: string;
}

export const PToolTip = tw.div<StylePropsT>`
  relative
  flex  
  ${(props) => props.type === 'bottom' && 'justify-center'}
  ${(props) => props.type === 'top' && 'justify-center'}

  ${(props) => props.type === 'right' && 'items-center'}
  ${(props) => props.type === 'left' && 'items-center'} 
  group/tooltip
`;

export const CToolTip = tw.div<StylePropsT>`
  fixed
  flex
  items-center
  justify-center
  overflow-hidden
  rounded
  px-2
  py-1
  ${(props) => props.type === 'bottom' && 'translate-y-[140%]'}
  ${(props) => props.type === 'top' && 'translate-y-[-140%]'}
  ${(props) => props.type === 'right' && 'translate-x-[110%]'}
  ${(props) => props.type === 'left' && 'translate-x-[-110%]'} 
  invisible
  z-[10]

  after:absolute
  after:flex
  after:left-0
  after:top-0
  after:right-0
  after:bottom-0
  after:w-full
  after:h-full
  after:bg-[#232323]
  after:opacity-80
  after:z-[-1]

  group-hover/tooltip:visible
`;

export const ToolTipText = tw.span`
  text-[12px]
  text-white
`;

function DataToolTip({ children, dataTooltip, type }:
  {
    children: React.ReactNode,
    dataTooltip: string,
    type: string,
  }) {

  return (
    <PToolTip type={type} data-tooltip={dataTooltip}>
      {children}
      <CToolTip type={type}>
        <ToolTipText>
          {dataTooltip}
        </ToolTipText>
      </CToolTip>
    </PToolTip>
  )
}

export default DataToolTip;