import React from 'react'
import LinkedinLogo from '../media/linkedin-logo.jpg'
import FacebookLogo from '../media/facebook-logo.jpg'
import GithubLogo from '../media/image.png'
import TwitterLogo from '../media/twitter-logo.png'
import InstaLogo from '../media/insta-logo.png'
import DiscordLogo from '../media/discord-logo.png'
const Socials = () => {
  return (
    <div className='socials'>
        <img src={DiscordLogo} alt="" className="discord" />
        <img src={LinkedinLogo} alt="" className="linkedin" />
        <img src={InstaLogo} alt="" className="insta" />
        <img src={FacebookLogo} alt="" className="facebook" />
        <img src={TwitterLogo} alt="" className="twitter" />
        <img src={GithubLogo} alt="" className="github" />
    </div>
  )
}

export default Socials