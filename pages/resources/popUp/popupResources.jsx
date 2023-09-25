/** @format */

import React, { useState, useEffect, useRef } from "react";
import styles from "./popupResources.module.css";
import CosmeticSurgeryCard from "@/components/resources/cosmeticSurgeryInfo/cosmeticSurgeryCard";
import { BreastImplantInfo } from "@/components/resources/cosmeticSurgeryInfo/breastImplant/breastImplant";


import BreastLiftInfo from "@/components/resources/cosmeticSurgeryInfo/breastLift/breastLift";
import BreastReductionInfo from "@/components/resources/cosmeticSurgeryInfo/breastReduction/breastReduction";
import FaceliftInfo from "@/components/resources/cosmeticSurgeryInfo/faceLift/faceLift";
import LiposuctionInfo from "@/components/resources/cosmeticSurgeryInfo/liposuction/liposuction";
import TransitionInfo from "@/components/resources/cosmeticSurgeryInfo/transition/transition";
import RhinoplastyInfo from "@/components/resources/cosmeticSurgeryInfo/rhinoplasty/rhinoplasty";
import TummyTuckInfo from "@/components/resources/cosmeticSurgeryInfo/tummyTuck/tummyTuck";

function PopupResources({ isPopupVisible, onClose, selectedProcedure }) {

  useEffect(() => {
    if (surgeriesPopupRef.current) {
        setContentHeight(surgeriesPopupRef.current.clientHeight);
    }
}, [selectedNavProcedure]);

  const popupRef = useRef(null);
  const surgeriesPopupRef = useRef(null);

  const [selectedNavProcedure, setSelectedNavProcedure] =
    useState(selectedProcedure);

  useEffect(() => {
    setSelectedNavProcedure(selectedProcedure);
  }, [selectedProcedure]);

  const handleProcedureSelect = (procedureType) => {
    setSelectedNavProcedure(procedureType);
  };

  const getProcedureComponent = (procedure) => {
    const components = {
      breastImplant: BreastImplantInfo,
      breastLift: BreastLiftInfo,
      breastReduction: BreastReductionInfo,
      faceLift: FaceliftInfo,
      liposuction: LiposuctionInfo,
      trans: TransitionInfo,
      rhinoplasty: RhinoplastyInfo,
      tummyTuck: TummyTuckInfo,
    };

    return components[procedure] || null;
  };

  const ProcedureInfoComponent = getProcedureComponent(selectedNavProcedure);

  const handleClosePopup = () => {
    onClose();
  };

  const popupHeight = surgeriesPopupRef.current?.clientHeight;

  return (
    <div
    className={
      isPopupVisible ? styles.popupContainerFull : styles.popupContainerHidden
    }
  >
    <div ref={surgeriesPopupRef} className={styles.popupContainer} style={{ height: contentHeight }}>
      <div className={styles.popup_navMenu}>
        <div className={styles.popupMenu}>
        <CosmeticSurgeryCard
          onProcedureSelect={handleProcedureSelect}
          selectedProcedure={selectedNavProcedure}
        />
        </div>
      </div>

      <div
        className={styles.popup_info}
        // style={{ maxHeight: "90vh", overflowY: "auto" }} // Adjust maxHeight as needed
      >
        {ProcedureInfoComponent && (
          <ProcedureInfoComponent containerHeight={contentHeight} />
        )}
      </div>

      <button onClick={handleClosePopup} className={styles.closePopup}>
        x
      </button>
    </div>
  </div>
);
}

export default PopupResources;

// {
//   selectedNavProcedure === "breastLift" && <BreastLiftInfo />;
// }
// {
//   selectedNavProcedure === "breastReduction" && <BreastReductionInfo />;
// }
// {
//   selectedNavProcedure === "faceLift" && <FaceliftInfo />;
// }
// {
//   selectedNavProcedure === "liposuction" && <LiposuctionInfo />;
// }
// {
//   selectedNavProcedure === "trans" && <TransitionInfo />;
// }
// {
//   selectedNavProcedure === "rhinoplasty" && <RhinoplastyInfo />;
// }
// {
//   selectedNavProcedure === "tummyTuck" && <TummyTuckInfo />;
// }
