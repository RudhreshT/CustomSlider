/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Arrow = ({ direction, handleClick}) => (
  <div className = 'arrow_group'
    css={css`
      display: flex;
      position: absolute;
      top: 45%;
      ${direction === 'right' ? `right: 25px` : `left: 25px`};
      height: 50px;
      width: 50px;
      justify-content: center;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;
      &:hover {
        transform: scale(1.1);
      }
      img {
        transform: translateX(${direction === 'left' ? '-2' : '2'}px);
        &:focus {
          outline: 0;
        }
      }
    `}
  >
    {/* {direction === 'right' ? <img onClick={!isChangeable && handleClick} style={{width:'100%',height:'100%',opacity: !isChangeable ? direction ==="right" ? 1:0.6 : 0.6}} src={arrow[1]} /> : <img onClick={!isChangeable && handleClick} style={{width:'100%',height:'100%',opacity: !isChangeable ? direction ==="left" ? 1:0.6 : 0.6}} src={arrow[0]} />} */}
    {direction === 'right' ? <img className="arrow rounded-circle" onClick={handleClick} alt="" style={{width:'60%',height:'60%',opacity: 'unset !important' }} src="https://i.ibb.co/y0gz19H/right-e3.png" /> : <img className="arrow rounded-circle" alt="" onClick={handleClick} style={{width:'60%',height:'60%',opacity: 'unset !important'}} src="https://i.ibb.co/qjFM8Bd/left-e3.png" />}

  </div>
)

export default Arrow;