import actions from './actions';

const {
  changeLayoutBegin,
  changeLayoutSuccess,
  changeLayoutErr,

  changeRtlBegin,
  changeRtlSuccess,
  changeRtlErr,

  changeMenuBegin,
  changeMenuSuccess,
  changeMenuErr,

  collapseMenuBegin,
  collapseMenuSuccess,
  collapseMenuErr,
} = actions;

const changeLayoutMode = (value) => {
  return async (dispatch) => {
    try {
      dispatch(changeLayoutBegin());
      dispatch(changeLayoutSuccess(value));
    } catch (err) {
      dispatch(changeLayoutErr(err));
    }
  };
};

const changeDirectionMode = (value) => {
  return async (dispatch) => {
    try {
      dispatch(changeRtlBegin());
      dispatch(changeRtlSuccess(value));
    } catch (err) {
      dispatch(changeRtlErr(err));
    }
  };
};

const changeMenuMode = (value) => {
  return (dispatch) => {
    try {
      dispatch(changeMenuBegin());
      dispatch(changeMenuSuccess(value));
    } catch (err) {
      dispatch(changeMenuErr(err));
    }
  };
};

const changeMenuCollapse = (value) => {
  return (dispatch) => {
    try {
      dispatch(collapseMenuBegin());
      dispatch(collapseMenuSuccess(value));
    } catch (err) {
      dispatch(collapseMenuErr(err));
    }
  };
};

export { changeLayoutMode, changeDirectionMode, changeMenuMode, changeMenuCollapse };
