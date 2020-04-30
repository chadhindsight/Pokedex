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
        <>
            {/* The url passed in will be the url you want to share on social media */}
            <FacebookShareButton url={window.location.href} size={32}>
                <FacebookIcon />
            </FacebookShareButton> 
            <TwitterShareButton url="https://twitter.com/home">
                <TwitterIcon />
            </TwitterShareButton>
            <RedditShareButton url="https://twitter.com/">
                < RedditIcon/>
             </RedditShareButton>
            <LinkedinShareButton url="https://chadhindsight.github.io/simon-jon/">
                <LinkedinIcon />
            </LinkedinShareButton>
            < TumblrShareButton url="https://chadhindsight.github.io/simon-jon/">
                <TumblrIcon />
            </TumblrShareButton>
        </>
    )
}
export default Socials;
