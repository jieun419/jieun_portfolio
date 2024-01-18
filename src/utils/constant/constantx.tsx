import GoTopBtn from "../../components/button/GotoTopBtn";
import MailSentBtn from "../../components/button/MailSendBtn";
import FeedbackBtn from "../../components/button/FeedbackBtn";
import { EMAILL } from "./constant";

export const quickBtnsData = [
  {
    id: 1,
    datatooltip: EMAILL,
    tooltiptype: 'left',
    icon: <MailSentBtn />
  },
  {
    id: 2,
    datatooltip: '피드백 주기',
    tooltiptype: 'left',
    icon: <FeedbackBtn />

  },
  {
    id: 3,
    datatooltip: '위로가기',
    tooltiptype: 'left',
    icon: <GoTopBtn />
  }
]