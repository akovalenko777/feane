export default function Share({title, image, descr}){

  const SHARE_LINK_EN = encodeURIComponent(window.location.href)

  const description = descr && descr.substring(0, 140)

  const getShareLink = (socName) => {
    switch(socName){
      case 'fb':
        return 'https://www.facebook.com/sharer/sharer.php?u=#url' + SHARE_LINK_EN + '&t=' + title + '&description=' + description + '&picture=' + image
      case 'pi':
        return 'http://pinterest.com/pin/create/button/?url=' + SHARE_LINK_EN + '&media=' + image + '&description=' + title
      case 'tw':
        let twitter_title = '';
        const status = title + " " + SHARE_LINK_EN;
        if (status.length <= 140) {
            twitter_title = status;
        } else {
            twitter_title = title.substr(0, (title.length - SHARE_LINK_EN.length + 3)) + ".. " + SHARE_LINK_EN;
        }
        return 'https://twitter.com/intent/tweet?status=' + twitter_title
      case 'li':
        const site_url = window.location.origin
        return 'https://www.linkedin.com/shareArticle?mini=true&url=' + SHARE_LINK_EN + '&title=' + title + '&summary=' + description + '&source=' + site_url
      case 'tg':
        return 'https://t.me/share/url?url=' + SHARE_LINK_EN
      case 'tu':
        return 'https://www.tumblr.com/share/link?url=' + SHARE_LINK_EN
      case 'vb':
        return 'viber://forward?text='+SHARE_LINK_EN+'%20' + title
    }
  }

  const clickShareHandler = (socName) => {
    const href = getShareLink(socName)
    window.open(href, 'sharer', 'toolbar=0,status=0,width=700,height=400')
  }

  if(!title){
    return <></>
  }

  return (
    <ul className="share-list">
      <li>
        <button type="button" onClick={()=>{clickShareHandler('fb')}}>
          Facebook
        </button>
      </li>
      <li>
        <button type="button" onClick={()=>{clickShareHandler('pi')}}>
          Pinterest
        </button>
      </li>
      <li>
        <button type="button" onClick={()=>{clickShareHandler('tw')}}>
          Twitter
        </button>
      </li>
      <li>
        <button type="button" onClick={()=>{clickShareHandler('li')}}>
          LinkedIn
        </button>
      </li>
      <li>
        <button type="button" onClick={()=>{clickShareHandler('tg')}}>
          Telegram
        </button>
      </li>
      <li>
        <button type="button" onClick={()=>{clickShareHandler('tu')}}>
          Tumblr
        </button>
      </li>
      <li>
        <button type="button" onClick={()=>{clickShareHandler('vi')}}>
          Viber
        </button>
      </li>
    </ul>
  )
}