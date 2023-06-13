import Logo from "../../../../assets/my-logo.svg";
import CloseIcon from "@common/components/icons-new/CloseIcon";

export default function ReceiptReview({ open, close }) {
  return (
    <dialog
      open={open}
      className="bg-black bg-opacity-50 w-[100dvw] h-[100dvh] z-50 top-0 left-0 fixed p-0 m-0"
    >
      <div className="p-6 rounded-xl absolute bg-white top-[50%] left-[45%] translate-x-[-50%] translate-y-[-50%]">
        <div onClick={close}>
          <CloseIcon
            color={"#514E4E"}
            className="absolute z-10 right-10 top-10 w-4 h-4"
          />
        </div>
        <div className="bg-[#FFF] w-[530px] border-2 border-[#514E4E] px-8 py-6">
          <img src={Logo} alt="logo" className="mb-4" />
          <div className="font-[700] text-center">
            <h1 className="text-2xl">Tanda Terima Transfer Posting</h1>
            <h1 className="uppercase text-[32px]">Berhasil</h1>
          </div>
          <div className="mt-[27px] font-[600]">
            <div className="flex gap-3 mb-3">
              <h1 className="w-28">No. Ref</h1>
              <span>:</span>
              <p>{"1012101345068,489597338"}</p>
            </div>
            <div className="flex gap-3 mb-3">
              <h1 className="w-28">Date</h1>
              <span>:</span>
              <p>{"16 August 2023 |13:01:12 22"}</p>
            </div>
            <div className="flex gap-3 mb-3">
              <h1 className="w-28">Material</h1>
              <span>:</span>
              <p>{"NFHANC-SK59JEAHCA"}</p>
            </div>
            <div className="flex gap-3 mb-3">
              <h1 className="w-28">Part name</h1>
              <span>:</span>
              <p>{"RAIL REAR GRAB K59J (SFG)"}</p>
            </div>
            <div className="flex gap-3 mb-3">
              <h1 className="w-28">Qty / pack</h1>
              <span>:</span>
              <p>{"54 Pcs"}</p>
            </div>
            <div className="flex gap-3 mb-3">
              <h1 className="w-28">Store Loc</h1>
              <span>:</span>
              <p>{"1012 ke 1013"}</p>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
