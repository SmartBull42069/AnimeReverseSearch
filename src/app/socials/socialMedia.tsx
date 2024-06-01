import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import SvgIcon from "@mui/material/SvgIcon";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";



function TikTokIco({ color = "#000000" }) {
  return (
    <SvgIcon sx={{ fontSize: 40 }}>
      <svg
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="100%"
        height="100%"
      >
        <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
      </svg>
    </SvgIcon>
  );
}

export default function Socials(){
    return (
      <div>
        <div className="flex gap-3">
          <Link
            target="_blank"
            href="https://youtube.com/@br0cc0li210?si=QRN5FKZOYfDWsfjt"
            underline="none"
          >
            <YouTubeIcon
              className="text-red-600	"
              sx={{ fontSize: 40 }}
            ></YouTubeIcon>
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/nbit286/"
            underline="none"
          >
            <InstagramIcon
              className="text-pink-500"
              sx={{ fontSize: 40 }}
            ></InstagramIcon>
          </Link>
          <Link
            target="_blank"
            href="https://x.com/Br0cco0li?t=iR5ULuHT1oyzZ4tjdPzsOg&s=09"
            underline="none"
          >
            <XIcon className="text-black	" sx={{ fontSize: 40 }}></XIcon>
          </Link>
          <Link
            target="_blank"
            href="https://www.tiktok.com/@bigdaddy4206912?_t=8mp4Ny8xRmt&_r=1"
            underline="none"
          >
            <TikTokIco color="" />
          </Link>
        </div>
        <Button
          variant="contained"
          target="_blank"
          component={Link}
          className="min-w-full mt-1"
          href="https://www.paypal.com/donate/?hosted_button_id=APXMKHWANTLGU"
        >
          SUPPORT ME!!
        </Button>
      </div>
    );
}
