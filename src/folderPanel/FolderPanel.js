import { FolderDetail } from "./folderDetail/FolderDetail";
import React from "react";

export const FolderPanel = ({ folderLabelList }) => {
  return (
    <>
      {folderLabelList.map((value) => (
        <FolderDetail id={value.id} label={value.label} count={value.count} />
      ))}
    </>
  );
};
