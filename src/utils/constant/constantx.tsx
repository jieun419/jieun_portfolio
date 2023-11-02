import GoTopBtn from "../../components/button/GotoTopBtn";
import MailSentBtn from "../../components/button/MailSendBtn";

export const quickBtnsData = [
  {
    id: 1,
    datatooltip: '피드백 주기',
    tooltiptype: 'left',
    icon: <MailSentBtn />
  },
  {
    id: 2,
    datatooltip: '위로가기',
    tooltiptype: 'left',
    icon: <GoTopBtn />
  }
]