import Link from "next/link";
import React from "react";
import Image from "next/image";
import employeeProfilePhoto from "../../_assets/images/employee-profile-photo.jpg";

const PageHeader = () => {
  return (
    <header className="header">
      <div className="flex items-center justify-between bg-base-300 px-8">
        <div className="flex-none">
          <a className="btn btn-ghost text-2xl">Treehorn Portal</a>
        </div>
        <div className="flex-none"></div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-2 text-lg">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <details>
                <summary>Profile</summary>
                <ul className="p-2 bg-base-300 rounded-t-none">
                  <li>
                    <a>Schedule</a>
                  </li>
                  <li>
                    <Link href="pages/hour-log">Hour Log</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
