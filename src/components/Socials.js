import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    RedditShareButton,
    RedditShareIcon,
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
        </>
    )
}
export default Socials
{/* The url passed in will be the url you want to share on social media */ }
{/* <FacebookShareButton url={window.location.href} size={32}>
    <FacebookIcon />
</FacebookShareButton> */}

