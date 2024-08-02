import React from "react";
import vedio1 from "../../vedios/meropatrovid.mp4";
import Modal from "react-bootstrap/Modal";
import { PiSealWarningBold } from "react-icons/pi";
import { MdOutlineFileDownload } from "react-icons/md";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <PiSealWarningBold className="text-red-600 inline-block text-3xl mr-3" />
          <span className="text-black font-bold"> Mero Patro</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div>
            <p>
              This application is not avialiable in playstore currently. But it
              cal be download and can be used through google drive . click the
              download button below to download
            </p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="w-full flex justify-center ">
          <a
            href="https://drive.google.com/drive/folders/19alLc8Lq0CWnUFSqCT_OKSlzLG0JPvHB?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="border border-black rounded-3xl p-1 px-3 flex overflow-hidden hover:bg-green-200">
              <div>
                <img src="assets/drive.png" alt="" style={{ width: 40 }} />
              </div>
              <p className="text-xl my-auto mx-2">Download</p>
              <div>
                <MdOutlineFileDownload className="text-3xl my-2" />
              </div>
            </div>
          </a>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

const MeroPatro = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="  lg:flex lg:w-[1100px] lg:mx-auto">
        <div className="lg:w-[50%] lg:order-2 ">
          <div className=" w-44 mx-auto  h-full">
            <video width="200" autoPlay muted>
              <source src={vedio1} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="lg:w-[50%] ">
          <div className="text-3xl md:text-4xl font-bold my-2 mx-3  text-black">
            MeroPatro ( React Native)
          </div>
          <div className="text-justify font-thin text-xl w-[95%] mx-auto">
            Mero-Patro is a mobile aplication desidned to be used in both
            android and ios. It is developed using React Native and oppers a
            features like 100 years+ of dates , Date conversion From BS to Ad
            and vice versa. It also offers karobar section where you can put
            your expenses and income and keep track of your trades in easy
            features. It is designed to be expandable so many features like
            events and alert system are going to be added in future.
          </div>
          <div
            className="items-center justify-center flex "
            onClick={() => setModalShow(true)}
          >
            <img src="meropatro/DownloadGP.png" alt="" className="w-48" />
          </div>
        </div>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
      <hr className="hrdivison" />
    </>
  );
};

export default MeroPatro;
