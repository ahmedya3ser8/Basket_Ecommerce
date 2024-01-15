import { Link } from 'react-router-dom';
import { TfooterInfo } from '../../types/app';

function FooterRow({title, text1, text2, text3, text4}: TfooterInfo) {
  const linksInfo = [
    text1, text2, text3, text4
  ]
  return (
    <div>
      <h2 className="text-[25px] font-medium mb-3">{title}</h2>
      <ul>
        {linksInfo.map((linkInfo, index) => (
          <li className="p-1" key={index}>
            <Link to={'#'} className="text-[17px] text-[#666]" >
              {linkInfo}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterRow;