export const actionTypes = {
  updateInbox: "UPDATEINBOXFOLDER",
  updateFlagged: "UPDATEFLAGGEDFOLDER",
  updateSpam: "UPDATESPAMFOLDER",
  updateDeleted: "UPDATEDELETEDFOLDER"
};
export const actions = {
  updateInbox: (payload) => {
    return {
      type: actionTypes.updateInbox,
      payload
    };
  },
  updateDeleted: (payload) => {
    return {
      type: actionTypes.updateDeleted,
      payload
    };
  },
  updateSpam: (payload) => {
    return {
      type: actionTypes.updateSpam,
      payload
    };
  },
  updateFlagged: (payload) => {
    return {
      type: actionTypes.updateFlagged,
      payload
    };
  }
};
