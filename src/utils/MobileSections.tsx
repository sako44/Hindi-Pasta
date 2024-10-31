import { Link } from "react-router-dom";
type MobileProps = {
  text: string;
  url: string;
  closeMenu: () => void;
};
function MobileSections({ text, url, closeMenu }: MobileProps) {
  return (
    <Link
      to={url}
      onClick={closeMenu}
      className="font-semibold
   border-b border-primary hover:text-primary
    text-md py-3 text-left flex justify-between"
    >
      {text}
      <i className="ri-arrow-right-double-line text-primary"></i>
    </Link>
  );
}

export default MobileSections;
