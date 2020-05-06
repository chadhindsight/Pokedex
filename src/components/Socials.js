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
                <FacebookIcon size={25} />
            </FacebookShareButton> 
            <TwitterShareButton url="https://zen-thompson-50a1a4.netlify.app/">
                <TwitterIcon size={25} />
            </TwitterShareButton>
            <RedditShareButton url="https://zen-thompson-50a1a4.netlify.app/">
                < RedditIcon size={25} />
             </RedditShareButton>
            <LinkedinShareButton url="https://zen-thompson-50a1a4.netlify.app/">
                <LinkedinIcon size={25} />
            </LinkedinShareButton>
            < TumblrShareButton url="https://zen-thompson-50a1a4.netlify.app/">
                <TumblrIcon size={25} />
            </TumblrShareButton>
        </ div>
    )
}
export default Socials;
