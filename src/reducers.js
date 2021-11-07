import { actionTypes } from "./actions";
const initState = {
  inboxCount: 0,
  flaggedCount: 0,
  deletedCount: 0,
  spamCount: 0,
  inbox: [],
  flagged: [],
  deleted: [],
  spam: []
};

export default function messageReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.updateInbox:
      const { inbox } = action.payload;
      return {
        ...state,
        inbox,
        inboxCount: inbox.length
      };
    case actionTypes.updateDeleted:
      const { deleted } = action.payload;
      return {
        ...state,
        deleted,
        deletedCount: deleted.length
      };
    case actionTypes.updateFlagged:
      const { flagged } = action.payload;
      return {
        ...state,
        flagged,
        flaggedCount: flagged.length
      };
    case actionTypes.updateSpam:
      const { spam } = action.payload;
      return {
        ...state,
        spam,
        spamCount: spam.length
      };
    default:
      return state;
  }
}
