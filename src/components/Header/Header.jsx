import React from "react";
import './Header.css'
const Header = () => {
  return (
    <div className="bg-light">
      <nav class="navbar navbar-light container  justify-content-between">
        <h1 className="fs-1 f-bold ">Knowledge Cafe</h1>
         <img className="img_size" src="https://scontent.fdac80-1.fna.fbcdn.net/v/t39.30808-6/336892174_733134148397263_3882165088610595169_n.jpg?stp=dst-jpg_p843x403&_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFInbUkU2m4XfjyxLMW92N20rp854DlWBfSunzngOVYF58DHpVRsbGvUBM47LcpnG5VgICE7M5Of-0TAlMqGqY3&_nc_ohc=QQTxxmRwUrEAX-Aa9SS&_nc_ht=scontent.fdac80-1.fna&oh=00_AfBn09hlClWsRWYNvA9doNduOcR1xaLDIG6_r0vrDMR21g&oe=642A1C79" alt="" />
      </nav>
    </div>
  );
};

export default Header;
