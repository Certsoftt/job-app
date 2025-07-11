"use client";
import React from "react";
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sidebarNavItems, sidebarNavItemsType, sidebarNavSetting } from "@/utils/mockSideBarData";
import UserProfileCard from "@/components/ui/UserProfileCard";
import LogoutButton from "@/components/ui/LogoutButton";

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  return (
    <>
      <aside className="w-[17.5%] p-6 flex flex-col space-y-6 top-0 left-0">
        <div className="bg-white px-8 py-2 h-16 rounded-xl w-[15rem] flex items-center justify-center overflow-hidden">
          <Image src="/logo.png" alt="Nexoris Logo" width={150} height={150} />
        </div>

        <div className="bg-white w-[15rem] py-6 rounded-xl px-8 flex flex-col gap-4">
          {/* <div className="flex items-end justify-end">
            <Image src="/Arrow - Up Circle.svg" alt="" width={30} height={30} />
          </div> */}

          <nav className="flex flex-col space-y-4">
            <ul className="flex flex-col space-y-4">
              {sidebarNavItems.map((item:sidebarNavItemsType)=>{
                const isActive = item.href === pathname;
                return(
                  <li key={item.label} className={`${isActive ? "bg-[#543CDA] text-white" :"hover:bg-[#543CDA] hover:text-white"} flex items-center gap-4 px-4 py-4 rounded cursor-pointer text-[#543CDA] font-medium group`}>
                    <span className="flex items-center justify-center w-6 h-6">
                      {item.icon.map(([img1, img2])=>(
                        <React.Fragment key={img1}>
                          <Image
                            src={img1}
                            alt={`${item.label} icon`}
                            width={15}
                            height={15}
                            className={`${isActive ? "hidden" : "group-hover:hidden"}`}
                          />
                          <Image
                            src={img2}
                            alt={`${item.label} icon`}
                            width={15}
                            height={15}
                            className={`${isActive ? "block" : "hidden group-hover:block"}`}
                          />
                        </React.Fragment>
                      ))}
                    </span>
                    <Link href={item.href} aria-current={isActive ? "page" : undefined} className="flex-1">
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>

            <div className="border-1 border-[#EAE8F7]"></div>

            <ul>
              {sidebarNavSetting.map((item:sidebarNavItemsType)=>(
                <li key={item.label} className={`${item.href === pathname ? "bg-[#543CDA] text-white" :"hover:bg-[#543CDA] hover:text-white"} flex items-center gap-4 px-4 py-4 rounded cursor-pointer text-[#543CDA] font-medium group`}>
                  <span className="flex items-center justify-center w-6 h-6">
                    {item.icon.map(([img1, img2])=>(
                      <React.Fragment key={img1}>
                        <Image
                          src={img1}
                          alt={`${item.label} icon`}
                          width={15}
                          height={15}
                          className={`${item.href === pathname ? "hidden" : "group-hover:hidden"}`}
                        />
                        <Image
                          src={img2}
                          alt={`${item.label} icon`}
                          width={15}
                          height={15}
                          className={`${item.href === pathname ? "block" : "hidden group-hover:block"}`}
                        />
                      </React.Fragment>
                    ))}
                  </span>
                  <Link href={item.href} className="flex-1">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-6">
            <UserProfileCard />
            <LogoutButton />
          </div>
        </div>
      </aside>
    </>
  );
}

export default React.memo(Sidebar);
