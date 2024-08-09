import Image from "next/image";
import Link from "next/link";
import avatar2 from "public/3d_avatar_2.png";

type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={className}>
      <div className="bg-medium-purple">
        <div className="flex items-center justify-center gap-10 py-10">
          <Image src={avatar2} alt="avatar2" width={80} />
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl">Admin</h1>
            <h1>Staff ID# 00001</h1>
            {/* <Link
              href="/edit-profile"
              className="bg-strong-purple text-white text-sm px-14 py-2 rounded-full"
            >
              Edit Profile
            </Link> */}
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-10 py-5">
        <span>© 2024 CICS</span>
        <span>Private Policy</span>
        <span>Contact Us</span>
      </div>
    </footer>
  );
}
