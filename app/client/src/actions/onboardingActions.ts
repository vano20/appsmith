import { ReduxActionTypes } from "constants/ReduxActionConstants";
import { IndicatorLocation } from "pages/Editor/GuidedTour/Indicator";

export const enableGuidedTour = (payload: boolean) => {
  return {
    type: ReduxActionTypes.ENABLE_GUIDED_TOUR,
    payload,
  };
};

export const toggleInOnboardingWidgetSelection = (payload: boolean) => {
  return {
    type: ReduxActionTypes.TOGGLE_ONBOARDING_WIDGET_SELECTION,
    payload,
  };
};

export const firstTimeUserOnboardingInit = (
  applicationId: string,
  pageId: string,
) => {
  return {
    type: ReduxActionTypes.FIRST_TIME_USER_ONBOARDING_INIT,
    payload: {
      applicationId: applicationId,
      pageId: pageId,
    },
  };
};

export const markStepComplete = () => {
  return {
    type: ReduxActionTypes.GUIDED_TOUR_MARK_STEP_COMPLETED,
  };
};

export const setIndicatorLocation = (location: IndicatorLocation) => {
  return {
    type: ReduxActionTypes.SET_INDICATOR_LOCATION,
    payload: location,
  };
};

export const tableWidgetWasSelected = (payload: boolean) => {
  return {
    type: ReduxActionTypes.TABLE_WIDGET_WAS_SELECTED,
    payload,
  };
};

export const setCurrentStep = (payload: number) => {
  return {
    type: ReduxActionTypes.SET_CURRENT_STEP,
    payload,
  };
};
