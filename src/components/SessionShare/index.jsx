import {ShareDiv} from './styled'

export default function ShareS() {
    return (
        <ShareDiv>
            <div className="mainShare">
                <h3>
                    Compartilhe :
                </h3>
                <div className="icons">
                    <img src="/image/whats-share.png" alt="" />
                    <img src="/image/telegram-share.png" alt="" />
                    <img src="/image/facebook-share.png" alt="" />
                    <img src="/image/twitter-share.png" alt="" />
                    <img src="/image/linkedin-share.png" alt="" />
                </div>
            </div>
        </ShareDiv>
    )
}