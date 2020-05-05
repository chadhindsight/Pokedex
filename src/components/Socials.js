import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    RedditShareButton,
    RedditIcon,
    TumblrShareButton,
    TumblrIcon
} from 'react-share';

const Socials = () => {
    return (
        < div id="socials" >
            {/* The url passed in will be the url you want to share on social media */}
            <FacebookShareButton url={window.location.href} >
                <FacebookIcon size={25} className="social"/>
            </FacebookShareButton> 
            <TwitterShareButton  url="https://twitter.com/home">
                <TwitterIcon size={25} className="social"/>
            </TwitterShareButton>
            <RedditShareButton url="https://twitter.com/">
                < RedditIcon size={25} className="social"/>
             </RedditShareButton>
            <LinkedinShareButton url="https://chadhindsight.github.io/simon-jon/">
                <LinkedinIcon size={25} className="social"/>
            </LinkedinShareButton>
            < TumblrShareButton url="https://chadhindsight.github.io/simon-jon/">
                <TumblrIcon size={25} className="social"/>
            </TumblrShareButton>
        </ div>
    )
}
export default Socials;
