import {
  FacebookShareButton,
  HatenaShareButton,
  LineShareButton,
  TwitterShareButton,
  HatenaIcon,
  LineIcon,
  TwitterIcon,
  FacebookIcon,
  PocketShareButton,
  PocketIcon,
} from "react-share";

export default function SnsShare({ url,title }) {
  //url変換
  url = process.env.NEXT_PUBLIC_DOMAIN + url;

  return (
    <div className="pt-3 border-t bg-gray-50 flex justify-center">
      <TwitterShareButton
        url={url}
        title={title}
        className="mx-2"
      >
        <TwitterIcon size={30} round={true} />
      </TwitterShareButton>

      <FacebookShareButton
        url={url}
        quote={title}
        className="mx-2"
      >
        <FacebookIcon size={30} round={true} />
      </FacebookShareButton>

      <LineShareButton
        url={url}
        title={title}
        className="mx-2"
      >
        <LineIcon size={30} round={true} />
      </LineShareButton>

      <HatenaShareButton
        url={url}
        title={title}
        className="mx-2"
      >
        <HatenaIcon size={30} round={true} />
      </HatenaShareButton>

      <PocketShareButton
        url={url}
        title={title}
        className="mx-2"
      >
        <PocketIcon size={30} round={true} />
      </PocketShareButton>
    </div>
  );
}
