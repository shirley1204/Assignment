import { DROP_ACTIION_TYPES } from "./DropdownAction";
// import isEmpty from '../../utils/isEmpty';

const initialState = {
  isSelected: false,
  values: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DROP_ACTIION_TYPES.ON_SELECT_SUCCESS:
      return {
        ...state,
        isSelected: true,
        values: action.payload,
      };
    default:
      return state;
  }
}
